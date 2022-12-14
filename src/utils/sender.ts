import nodemailer from "nodemailer";

export const SendMail = async (to: String, subject: String, text: String) => {
  const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mail@gmail.com",
      pass: "maililqjxzfakzxpdhfo",
    },
  });

  var htmlVx = `<!DOCTYPE html>
<html>
<body>
  <div class="container">
    <h2>${subject}</h2>
    <p>Lorem ipsum text about why you should subscribe to our newsletter blabla. Lorem ipsum text about why you should subscribe to our newsletter blabla.</p>
    <p>${text}.</p>
    </div>
</body>
</html>`;

  const details = {
    from: "mail@gmail.com",
    to: `${to}`,
    subject: `${subject}`,
    html: htmlVx,
  };

  mailTransporter.sendMail(details, (err) => {
    if (err) {
      console.log(err);
    }
  });
};
