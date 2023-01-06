import nodemailer, { TransportOptions } from 'nodemailer';

import { MailInterface } from 'types/mail';

export default class MailService {
  private static instance: MailService;

  private transporter!: nodemailer.Transporter;

  private constructor() {
    this.createConnection();
  }

  // INSTANCE CREATE FOR MAIL
  static getInstance() {
    if (!MailService.instance) {
      MailService.instance = new MailService();
    }

    return MailService.instance;
  }

  // CREATE CONNECTION FOR LIVE
  createConnection() {
    this.transporter = nodemailer.createTransport({
      // host: process.env.SMTP_HOST,
      // port: process.env.SMTP_PORT,
      service: 'gmail',
      // secure: true,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    } as TransportOptions);
  }

  // SEND MAIL
  sendMail(_requestId: string | number | string[], options: MailInterface) {
    return this.transporter
      .sendMail({
        from: `"BATTECH" ${process.env.SMTP_SENDER || options.from}`,
        to: options.to,
        cc: options.cc,
        bcc: options.bcc,
        subject: options.subject,
        text: options.text,
        html: options.html,
      })
      .then(info => {
        return info;
      });
  }

  // VERIFY CONNECTION
  verifyConnection() {
    return this.transporter.verify();
  }

  // CREATE TRANSPOSER
  getTransporter() {
    return this.transporter;
  }
}
