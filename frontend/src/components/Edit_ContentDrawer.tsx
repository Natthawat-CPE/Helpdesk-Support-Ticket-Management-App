import React, { useState, useEffect } from "react";
import { Form, Input, Drawer, theme, Button,Tag } from "antd";
import Status_Content from "./Status_Content";
import Create_Content from "./Create_Content";
import { Ticket } from "../interfaces/Ticketinterface";
import {GetTicket} from "../services/TicketService";
import { error } from "console";
import Tickets from "./Tickets";
import Title from "antd/es/skeleton/Title";
import { redirect } from "react-router-dom";
import Button2 from '@mui/material/Button';

interface Props {
  setDrawer: boolean;
  handleclick: (setDrawer: string) => void;
  TicketID:number;
}

const Edit_ContentDrawer: React.FC<Props> = ({ setDrawer, handleclick, TicketID }) => {

  const [dataTicket, setDataTicket] = React.useState<Ticket>();
  const [form] = Form.useForm();

  const handleDrawerClose = () => {
    form.resetFields();
    handleclick("");
  };

  useEffect(() => {
    const fetchData = async () => {
      try{
        const TicketData = await GetTicket(TicketID);
        await setDataTicket(TicketData);
        form.resetFields();
      } catch(error) {
        console.log('Error fetching Ticket data:',error);
      }
      // console.log(dataTicket[0].Title);
      
      console.log("UseEffect::"+dataTicket?.TicketID);
    };
    fetchData();
  }, [TicketID]);

// Fix bug pull data to slowly
  // useEffect(() => {
  //   if (TicketID) {
  //     const timeout = setTimeout(() => {
  //       console.log("I am here");
  //       form.resetFields();
  //     }, 100);

  //     return () => {
  //       clearTimeout(timeout); // เคลียร์ timeout หาก Component unmount ก่อนหน่วงเวลาเสร็จ
  //     };
  //   }
  // }, [TicketID]);


  const layout = {
    wrapperCol: { span: 16 },
    labelCol: { span: 8 },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  //TODO ที่ส่งข้อมูลเวลา Submit
  const onFinish = (values: any) => {
    console.log(values);
  };


  return (
    <Drawer
      title="Titl.........."
      placement="right"
      closable={true}
      onClose={handleDrawerClose}
      open={setDrawer}
      getContainer={false}
      size="large"
      style={{
        height: "100%",
        display: "flex",
        flex: "auto",
        overflowY: "scroll",
        justifyContent: "flex-start",
      }}
    >
      <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      form={form}
    >
      <br />
      <h1 id="topic">Update Status</h1>
      <br />
      <Form.Item
        name={["user", "title"]}
        label="Title"
        rules={[{ required: true }]}
      >
        <Input
          style={{ width: "60%" }}
          size="large"
          disabled
          defaultValue={dataTicket?.Title}
        />
      </Form.Item>
      <Form.Item
        name={["user", "description"]}
        label="Description"
        rules={[{ required: true }]}
      >
        <Input.TextArea
          style={{ width: "60%" }}
          size="large"
          disabled
          defaultValue={dataTicket?.Description}
        />
      </Form.Item>
      <Form.Item
        name={["user", "name"]}
        label="Reporter Name"
        rules={[{ required: true }]}
      >
        <Input
          style={{ width: "60%" }}
          size="large"
          disabled
          defaultValue={dataTicket?.User_name}
        />
      </Form.Item>
      <Form.Item
        name={["user", "phone"]}
        label="Phone"
        rules={[{ required: true }]}
      >
        <Input
          style={{ width: "60%" }}
          size="large"
          disabled
          defaultValue={dataTicket?.Phone}
        />
      </Form.Item>
      <br />

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }} >
        <div style={{display:'flex'}}>
        <Button2 variant="outlined" color="warning" style={{margin:'10px'}} key={1} >Pending</Button2>
        <Button2 variant="outlined" color="info" style={{margin:'10px'}} key={2}>Accepted</Button2>
        <Button2 variant="outlined" color="success" style={{margin:'10px'}} key={3}>Resolved</Button2>
        <Button2 variant="outlined" color="error" style={{margin:'10px'}} key={4}>Rejected</Button2>
        </div>
      </Form.Item>
    </Form>
    </Drawer>
  );
};
export default React.memo(Edit_ContentDrawer);
