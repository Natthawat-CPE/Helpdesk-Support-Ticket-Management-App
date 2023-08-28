import React, { useState, useEffect } from "react";
import { Form, Input, Drawer, theme, Button } from "antd";
import Status_Content from "./Status_Content";
import Create_Content from "./Create_Content";

interface Props {
  setDrawer: boolean;
  handleclick: (setDrawer: string) => void;
}

// const Edit_ContentDrawer: React.FC<Props> = ({openDrawer, handleClick}) => {
const Edit_ContentDrawer: React.FC<Props> = ({ setDrawer, handleclick }) => {
  const handleDrawerClose = () => {
    handleclick("");
  };
  useEffect(() => {}, []);

  const layout = {
    wrapperCol: { span: 16 },
    labelCol: { span: 8 },
  };

  /* eslint-disable no-template-curly-in-string */
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
          placeholder="Tell me what you need help with."
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
          placeholder="Please provide further explanation to us regarding the topic you'ev input."
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
          placeholder="Enter your name"
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
          placeholder="Enter your Phone number"
        />
      </Form.Item>
      <br />
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" size="large" style={{alignItems:'center', marginLeft:'75px'}}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Drawer>
  );
};
export default Edit_ContentDrawer;
