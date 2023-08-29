import React, { useState, useEffect } from "react";
import { Col, Row, Card, Layout, Menu, Button, theme } from "antd";
import {ListTicket} from "../services/TicketService"
import { Ticket } from "../interfaces/Ticketinterface";

interface Props {
  setOpenDrawer: React.Dispatch<React.SetStateAction<string>>;
}
const Status_Content: React.FC<Props> = ({ setOpenDrawer }) => {
  const [TricketPending, setTricketPending] = React.useState<Ticket[]>([]);

  const [TicketAll, setTricketAll] = React.useState<Ticket[]>([]);
  // console.log(TicketAll);

  //TODO For Sorting ID
  // Result
  const [AfterTicketCopyforSort, setAfterTicketCopyforSort] = React.useState<
    Ticket[]
  >([]);
  // Old
  const [BeforeTicketCopyforSort, setBeforeTicketCopyforSort] = React.useState<
    Ticket[]
  >([]);

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
  const getTicketAll = async () =>{
    let temp = await ListTicket();
    setTricketAll(temp);
  }
  // console.log(AfterTicketCopyforSort);

  useEffect(() => {
    const fetchData = async () => {
      await getTicketAll();
      // await copyTicket();
      // await SortingArray();
      
    };
    fetchData();
  }, []);

  const handleFunctionCall = (setDrawer: string) => {
    setOpenDrawer(setDrawer);
  };

  //TODO dataMock เอาไว้เก็บในส่วนของ body  ตอนนี้ ซึ่งไม่ได้นำไปใช้แบบนี้
  const dataMock = [
    { Title: "11111111 Broken", Content1: "Content 1", Content2: "Content 2" ,Status_TD:1 },
    { Title: "11111111 Broken", Content1: "Content 1", Content2: "Content 2" ,Status_TD:2 },
    { Title: "11111111 Broken", Content1: "Content 1", Content2: "Content 2" ,Status_TD:3 },
    { Title: "11111111 Broken", Content1: "Content 1", Content2: "Content 2" ,Status_TD:4 },
    { Title: "11111111 Broken", Content1: "Content 1", Content2: "Content 2" ,Status_TD:1 },
    { Title: "11111111 Broken", Content1: "Content 1", Content2: "Content 2" ,Status_TD:2 },
    { Title: "11111111 Broken", Content1: "Content 1", Content2: "Content 2" ,Status_TD:3 },
    { Title: "11111111 Broken", Content1: "Content 1", Content2: "Content 2" ,Status_TD:4 },
    { Title: "11111111 Broken", Content1: "Content 1", Content2: "Content 2" ,Status_TD:1 },
    { Title: "11111111 Broken", Content1: "Content 1", Content2: "Content 2" ,Status_TD:2 },

  ];
  const dataMock2 = [
    { Title: "222222222 Broken", Content1: "Content 1", Content2: "Content 2" ,Status_TD:1 },
    { Title: "222222222 Broken", Content1: "Content 1", Content2: "Content 2" ,Status_TD:2 },
    { Title: "222222222 Broken", Content1: "Content 1", Content2: "Content 2" ,Status_TD:3 },
    { Title: "222222222 Broken", Content1: "Content 1", Content2: "Content 2" ,Status_TD:4 },
    { Title: "222222222 Broken", Content1: "Content 1", Content2: "Content 2" ,Status_TD:1 },
    { Title: "222222222 Broken", Content1: "Content 1", Content2: "Content 2" ,Status_TD:2 },
    { Title: "222222222 Broken", Content1: "Content 1", Content2: "Content 2" ,Status_TD:3 },
    { Title: "222222222 Broken", Content1: "Content 1", Content2: "Content 2" ,Status_TD:4 },
    { Title: "222222222 Broken", Content1: "Content 1", Content2: "Content 2" ,Status_TD:1 },
    { Title: "222222222 Broken", Content1: "Content 1", Content2: "Content 2" ,Status_TD:2 },

  ];

  //TODO numOfcol เอาไว้เก็บในส่วนของหัว Title ตอนนี้ ซึ่งไม่ได้นำไปใช้แบบนี้
  const numOfcol = [
    { Title: "Pending", Status_ID: 1 },
    { Title: "Accepted", Status_ID: 2 },
    { Title: "Resolved", Status_ID: 3 },
    { Title: "Rejected", Status_ID: 4 },
  ];

  return (
    <div>
      <div></div>
      <Row>
        {numOfcol.map((item, index) => (
          <Col span={6} id="col-topic">
            <div style={{ width: "94%" }}>
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

      {TicketAll.map((item, index) => (
        <Row>
          {numOfcol.map((item2, point) => (
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
};

export default Status_Content;
