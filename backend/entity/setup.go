package entity

import (
	"fmt"
	"time"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var statusArray = [...]Status{{StatusName: "pending"},
							  {StatusName: "accepted"},
							  {StatusName: "resolved"},
							  {StatusName: "rejected"}}

var db *gorm.DB


func DB() *gorm.DB {
	return db
}


func SetupDatabase() {
	database, err := gorm.Open(sqlite.Open("ticket.db"), &gorm.Config{})

	if err != nil {
		panic("failed to connect database")
	}

	migrator := database.Migrator()

	if !migrator.HasTable(&Ticket{}) || !migrator.HasTable(&Status{}) {
		database.AutoMigrate(
			&Status{},	
			&Ticket{},
		)
		db = database
		// Initial Data to Table Status
		db.Model(&Status{}).Create(&statusArray[0])
		db.Model(&Status{}).Create(&statusArray[1])
		db.Model(&Status{}).Create(&statusArray[2])
		db.Model(&Status{}).Create(&statusArray[3])
		
		
		//Data mockup for test system servic
		mockupData(2)
	}
	db = database

}

func mockupData(i int) {
	num := 1
	for j:=1; j<=i; j++{
		for k:=0; k<=3; k++{
			title := fmt.Sprintf("Ticket (%d)",num)
			db.Create(&Ticket{
			Title: title,
			Description: "This is my Problems",
			User_name: "Natthawat",
			Phone: "0643284596",
			Create_time: time.Now(),
			Update_time: time.Now(),
			Status: statusArray[k],
			})
			num++
		}
	}

}