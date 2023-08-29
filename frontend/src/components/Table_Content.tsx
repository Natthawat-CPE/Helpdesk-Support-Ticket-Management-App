import React, { useEffect } from "react";
import { Table, Tag } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { Ticket } from "../interfaces/Ticketinterface";
import { ListTicket } from "../services/TicketService";
import moment from "moment";



interface DataType {
  TicketID: number;
  Title: string;
  Description: string;
  User_name: string;
  Phone: string;
  Create_time: string | Date;
  Update_time: string | Date;
  StatusID: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Title",
    dataIndex: "Title",
    width: "170px",
  },
  {
    title: "Description",
    dataIndex: "Description",
    defaultSortOrder: "descend",
    width: "270px ",
  },
  {
    title: "Reporter Name",
    dataIndex: "User_name",
    width: "200px",
  },
  {
    title: "Phone",
    dataIndex: "Phone",
    width: "150px",
  },
  {
    title: "Created timestamp",
    dataIndex: "Create_time",
    width: "180px",

    sorter: (a, b) => {
      const dateA = a.Create_time ? new Date(a.Create_time).getTime() : 2;
      const dateB = b.Create_time ? new Date(b.Create_time).getTime() : 2;
      return dateA - dateB;
    },
  },
  {
    title: "Update timestamp",
    dataIndex: "Update_time",
    width: "180px",
    sorter: (a, b) => {
      const dateA = a.Update_time ? new Date(a.Update_time).getTime() : 2;
      const dateB = b.Update_time ? new Date(b.Update_time).getTime() : 2;
      return dateA - dateB;
    },
  },
  // {
  //   title: "Status",
  //   dataIndex: "StatusID",
  //   // filters: [
  //   //   {
  //   //     text: "Joe",
  //   //     value: "1",
  //   //   },
  //   //   {
  //   //     text: "Jim",
  //   //     value: "Jim",
  //   //   },
  //   //   {
  //   //     text: "Submenu",
  //   //     value: "Submenu",
  //   //     children: [
  //   //       {
  //   //         text: "Green",
  //   //         value: "Green",
  //   //       },
  //   //       {
  //   //         text: "Black",
  //   //         value: "Black",
  //   //       },
  //   //     ],
  //   //   },
  //   // ],
  //   // onFilter: (value: any, record) => record.StatusID === value,
  //   // sortDirections: ["descend"],
  // },
  {
    title: "Status",
    key: "StatusID",
    dataIndex: "StatusID",
    align: "center",
    filters: [
      {
        text: "pending",
        value: 1,
      },
      {
        text: "accepted",
        value: 2,
      },
      {
        text: "resolved",
        value: 3,
      },
      {
        text: "rejected",
        value: 4,
      },
    ],
    onFilter: (value: any, record) => record.StatusID === value,
    sorter: (a, b) => {
      return a.StatusID - b.StatusID;
    },

    render: (_, record) => {
      let tag = record.StatusID;
      let color = "volcano";
      let status = "default";
      if (tag === 1) {
        color = "geekblue";
        status = "pending";
      } else if (tag === 2) {
        color = "orange";
        status = "accepted";
      } else if (tag === 3) {
        color = "green";
        status = "resolved";
      } else {
        color = "red";
        status = "rejected";
      }
      return (
        <Tag color={color} key={tag} style={{ padding: "8px" }}>
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

interface Props {
  setOpenDrawer: React.Dispatch<React.SetStateAction<string>>;
  setTicKetID: React.Dispatch<React.SetStateAction<number>>;
}

const Table_Content: React.FC<Props> = ({setOpenDrawer, setTicKetID}) => {

  const handleFunctionCall = (setDrawer: string) => {
    setOpenDrawer(setDrawer);
  };

  
  const [TicketAll, setTricketAll] = React.useState<Ticket[]>([]);


  const handleRowClick = async (record: any) => {
    console.log("Clicked row with TicketID:", record.TicketID);
    handleFunctionCall('true');
    await setTicKetID(record.TicketID);
  };


  const dataSource = TicketAll.map((ticket) => {
    const formattedCreateTime = moment(ticket.Create_time).format(
      "YYYY-MM-DD  HH:mm:ss"
    );
    const formattedUpdateTime = moment(ticket.Update_time).format(
      "YYYY-MM-DD  HH:mm:ss"
    );

    return {
      TicketID: ticket.TicketID,
      Title: ticket.Title,
      Description: ticket.Description,
      User_name: ticket.User_name,
      Phone: ticket.Phone,
      Create_time: formattedCreateTime,
      Update_time: formattedUpdateTime,
      StatusID: ticket.StatusID,
    };
  });

  const getTicketAll = async () => {
    let temp = await ListTicket();
    setTricketAll(temp);
  };
  useEffect(() => {
    const fetchData = async () => {
      await getTicketAll();
    };
    fetchData();
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      onChange={onChange}
      pagination={false}
      rowKey="TicketID"
      onRow={(record) => ({
        onClick: () => handleRowClick(record),
      })}
      sticky
    />
  );
};

export default Table_Content;
