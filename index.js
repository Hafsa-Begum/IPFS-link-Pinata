  const express = require("express");
  const cors = require("cors");
  const path = require('path');
const { uploadToPinata } = require("./helpers/uploadToPinata");
  
  const app = express();
  
  app.use(express.json());
  app.use(cors());
  
  
  app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*'); // You can also restrict this to specific origins
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      next();
    });
  

    // Provide the path to your image file
const imagePath = path.resolve(__dirname, '20 ipê do cerrado .jpg'); // Replace with your image path
uploadToPinata(imagePath);

  const PORT = 5020;
  app.listen(PORT, async() => {
      console.log(`Listening at ${PORT}`);
      // await insertTreesInBulk()
      // await checkAndScheduleInfoScrape()
      // console.log(`Running in ${mode} mode`);
  });