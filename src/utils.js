import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

import { adjactives, nouns } from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjactives.length);
  return `${adjactives[randomNumber]} ${nouns[randomNumber]}`;
};

export const sendMail = email => {
  const option = {
    auth: {
      api_user: process.env.SENDGRID_USERNAME,
      api_key: process.env.SENDGRID_PASSWORD
    }
  };
  const client = nodemailer.createTransport(sgTransport(option));
  return client.sendMail(email);
};

export const sendSecretMail = (address, secret) => {
  const email = {
    from: "akakak231@gmail.com",
    to: address,
    subject: "Login Secret for Junstagram",
    html: `Hello! Your login secret it ${secret}.</br>Copy paste on th app/web to log in`
  };
  return sendMail(email);
};
