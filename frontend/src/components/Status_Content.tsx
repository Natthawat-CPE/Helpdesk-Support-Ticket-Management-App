import React, { useState, useEffect } from "react";
import { Col, Row, Card, Layout, Menu, Button, theme } from "antd";
import {
  ListTicket,
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
}
const Status_Content: React.FC<Props> = ({ setOpenDrawer }) => {
  const [TricketPending, setTricketPending] = React.useState<Ticket[]>([]);
  const [TricketAccepted, setTricketAccepted] = React.useState<Ticket[]>([]);
  const [TricketResolved, setTricketResolved] = React.useState<Ticket[]>([]);
  const [TricketRejected, setTricketRejected] = React.useState<Ticket[]>([]);

  // const [TicketAll, setTricketAll] = React.useState<Ticket[]>([]);
  // console.log(TicketAll);

  //TODO For Sorting ID
  // Result
  // const [AfterTicketCopyforSort, setAfterTicketCopyforSort] = React.useState<
  //   Ticket[]
  // >([]);
  // // Old
  // const [BeforeTicketCopyforSort, setBeforeTicketCopyforSort] = React.useState<
  //   Ticket[]
  // >([]);

  // const copyTicket = () => {
  //   setBeforeTicketCopyforSort(TicketAll);
  // };
  //TODO function ลบ Array รับข้อมูลแบบ Array ทีละ 1 ตัว
  // const deleteItem = (indexToDelete: number) => {
  //   const updatedItems = BeforeTicketCopyforSort.filter(
  //     (item, index) => index !== indexToDelete );
  //   setBeforeTicketCopyforSort(updatedItems);
  // };

  // const SortingArray = async () => {
  //   const newArray = AfterTicketCopyforSort.filter(item => item == null );
  //   setAfterTicketCopyforSort(newArray);
  //   const amountArray = BeforeTicketCopyforSort.length;
  //   console.log("Original:::"+amountArray);
  //   console.log("amount:::"+amountArray);
  //   var num = 1;
  //     for (let index = 0; index < amountArray; index++) {
  //       if (num > 4) {num = 1;}
  //       for (let j = 1; j <= 4; j++) {
  //       if (BeforeTicketCopyforSort[index].StatusID == num) {
  //         num++
  //         await setAfterTicketCopyforSort((number) => [
  //           ...number,
  //           BeforeTicketCopyforSort[index],
  //         ]);
  //         await deleteItem(index);
  //         break
  //       }
  //     }

  // console.log("จำนวน Array ::::ใหม่ "+AfterTicketCopyforSort.length );
  // console.log("จำนวน Array ::::เดิม "+BeforeTicketCopyforSort.length );
  // console.log("Index รอบที่ ::::เดิม "+index );

  // if (AfterTicketCopyforSort.length != BeforeTicketCopyforSort.length && index == amountArray ) {
  //   index = 0;
  //   console.log("++++INDEX > ARRAY++++")
  // } else if (BeforeTicketCopyforSort.length == 0) { break }
  // }

  // BeforeTicketCopyforSort.forEach(element => {
  //   console.log(`TicketID: ${element.TicketID}`);
  // });
  // };
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
    // await setTicKetID(record.TicketID);
  };

  //TODO numOfcol เอาไว้เก็บในส่วนของหัว Title ตอนนี้ ซึ่งไม่ได้นำไปใช้แบบนี้
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
                onClick={() =>handleRowClick(item)}
                // onClick={(item) => ({
                //   onClick: () => handleRowClick(item)
                // })}
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
                onClick={() =>handleRowClick(item)}
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
                onClick={() =>handleRowClick(item)}
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
                onClick={() =>handleRowClick(item)}
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
