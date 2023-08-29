export interface CreateTicket{
    Title: string,
    Description: string,
    User_name: string,
    Phone: string
}

export interface UpdateStatusTicket{
    TicketID: number,
    StatusID: number,
}

export interface UpdateTicket{
    TicketID: number,
    Title: string,
    Description: string,
    User_name: string,
    Phone:  string,
}

export interface Ticket{
    TicketID: number,
    Title: string,
    Description: string,
    User_name: string,
    Phone:  string,
    Create_time: Date | null,
    Update_time: Date | null,
    StatusID: number,
}

export interface Status{
    id: number,
    StatusName:  string,
}
