const express = require("express");
const { createTransport } = require("nodemailer");
const cors = require("cors"); // Import cors middleware
const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS

app.get('/',(req,res)=>{
  res.send('Server Running')
})


app.post("/", async (req, res) => {
  const { userAdress, userSubject, userMessage } = req.body;

  
  const transporter = createTransport({
    service: "gmail",
    auth: {
      user: "tinotayman1@gmail.com",
      pass: "qgeehvtjyeywbluj",
    },
  });

  const mailOptions = {
    from: userAdress,
    to: "tinotayman1@gmail.com",
    subject: `New message from ${userSubject}`,
    text: userMessage,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
module.exports = app;
