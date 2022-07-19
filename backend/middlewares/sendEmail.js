const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
   host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "83b7f5c3cd4d31",
    pass: "96436f20ad2af7"
  }
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};