import React, { useState, useEffect } from "react";
import { Col, Row, Card, Layout, Menu, Button, theme } from "antd";
import { Key } from "@mui/icons-material";
import Edit_ContentDrawer from "./Edit_ContentDrawer";

import {Ticket} from "../interfaces/Ticketinterface"
import { Console } from "console";
          


interface Props {
    setOpenDrawer: React.Dispatch<React.SetStateAction<string>>;
}
const Status_Content: React.FC<Props> = ({setOpenDrawer}) => {

  const [TricketPending, setTricketPending] = React.useState<Ticket[]>([]);
  const [TicketAll, setTricketAll] = React.useState<Ticket[]>([]);
  
  //TODO Connect Service API
  const apiUrl = "http://localhost:8080";
  //!! CustomerID ??????
  // const customerID = parseInt(localStorage.getItem("uid") + "");
  //!! Ticket ID หาวิธีใส่ตอนกด
  const TicketID = 2;

  //GET ListTicket All
  const ListTicket = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json",
      },
    };
  
    try {
      const response = await fetch(`${apiUrl}/ListTickets`, requestOptions);
      const data = await response.json();
  
      if (data.data) {
        setTricketAll(data.data);
        console.log(data.data);
        return data.data;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return false;
    }
  }

  //GET Ticket/:id
  const GetTicket = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    let res = await fetch(`${apiUrl}/GetTicket/${TicketID}`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          return res.data

        } else {
          return false
        }
      });
      return res
  };

  //GET ListTicketPending All
  const ListTicketPending = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(`${apiUrl}/ListTicketPending`, requestOptions);
      const data = await response.json();
  
      if (data.data) {
        setTricketPending(data.data);
        console.log(data.data);
        return data.data;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return false;
    }
  };
  
  


  //GET ListTicketAccepted All
  const ListTicketAccepted = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json",
      },
    };
  
    let res = await fetch(`${apiUrl}/ListTicketAccepted`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          return res.data;
        } else {
          return false;
        }
      });
  
    return res;
  }

  //GET ListTicketResolved All
  const ListTicketResolved = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json",
      },
    };
  
    let res = await fetch(`${apiUrl}/ListTicketResolved`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          return res.data;
        } else {
          return false;
        }
      });
  
    return res;
  }

  //GET ListTicketRejected All
  const ListTicketRejected = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json",
      },
    };
  
    let res = await fetch(`${apiUrl}/ListTicketRejected`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          return res.data;
        } else {
          return false;
        }
      });
  
    return res;
  }

  //PATCH  UpdateTicket/:id
  const UpdateTicket = async () => {
    // var pphonee = phone.split("-");
    // var pphonee2 = pphonee[0] + pphonee[1] + pphonee[2];
    let data = {
      // ID: customerID,
      // Name: NAMEa,
      // CAREER_ID: convertType(Careera),
      // Phone: pphonee2,
    };

    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    let res = await fetch(`${apiUrl}/UpdateTicket/${TicketID}`, requestOptions)
    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          return res.data
        } else {
          return false
        }
      });
      return res;
  }

  //PATCH  UpdateStatusTicket/:id
  const UpdateStatusTicket = async () => {
    // var pphonee = phone.split("-");
    // var pphonee2 = pphonee[0] + pphonee[1] + pphonee[2];
    let data = {
      // ID: customerID,
      // Name: NAMEa,
      // CAREER_ID: convertType(Careera),
      // Phone: pphonee2,
    };

    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    let res = await fetch(`${apiUrl}/UpdateStatusTicket/${TicketID}`, requestOptions)
    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          return res.data
        } else {
          return false
        }
      });
      return res;
  }


  useEffect(() => {
    const fetchData = async () => {
      await ListTicketPending();
      await ListTicket();
    };
    fetchData();
  }, []);


  












    const handleFunctionCall = (setDrawer: string) =>{
        setOpenDrawer(setDrawer);
    }


  //TODO dataMock เอาไว้เก็บในส่วนของ body  ตอนนี้ ซึ่งไม่ได้นำไปใช้แบบนี้
  const dataMock = [
    { Title: "Computer Broken", Content1: "Content 1", Content2: "Content 2" },
    { Title: "Computer Broken", Content1: "Content 1", Content2: "Content 2" },
    { Title: "Computer Broken", Content1: "Content 1", Content2: "Content 2" },
    { Title: "Computer Broken", Content1: "Content 1", Content2: "Content 2" },
    { Title: "Computer Broken", Content1: "Content 1", Content2: "Content 2" },
    { Title: "Computer Broken", Content1: "Content 1", Content2: "Content 2" },
    { Title: "Computer Broken", Content1: "Content 1", Content2: "Content 2" },
    { Title: "Computer Broken", Content1: "Content 1", Content2: "Content 2" },
    { Title: "Computer Broken", Content1: "Content 1", Content2: "Content 2" },
    { Title: "Computer Broken", Content1: "Content 1", Content2: "Content 2" },
  ];

  //TODO numOfcol เอาไว้เก็บในส่วนของหัว Title ตอนนี้ ซึ่งไม่ได้นำไปใช้แบบนี้
  const numOfcol = [
    { Title: "Pending" },
    { Title: "Accepted" },
    { Title: "Resolved" },
    { Title: "Rejected" },
  ];
  return (
      <div>
        <div>
        </div>
      <Row>
        {numOfcol.map((item, index) => (
          <Col span={6} id="col-topic">
            <div style={{width: "94%"}}>

            <Card
              title={item.Title}
              bordered={false}
              size={"small"}
              headStyle={{ fontWeight: 900, borderBottom: "0px" }}
              bodyStyle={{ padding: "1px" }}
              style={{
                width: "85%",
                marginLeft: 24,
                marginRight: 40,
                marginTop: 15,
                textAlign: "center",
              }}
              ></Card>
              </div>
          </Col>
        ))}
      </Row>

      {/*//TODO Loop สร้าง Ticket */}
      {TricketPending.map((item, index) => (
        <Row>
          {numOfcol.map((num = item, point) => (
            <Col span={6} id="col">
              <div style={{width: "94%"}} onClick={() =>handleFunctionCall('true')}>

              <Card
                title={item.Title}
                id="card"
                bordered={false}
                size={"small"}
                style={{
                  width: "85%",
                    marginLeft: 24,
                    marginRight: 40,
                    marginTop: 20,
                    marginBottom: 14,
                  }}
                  >
                {/* <p>{item.Content1}</p>
                <p>{item.Content2}</p>
                <p>{item.Content2}</p> */}
              </Card>
                  </div>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
}

export default Status_Content;
