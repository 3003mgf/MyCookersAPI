const app = require("./app"),
      port = app.get("port");



app.listen(port, async()=>{
  try{
    console.log("Success Cookers Food API");
  }catch(error){
    console.log("Error Cookers Food API")
  }
})