import React from "react";
import {
  CreateTicket,
  UpdateStatusTicket,
  UpdateTicket,
  Ticket,
} from "../interfaces/Ticketinterface";

const apiUrl = "http://localhost:8080";

//GET ListTicket All
const ListTicket = async () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  try {
    const response = await fetch(`${apiUrl}/ListTickets`, requestOptions);
    const data = await response.json();

    if (data.data) {
      return data.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return false;
  }
};

//GET Ticket/:id
const GetTicket = async (TicketID: number) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  try {
    const response = await fetch(`${apiUrl}/GetTicket/${TicketID}`, requestOptions);
    const data = await response.json();
    if (data.data) {
      return await data.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return false;
  }
};

//GET ListTicketPending All
const ListTicketPending = async () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  try {
    const response = await fetch(`${apiUrl}/ListTicketPending`, requestOptions);
    const data = await response.json();

    if (data.data) {
      return data.data;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return false;
  }
};

//GET ListTicketAccepted All
const ListTicketAccepted = async () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  let res = await fetch(`${apiUrl}/ListTicketAccepted`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });
};

//GET ListTicketResolved All
const ListTicketResolved = async () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  let res = await fetch(`${apiUrl}/ListTicketResolved`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });
};

//GET ListTicketRejected All
const ListTicketRejected = async () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  let res = await fetch(`${apiUrl}/ListTicketRejected`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });
};

//PATCH  UpdateTicket/:id
const UpDateTicket = async (data: UpdateTicket, TicketID: number) => {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  let res = await fetch(`${apiUrl}/UpdateTicket/${TicketID}`, requestOptions);
  fetch(apiUrl, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });
};

//PATCH  UpdateStatusTicket/:id
const UpDateStatusTicket = async (
  data: UpdateStatusTicket,
  TicketID: number
) => {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  let res = await fetch(
    `${apiUrl}/UpdateStatusTicket/${TicketID}`,
    requestOptions
  );
  fetch(apiUrl, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });
};

const Create_Ticket = async (data: CreateTicket) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  let res = await fetch(`${apiUrl}/CreateTicket`, requestOptions)
    .then((response) => response.json())
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        return false;
      }
    });

  return res;
};

export {
  ListTicket,
  GetTicket,
  ListTicketPending,
  ListTicketAccepted,
  ListTicketResolved,
  ListTicketRejected,
  UpDateTicket,
  UpDateStatusTicket,
  Create_Ticket,
};
