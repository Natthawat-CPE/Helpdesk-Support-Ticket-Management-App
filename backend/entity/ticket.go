package entity

import (
	"time"
	"gorm.io/gorm"
)

type Ticket struct{
	TicketID		uint		`gorm:"primaryKey"`
	Title			string
	Description		string
	User_name	    string
	Phone			string
	Create_time		time.Time
	Update_time		time.Time
	StatusID		*uint
	Status			Status		`gorm:"references:id"`
}

type Status struct{
	gorm.Model
	StatusName		string 		`gorm:"uniqueIndex"`
	Tickets			[]Ticket	`gorm:"foreignKey:StatusID"`
}