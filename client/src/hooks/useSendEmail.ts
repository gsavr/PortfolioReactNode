import axios from "axios";
import { useState, useEffect } from "react";

export const useSendEmail = (
  name: string,
  email: string,
  phone: string,
  message: string
) => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    sendEmail(name, email, phone, message);
  }, [name, email, phone, message]);

  const sendEmail = async (
    name: string,
    email: string,
    phone: string,
    message: string
  ) => {
    console.log(name, email, phone, message);
    const response = await axios.post("/api/contact", {
      name,
      email,
      phone,
      message,
    });
    //console.log(response.data.items)
    setResponse(response.data.items);
  };

  return response;
};
