package controller

import (
	"net/http"

	"github.com/Natthawat-CPE/Helpdesk-Support-Ticket-Management-App/entity"

	"github.com/gin-gonic/gin"
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