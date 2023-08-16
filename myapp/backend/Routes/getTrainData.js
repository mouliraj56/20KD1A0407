const axios = require("axios");

const router = require('express').Router();



router.route('/').get((req,res)=>{
    const headers = {authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTIyMDA5MDIsImNvbXBhbnlOYW1lIjoiTXkgdHJhaW4gUHJvamVjdCIsImNsaWVudElEIjoiYjA1OTM5NGQtZmYwNC00NTAxLWFhOTQtNjFiNjE3MDViYTU3Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwa2QxYTA0MDcifQ.qJ4QNAmCVAUk4La1qyerwR1GlsIe9ZlyrNQczVyx1zY"}
    const url = "http://20.244.56.144/train/trains"
    const data = axios.get(url,{headers})
    .then((result)=>res.json(result.data))
    .catch((err)=> console.log("error"));
   ;
});


module.exports = router