import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import CreateIcon from "@mui/icons-material/Create";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TableRowsIcon from "@mui/icons-material/TableRows";
import TableChartIcon from "@mui/icons-material/TableChart";
import { Layout, Menu, Button, theme } from "antd";

import "./Tickets.css";

import Status_Content from "./Status_Content";
import Create_Content from "./Create_Content";
import Table_Content from "./Table_Content";
import Edit_ContentDrawer from "./Edit_ContentDrawer";

const { Header, Sider, Content } = Layout;

const Tickets: React.FC = () => {
  // Set สถานะการเปิด Page ต่างๆ
  const [dataDrawerFromStatus_Content, setDataDrawerFromStatus_Content] =
    useState("");
  const [TicketID, setTicKetID] = useState(0);
  const [statusPage, setStatusPage] = useState("1");
  const StatusDrawer = dataDrawerFromStatus_Content !== "";

  const handleMenuClick = (key: any) => {
    if (key === "1") {
      setStatusPage("1");
    } else if (key === "2") {
      setStatusPage("2");
    } else if (key === "3") {
      setStatusPage("3");
    }
  };

  //Set ปิดเปิด ข้างๆ
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <TableChartIcon />,
              label: "Status Board",
            },
            {
              key: "2",
              icon: <TableRowsIcon />,
              label: "Status Table",
            },
            {
              key: "3",
              icon: <CreateIcon />,
              label: "Create Ticket",
            },
          ]}
          onSelect={(item) => handleMenuClick(item.key)}
        />
      </Sider>
      <Layout>
        <Content id="content">
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              fontWeight: 700,
              fontSize: "20px",
              borderBottom: "1px solid #ccc",
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            Helpdesk Support Ticket Management
          </Header>
          <div>
            {statusPage === "1" ? (
              // <Table_Content />
              <div>
                <Status_Content
                  setOpenDrawer={setDataDrawerFromStatus_Content}
                />
                <Edit_ContentDrawer
                  setDrawer={StatusDrawer}
                  handleclick={setDataDrawerFromStatus_Content}
                  TicketID={TicketID}
                />
              </div>
            ) : statusPage === "2" ? (
              <div>
                <Table_Content
                  setOpenDrawer={setDataDrawerFromStatus_Content}
                  setTicKetID={setTicKetID}
                />
                <Edit_ContentDrawer
                  setDrawer={StatusDrawer}
                  handleclick={setDataDrawerFromStatus_Content}
                  TicketID={TicketID}
                />
              </div>
            ) : (
              <Create_Content />
            )}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Tickets;
