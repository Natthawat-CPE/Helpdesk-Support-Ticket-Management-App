package testing

import (
	"testing"

	"github.com/Natthawat-CPE/Helpdesk-Support-Ticket-Management-App/entity"
	"github.com/asaskevich/govalidator"
	. "github.com/onsi/gomega"
)

func TestPositiveTicket(t *testing.T) {
	g := NewGomegaWithT(t)

	ticket := entity.Ticket{
		Title: "API broken",
		Description: "When i request API it can't work Because my status HTTP = 400",
		User_name: "Natthawat",
		Phone: "0648094063",
		
	}

	// ตรวจสอบด้วย govalidator
	ok, err := govalidator.ValidateStruct(ticket)

	// ok ต้องไม่เป็นค่า true แปลว่าต้องจับ error ได้
	g.Expect(ok).To(BeTrue())

	// err ต้องไม่เป็นค่า nil แปลว่าต้องจับ error ได้
	g.Expect(err).To(BeNil())
}


func TestTitleNotBlank(t *testing.T) {
	g := NewGomegaWithT(t)

	ticket := entity.Ticket{
		Title: "",
		Description: "When i request API it can't work Because my status HTTP = 400",
		User_name: "Natthawat",
		Phone: "0648094063",
		
	}
	// ตรวจสอบด้วย govalidator
	ok, err := govalidator.ValidateStruct(ticket)

	// ok ต้องไม่เป็นค่า true แปลว่าต้องจับ error ได้
	g.Expect(ok).ToNot(BeTrue())

	// err ต้องไม่เป็นค่า nil แปลว่าต้องจับ error ได้
	g.Expect(err).ToNot(BeNil())

	// err.Error ต้องมี error message แสดงออกมา
	g.Expect(err.Error()).To(Equal("Title cannot be blank"))
}

func TestDescriptionNotBlank(t *testing.T) {
	g := NewGomegaWithT(t)

	ticket := entity.Ticket{
		Title: "API broken",
		Description: "",
		User_name: "Natthawat",
		Phone: "0648094063",
		
	}
	// ตรวจสอบด้วย govalidator
	ok, err := govalidator.ValidateStruct(ticket)

	// ok ต้องไม่เป็นค่า true แปลว่าต้องจับ error ได้
	g.Expect(ok).ToNot(BeTrue())

	// err ต้องไม่เป็นค่า nil แปลว่าต้องจับ error ได้
	g.Expect(err).ToNot(BeNil())

	// err.Error ต้องมี error message แสดงออกมา
	g.Expect(err.Error()).To(Equal("Please provide additional description"))
}

func TestUsernameNotBlank(t *testing.T) {
	g := NewGomegaWithT(t)

	ticket := entity.Ticket{
		Title: "API broken",
		Description: "When i request API it can't work Because my status HTTP = 400",
		User_name: "",
		Phone: "0648094063",
		
	}
	// ตรวจสอบด้วย govalidator
	ok, err := govalidator.ValidateStruct(ticket)

	// ok ต้องไม่เป็นค่า true แปลว่าต้องจับ error ได้
	g.Expect(ok).ToNot(BeTrue())

	// err ต้องไม่เป็นค่า nil แปลว่าต้องจับ error ได้
	g.Expect(err).ToNot(BeNil())

	// err.Error ต้องมี error message แสดงออกมา
	g.Expect(err.Error()).To(Equal("Username cannot be blank"))
}

func TestPhoneNotBlank(t *testing.T) {
	g := NewGomegaWithT(t)

	ticket := entity.Ticket{
		Title: "API broken",
		Description: "When i request API it can't work Because my status HTTP = 400",
		User_name: "Natthawat",
		Phone: "",
		
	}
	// ตรวจสอบด้วย govalidator
	ok, err := govalidator.ValidateStruct(ticket)

	// ok ต้องไม่เป็นค่า true แปลว่าต้องจับ error ได้
	g.Expect(ok).ToNot(BeTrue())

	// err ต้องไม่เป็นค่า nil แปลว่าต้องจับ error ได้
	g.Expect(err).ToNot(BeNil())

	// err.Error ต้องมี error message แสดงออกมา
	g.Expect(err.Error()).To(Equal("You haven't entered a mobile number yet"))
}

func TestDigitsPhone(t *testing.T) {
	g := NewGomegaWithT(t)

	ticket := entity.Ticket{
		Title: "API broken",
		Description: "When i request API it can't work Because my status HTTP = 400",
		User_name: "Natthawat",
		Phone: "064328defw",
		
	}
	// ตรวจสอบด้วย govalidator
	ok, err := govalidator.ValidateStruct(ticket)

	// ok ต้องไม่เป็นค่า true แปลว่าต้องจับ error ได้
	g.Expect(ok).ToNot(BeTrue())

	// err ต้องไม่เป็นค่า nil แปลว่าต้องจับ error ได้
	g.Expect(err).ToNot(BeNil())

	// err.Error ต้องมี error message แสดงออกมา
	g.Expect(err.Error()).To(Equal("The phone number must have 10 digits"))
}
