package entity

import (
	"time"

	"gorm.io/gorm"
)

type Ticket struct{
	TicketID		uint		`gorm:"primaryKey"`
	Title			string		`valid:"required~Title cannot be blank"`
	Description		string		`valid:"required~Please provide additional description"`
	User_name	    string		`valid:"required~Username cannot be blank"`
	Phone			string		`valid:"required~You haven't entered a mobile number yet, matches(^\\d{10}$)~The phone number must have 10 digits"`
	Create_time		time.Time
	Update_time		time.Time
	StatusID		*uint
	Status			Status		`gorm:"references:id" valid:"-"`
}

type Status struct{
	gorm.Model
	StatusName		string 		`gorm:"uniqueIndex"`
	Tickets			[]Ticket	`gorm:"foreignKey:StatusID"`
}