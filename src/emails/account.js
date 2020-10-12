const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// sgMail
//   .send({
//     to: "vp726582@gmail.com",
//     from: "vidhipatel6899@gmail.com",
//     subject: "this is a trial for sending mail using nodejs",
//     text: "I hope you got the mail",
//   })
//   .then(() => {
//     console.log("Email sent");
//   })
//   .catch((error) => {
//     console.error(error);
//   });

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "vidhipatel6899@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the task app, ${name}. Let me know how you get along with the app`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "vidhipatel6899@gmail.com",
      subject: "Sorry to see you go!",
      text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
    })
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
