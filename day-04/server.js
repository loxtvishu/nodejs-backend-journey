/*
      1. Server ko start krna
      2. Server ko Start krne ki Command       
              (a) node server.js
              (b) npx nodemon server.js  ===> Es Command se Server ko baar baar run krne ki jrurat nhi padti hai . apne aap restart hota hai . 


*/

const app = require("./src/app")

app.listen(3000,function () {
    console.log("Server is running on Port No. 3000");
    
})