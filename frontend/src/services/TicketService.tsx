import React from "react";


const apiUrl = "http://localhost:8080";


const customerID = parseInt(localStorage.getItem("uid") + "");


const ListTicket = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json",
      },
    };
  
    let res = await fetch(`${apiUrl}/ListTickets`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          return res.data;
        } else {
          return false;
        }
      });
  
    return res;
  }



  const getUser = async () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`${apiUrl}/GetCustomer/${customerID}`, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {

        } else {
          return false
        }
      });
  };