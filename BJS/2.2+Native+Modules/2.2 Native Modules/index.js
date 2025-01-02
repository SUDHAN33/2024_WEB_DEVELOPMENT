const fs = require("fs");

// fs.writeFile("message1.txt","Hello Buddies",(err)=>{
//     if (err) throw err;
//     console.log("The file is saved!");
// });

fs.readFile("message1.txt","utf8",(err,data)=>{
    if(err) throw err;
    console.log(data);
})