import React, { useState, useEffect } from "react";
import { Table, Switch, Tag  } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { Ticket, Status } from "../interfaces/Ticketinterface";
import {ListTicket} from "../services/TicketService"

interface DataType {
  TicketID: number;
  Title: string;
  Description: string;
  User_name: string;
  Phone: string;
  Create_time: Date | null;
  Update_time: Date | null;
  StatusID: number;
  tags: string;
}





const columns: ColumnsType<DataType> = [
  {
    title: "Title",
    dataIndex: "Title",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Jim",
        value: "Jim",
      },
      {
        text: "Submenu",
        value: "Submenu",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],
    onFilter: (value: any, record) => record.Title.indexOf(value) === 0,
    sortDirections: ["descend"],
  },
  {
    title: "Description",
    dataIndex: "Description",
    defaultSortOrder: "descend",
  },
  {
    title: "Reporter Name",
    dataIndex: "User_name",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    onFilter: (value: any, record) => record.User_name.indexOf(value) === 0,
  },
  {
    title: "Phone",
    dataIndex: "Phone",
  },
  {
    title: "Created timestamp",
    dataIndex: "Create_time",
    defaultSortOrder: "descend",
    sorter: (a, b) => {
      const dateA = a.Create_time ? new Date(a.Create_time).getTime() : 2;
      const dateB = b.Create_time ? new Date(b.Create_time).getTime() : 2;
      return dateA - dateB;
    },
   
  },
  {
    title: "Update timestamp",
    dataIndex: "Update_time",
    // defaultSortOrder: "descend",
    // sorter: (a, b) => {
    //   const dateA = a.Update_time ? new Date(a.Update_time).getTime() : 2;
    //   const dateB = b.Update_time ? new Date(b.Update_time).getTime() : 2;
    //   return dateA - dateB;
    // },
   
  },
  {
    title: "Status",
    dataIndex: "StatusID",
    // filters: [
    //   {
    //     text: "Joe",
    //     value: "1",
    //   },
    //   {
    //     text: "Jim",
    //     value: "Jim",
    //   },
    //   {
    //     text: "Submenu",
    //     value: "Submenu",
    //     children: [
    //       {
    //         text: "Green",
    //         value: "Green",
    //       },
    //       {
    //         text: "Black",
    //         value: "Black",
    //       },
    //     ],
    //   },
    // ],
    // onFilter: (value: any, record) => record.StatusID === value,
    // sortDirections: ["descend"],
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, record) => {
      let tag = record.StatusID;
      let color = 'volcano';
      let status = 'default';
      if (tag === 1) {
        color = 'Gray';
        status = 'pending';
      } else if (tag === 2) {
        color = 'Orange';
        status = 'accepted';
      } else if (tag === 3) {
        color = 'Green'; // Use 'green' instead of 'Light Green'
        status = 'resolved';
      } else {
        color = 'Tomato';
        status = 'rejected';
      }
      return (
        <Tag color={color} key={tag}>
          {status.toUpperCase()}
        </Tag>
      );
    },
  },
  

];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};


const Table_Content: React.FC = () =>{
  
  const [TicketAll, setTricketAll] = React.useState<Ticket[]>([]);

  const dataSource = TicketAll.map((ticket) => ({
    TicketID: ticket.TicketID,
    Title: ticket.Title,
    Description: ticket.Description,
    User_name: ticket.User_name,
    Phone: ticket.Phone,
    Create_time: ticket.Create_time,
    Update_time: ticket.Update_time,
    StatusID: ticket.StatusID,
    tags: ticket.Status.StatusName,
  }));

  
  const getTicketAll = async () =>{
    let temp = await ListTicket();
    setTricketAll(temp);
  }
  useEffect(() => {
    const fetchData = async () => {
      await getTicketAll();
      // await copyTicket();
      // await SortingArray();
      
    };
    fetchData();
  }, []);

  return(

  <Table
    columns={columns}
    dataSource={dataSource}
    onChange={onChange}
    pagination={false}
    sticky
  />
);
            };

export default Table_Content;
