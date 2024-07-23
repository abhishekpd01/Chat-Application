const config = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const privateKey = process.env.Private_key;

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const response = await axios.put(
        `https://api.chatengine.io/users/`,
        {username: username, secret: username, first_name: username},
        {headers: {'private-key': `2d56c779-51e0-4244-b8e0-1c0c8e977106`}}
    )

    return res.status(response.status).json(response.data);
} catch (e) {
    return res.status(e.response.status).json(e.response.data);
    
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3000, ()=> {
    console.log("App is up and running on port 3000.");
});