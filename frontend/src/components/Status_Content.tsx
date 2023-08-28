import React, { useState } from "react";
import { Col, Row, Card, Layout, Menu, Button, theme } from "antd";
import { Key } from "@mui/icons-material";
import Edit_ContentDrawer from "./Edit_ContentDrawer";
          


interface Props {
    setOpenDrawer: React.Dispatch<React.SetStateAction<string>>;
}
const Status_Content: React.FC<Props> = ({setOpenDrawer}) => {

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
      {dataMock.map((item, index) => (
        <Row>
          {numOfcol.map((num, point) => (
            <Col span={6} id="col">
              <div style={{width: "94%"}} onClick={() =>handleFunctionCall('true')}>

              <Card
                title={num.Title}
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
                <p>{item.Content1}</p>
                <p>{item.Content2}</p>
                <p>{item.Content2}</p>
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
