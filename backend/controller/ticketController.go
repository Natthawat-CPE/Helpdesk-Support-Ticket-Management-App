package controller

import (
	"net/http"

	"github.com/Natthawat-CPE/Helpdesk-Support-Ticket-Management-App/entity"

	"github.com/gin-gonic/gin"

	"time"
)

// GET /All Ticket
func ListTicket(c *gin.Context){
	var Tickets []entity.Ticket

	if err := entity.DB().Preload("Status").Raw("SELECT * FROM tickets").Find(&Tickets).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data" : Tickets})
}

// GET /Ticket/:id
func GetTicket(c *gin.Context){
	var Ticket entity.Ticket
	id := c.Param("id")
	if tx := entity.DB().Preload("Status").Where("ticket_id = ?", id).First(&Ticket); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Ticket not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": Ticket})
}

// GET /All Ticket Status = pending

func ListTicketPending(c *gin.Context){
	var Tickets []entity.Ticket
	pending := "pending"

	if err := entity.DB().Preload("Status").Select("tickets.*, statuses.status_name").Joins("Inner join statuses on tickets.status_id = statuses.id").Where("statuses.status_name = ?", pending).Find(&Tickets).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data" : Tickets})
}

// GET /All Ticket Status = accepted

func ListTicketAccepted(c *gin.Context){
	var Tickets []entity.Ticket
	accepted := "accepted"

	if err := entity.DB().Preload("Status").Select("tickets.*, statuses.status_name").Joins("Inner join statuses on tickets.status_id = statuses.id").Where("statuses.status_name = ?", accepted).Find(&Tickets).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data" : Tickets})
}

// GET /All Ticket Status = resolved

func ListTicketResolved(c *gin.Context){
	var Tickets []entity.Ticket
	resolved := "resolved"

	if err := entity.DB().Preload("Status").Select("tickets.*, statuses.status_name").Joins("Inner join statuses on tickets.status_id = statuses.id").Where("statuses.status_name = ?", resolved).Find(&Tickets).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data" : Tickets})
}


// GET /All Ticket Status = rejected

func ListTicketRejected(c *gin.Context){
	var Tickets []entity.Ticket
	rejected := "rejected"

	if err := entity.DB().Preload("Status").Select("tickets.*, statuses.status_name").Joins("Inner join statuses on tickets.status_id = statuses.id").Where("statuses.status_name = ?", rejected).Find(&Tickets).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data" : Tickets})
}


//PATCH /Ticket for User,Client  BY /:id
func UpdateTicket(c *gin.Context){
	var Ticket entity.Ticket
	id := c.Param("id")

	if err := c.ShouldBindJSON(&Ticket); err != nil{
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := entity.DB().Model(Ticket).Where("ticket_id = ?", id).Updates(map[string]interface{}{"Title": Ticket.Title, "Description": Ticket.Description, "User_name": Ticket.User_name, "Phone":Ticket.Phone, "Update_time": time.Now()}).Error; err != nil {
	c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": Ticket})
}

// PATCH /Ticket for Admin BY /:id
func UpdateStatusTicket(c *gin.Context){
	var Ticket entity.Ticket
	id := c.Param("id")

	if err := c.ShouldBindJSON(&Ticket); err != nil{
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := entity.DB().Model(Ticket).Where("ticket_id = ?", id).Updates(map[string]interface{}{"StatusID": Ticket.StatusID, "Update_time": time.Now()}).Error; err != nil {
	c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": Ticket})
}

//POST /Ticket for User,Client
func CreateTicket(c *gin.Context){
	var ticket entity.Ticket
	var status entity.Status
	initStatus := uint(1)

	// bind เข้าตัวแปร customer
	if err := c.ShouldBindJSON(&ticket); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error":err.Error()})
		return
	}

	//  ค้นหา Status ด้วย id
    if tx := entity.DB().Where("id = ?", initStatus).First(&status); tx.RowsAffected == 0 {
    	c.JSON(http.StatusBadRequest, gin.H{"error": "Status not found"})
    	return
    }

	// // แทรกการ validate ไว้ช่วงนี้ของ controller
	// if _, err := govalidator.ValidateStruct(customer); err != nil {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	// 	return
	// }

	// // เข้ารหัสลับรหัสผ่านที่ผู้ใช้กรอกก่อนบันทึกลงฐานข้อมูล
	// hashPassword, err := bcrypt.GenerateFromPassword([]byte(customer.Password), 14)
	// if err != nil {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": "error hashing password"})
	// 	return
	// }

    //  สร้าง Ticket
    newTicket := entity.Ticket{
    	Title:        	ticket.Title,        // ตั้งค่าฟิลด์ ID_card
		Description:	ticket.Description,
		User_name:		ticket.User_name,
		Phone:			ticket.Phone,
		Create_time:	time.Now(),
		Update_time: 	time.Now(),
		StatusID: 		&initStatus,		

    }

    //  บันทึก
    if err := entity.DB().Preload("Status").Create(&newTicket).Error; err != nil {
    	c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
    	return
    }
    c.JSON(http.StatusOK, gin.H{"data": newTicket})
}

