// service.ts
import emailjs from "emailjs-com";
import type { IContactFormValues } from "../Models/contactModel";

export const sendContactEmail = (data: IContactFormValues) => {
  return emailjs.send(
    "service_c5xq69n",
    "template_bgg4ex3",
    {
      name: data.name,
      email: data.email,
      phone: data.phone,
      reason: data.reason,
      message: data.message,
    },
    "-q2FnL7l5gDXTht70"
  );
};
