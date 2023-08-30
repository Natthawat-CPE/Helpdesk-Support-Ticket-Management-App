import React, { useEffect } from "react";
import { Col, Row, Card, Layout, Menu, Button, theme } from "antd";
import {
  ListTicketPending,
  ListTicketAccepted,
  ListTicketResolved,
  ListTicketRejected,
} from "../services/TicketService";
import { Ticket } from "../interfaces/Ticketinterface";
import "./Tickets.css";
import moment from "moment";

interface Props {
  setOpenDrawer: React.Dispatch<React.SetStateAction<string>>;
  setTicKetID: React.Dispatch<React.SetStateAction<number>>;
}
const Status_Content: React.FC<Props> = ({ setOpenDrawer , setTicKetID }) => {
  const [TricketPending, setTricketPending] = React.useState<Ticket[]>([]);
  const [TricketAccepted, setTricketAccepted] = React.useState<Ticket[]>([]);
  const [TricketResolved, setTricketResolved] = React.useState<Ticket[]>([]);
  const [TricketRejected, setTricketRejected] = React.useState<Ticket[]>([]);

  const getTicketAll = async () => {
    let pending: any = await ListTicketPending();
    let accepted: any = await ListTicketAccepted();
    let resolved: any = await ListTicketResolved();
    let redected: any = await ListTicketRejected();
    setTricketPending(pending);
    setTricketAccepted(accepted);
    setTricketResolved(resolved);
    setTricketRejected(redected);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getTicketAll();
    };
    fetchData();
  }, []);

  const handleFunctionCall = (setDrawer: any) => {
    setOpenDrawer(setDrawer);
  };

  const handleRowClick = async (item: any) => {
    console.log("Clicked row with TicketID:", item);
    handleFunctionCall('true');
    setTicKetID(item);
  };

  const ColumnTopic = {
    col1: "Pending",
    col2: "Accepted",
    col3: "Resolved", 
    col4: "Rejected", 
  };

  return (
    <div>
      <Row gutter={[8, 8]}>
        <Col span={6} id="colTopic borderTopic">
          <Card
            id="cardTopic cardPending"
            title={ColumnTopic.col1}
            bordered={false}
            size={"small"}
            headStyle={{
              fontSize: 18,
              fontWeight: 700,
              borderBottom: "0px",
              marginTop: "3%",
              color: "#d46b08",
            }}
            bodyStyle={{ padding: "6px" }}
            style={{
              border: "2px solid #ffd591",
              background: "#fff7e6",
            }}
          ></Card>
        </Col>

        <Col span={6} id="colTopic borderTopic">
          <Card
            id="cardTopic"
            title={ColumnTopic.col2}
            bordered={false}
            size={"small"}
            headStyle={{
              fontSize: 18,
              fontWeight: 700,
              borderBottom: "0px",
              marginTop: "3%",
              color: "#0958d9",
            }}
            bodyStyle={{ padding: "6px" }}
            style={{
              border: "2px solid #91caff",
              background: "#e6f4ff",
            }}
          ></Card>
        </Col>

        <Col span={6} id="colTopic borderTopic">
          <Card
            id="cardTopic"
            title={ColumnTopic.col3}
            bordered={false}
            size={"small"}
            headStyle={{
              fontSize: 18,
              fontWeight: 700,
              borderBottom: "0px",
              marginTop: "3%",
              color: "#389e0d",
            }}
            bodyStyle={{ padding: "6px" }}
            style={{
              border: "2px solid #b7eb8f",
              background: "#f6ffed",
            }}
          ></Card>
        </Col>

        <Col span={6} id="colTopic borderTopic  ">
          <Card
            id="cardTopic"
            title={ColumnTopic.col4}
            bordered={false}
            size={"small"}
            headStyle={{
              fontSize: 18,
              fontWeight: 700,
              borderBottom: "0px",
              marginTop: "3%",
              color: "#cf1322",
            }}
            bodyStyle={{ padding: "6px" }}
            style={{
              border: "2px solid #ffa39e",
              background: "#fff1f09e",
            }}
          ></Card>
        </Col>
      </Row>

      <Row gutter={[8, 8]}>
        <Col span={6} id="colTicket borderTicket">
          <Row id="rowTicket">
            <br />
            {TricketPending.map((item, index) => (
              
              <Card
                title={item.Title}
                id="cardTicket T-br-Pen"
                bordered={false}
                size={"small"}
                onClick={() =>handleRowClick(item.TicketID)}
                headStyle={{background: "#fff7e6"}}
                bodyStyle={{ textAlign: "start", marginLeft: "5%" }}

              >
                <p>
                  <b>Description: </b>
                  {item.Description}
                </p>
                <p>
                  <b>Reporter Name: </b>
                  {item.User_name}
                </p>
                <p>
                  <b>Phone: </b>
                  {item.Phone}
                </p>
                <p>
                  <b>Created Timestamp: </b>
                  {moment(item.Create_time).format("YYYY-MM-DD,  HH:mm ")}
                </p>
                <p>
                  <b>Update Timestamp: </b>
                  {moment(item.Update_time).format("YYYY-MM-DD,  HH:mm ")}
                </p>
              </Card>
              

            ))}
          </Row>
        </Col>

        <Col span={6} id="colTicket borderTicket">
          <Row id="rowTicket">
            <br />
            {TricketAccepted.map((item, index) => (
              <Card
                title={item.Title}
                id="cardTicket T-br-Acc"
                bordered={false}
                size={"small"}
                onClick={() =>handleRowClick(item.TicketID)}
                headStyle={{background: "#e6f4ff"}}
                bodyStyle={{ textAlign: "start", marginLeft: "5%" }}
              >
                <p>
                  <b>Description: </b>
                  {item.Description}
                </p>
                <p>
                  <b>Reporter Name: </b>
                  {item.User_name}
                </p>
                <p>
                  <b>Phone: </b>
                  {item.Phone}
                </p>
                <p>
                  <b>Created Timestamp: </b>
                  {moment(item.Create_time).format("YYYY-MM-DD,  HH:mm ")}
                </p>
                <p>
                  <b>Update Timestamp: </b>
                  {moment(item.Update_time).format("YYYY-MM-DD,  HH:mm ")}
                </p>
              </Card>
            ))}
          </Row>
        </Col>

        <Col span={6} id="colTicket borderTicket">
          <Row id="rowTicket">
            <br />
            {TricketResolved.map((item, index) => (
              <Card
                title={item.Title}
                id="cardTicket T-br-Res"
                bordered={false}
                size={"small"}
                onClick={() =>handleRowClick(item.TicketID)}
                headStyle={{background:'#f6ffed'}}
                bodyStyle={{ textAlign: "start", marginLeft: "5%" }}
              >
                <p>
                  <b>Description: </b>
                  {item.Description}
                </p>
                <p>
                  <b>Reporter Name: </b>
                  {item.User_name}
                </p>
                <p>
                  <b>Phone: </b>
                  {item.Phone}
                </p>
                <p>
                  <b>Created Timestamp: </b>
                  {moment(item.Create_time).format("YYYY-MM-DD,  HH:mm ")}
                </p>
                <p>
                  <b>Update Timestamp: </b>
                  {moment(item.Update_time).format("YYYY-MM-DD,  HH:mm ")}
                </p>
              </Card>
            ))}
          </Row>
        </Col>

        <Col span={6} id="colTicket borderTicket">
          <Row id="rowTicket">
            <br />
            {TricketRejected.map((item, index) => (
              <Card
                title={item.Title}
                id="cardTicket T-br-Rej"
                bordered={false}
                size={"small"}
                onClick={() =>handleRowClick(item.TicketID)}
                bodyStyle={{ textAlign: "start", marginLeft: "5%" }}
                headStyle={{background:'#fff1f09e'}}
              >
                <p>
                  <b>Description: </b>
                  {item.Description}
                </p>
                <p>
                  <b>Reporter Name: </b>
                  {item.User_name}
                </p>
                <p>
                  <b>Phone: </b>
                  {item.Phone}
                </p>
                <p>
                  <b>Created Timestamp: </b>
                  {moment(item.Create_time).format("YYYY-MM-DD,  HH:mm ")}
                </p>
                <p>
                  <b>Update Timestamp: </b>
                  {moment(item.Update_time).format("YYYY-MM-DD,  HH:mm ")}
                </p>
              </Card>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Status_Content;
