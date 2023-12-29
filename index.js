import express from "express";
import fs from "fs";
// const express = require("express");


const app = express();

app.get('/', function (req, res) {
  res.send('Hello World 🙆‍♀️🙆‍♀️')
})


//route path to perform write file function
app.get("/getCurrentTimeInTextFile",(request, response)=>{

  // getting current timestamp
const timeStamp = Date.now();

//getting data,month,year,H(hour),M(minutes),S(seconds) from timestamp
const dateTime = new Date(timeStamp);
const date = dateTime.getDate();
const month = `${dateTime.getMonth()+1}`;
const year = dateTime.getFullYear();
const H = dateTime.getHours();
const M = dateTime.getMinutes();
const S = dateTime.getSeconds();

//Adding individual values together to get required expression as (DD/MM/YYYY - H:M:S)
const DateAndTime = `${date}-${month}-${year}_${H}:${M}:${S}`;
//path to write the file
const path = `./backup/${Date.now()}.txt`;

  //writing file function
  fs.writeFile(path,(""+DateAndTime),(err)=>{

      //to show if there is error
      if(err){
          console.log(err);
      }
      //to show if the writing is completed successfully
      console.log("completed");
  })
      //sending response in return to show in document
  response.send(`<h1 style="padding:40vh;text-align:center">File name 
                      "<span style="color:lightpink">${timeStamp}.txt</span>" with content 
                      "<span style="color:skyblue">${""+DateAndTime}</span>" is written in directory 
                      "<span style="color:lightgreen">${path}</span>"</h1>`);
});

app.listen(4000);