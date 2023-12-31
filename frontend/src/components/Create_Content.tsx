import { Button, Form, Input } from "antd";
import {Create_Ticket} from "../services/TicketService"
import {CreateTicket} from "../interfaces/Ticketinterface"
import "./Create_Content.css"

function Create_Content() {

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
  const onFinish = (values: CreateTicket) => {
    Create_Ticket(values);
    console.log(values);
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <br />
      <h1 id="topic">Create Ticket</h1>
      <br />
      <Form.Item
        name={"Title"}
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
        name={"Description"}
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
        name={"User_name"}
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
        name={"Phone"}
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
        <Button type="primary" htmlType="submit" size="large" style={{left:'50%'}}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
export default Create_Content;
