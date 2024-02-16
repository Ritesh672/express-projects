// lets create a website that will msg the user to work hard or have fun accordin to the day of teh week
// use the ejs to render the document of the html for dynamic page of the website 
// setep 1: Install the node

// import the express

import express from "express";
const app = express();
const port = 8080;

// create a path for the static file so that you can return it with res.sendFile 
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = fileURLToPath(dirname(import.meta.url));

// using the body parser
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({extended: true}));


// ejs setup
app.set("view engine", "ejs");

// cerate the get request


app.get("/", (req , res )=>
{
    res.sendFile( __dirname + "/index.html");
});

// create a post request

app.post("/greet", (req, res)=>
{
  res.render("index.ejs", 
  {
    name : req.body["name"]
  });
});


app.listen(port , ()=>
{
    console.log("server runnig on port 8080");
});