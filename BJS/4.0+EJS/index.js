
import express from "express";

const app = express();




app.get("/",(req,res)=>{
    const date = new Date();
    const day = date.getDay();
    
    let type = "a weekday";
  let adv = "it's time to work hard";

  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "it's time to have some fun";
  }

  res.render("index.ejs",{day:type, phrase:adv});

})


app.listen(3000,()=>{
    console.log("Server is running");
})