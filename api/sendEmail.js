const sendgrid = require("@sendgrid/mail");

module.exports = (req, res) => {
  const { name, email, message } = JSON.parse(req.body);
  const apiKey = process.env.SENDGRID_KEY;
  sendgrid.setApiKey(apiKey);

  const msg = {
    to: {
      name: "Yoni Hodeffi",
      email: "yonihod199@gmail.com",
    },
    from: {
      name: `${name} via Source on the web`,
      email: "no-reply@yonihodefi.dev",
    },
    replyTo: { name, email },
    subject: "You've got mail from Source on the web!",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
  };

  sendgrid.send(msg).then(
    () => res.send("Your email has been sent successfully!"),
    error => {
      console.error(error);
      res.status(500).send(error.response);
    },
  );
};
