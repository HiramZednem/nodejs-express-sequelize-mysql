const express = require('express');
const cors = require ('cors');

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// settings for my server
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req,res) => {
  res.json({message: 'Hola Pa'})
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});