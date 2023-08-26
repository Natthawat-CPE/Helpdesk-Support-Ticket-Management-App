package main

import (
	"github.com/Natthawat-CPE/Helpdesk-Support-Ticket-Management-App/controller"
	"github.com/Natthawat-CPE/Helpdesk-Support-Ticket-Management-App/entity"
	"github.com/gin-gonic/gin"
)

func main() {
	entity.SetupDatabase()

	r := gin.Default()

	r.Use(CORSMiddleware())

	//GET Ticket
	r.GET("/ListTickets",controller.ListTicket)
	r.GET("/GetTicket/:id",controller.GetTicket)
	r.GET("/ListTicketPending",controller.ListTicketPending)
	r.GET("/ListTicketAccepted",controller.ListTicketAccepted)
	r.GET("/ListTicketResolved",controller.ListTicketResolved)
	r.GET("/ListTicketRejected",controller.ListTicketRejected)

	// PATCH Ticket
	r.PATCH("/UpdateTicket/:id",controller.UpdateTicket)
	r.PATCH("/UpdateStatusTicket/:id",controller.UpdateStatusTicket)


	// POST Ticket
	r.POST("/CreateTicket",controller.CreateTicket)


	r.Run()



}



func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT,PATCH,DELETE")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}