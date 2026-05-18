const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json());
const ACCESS_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtaWR1bmF2YXJzaGluaXMuMjNjc2VAa29uZ3UuZWR1IiwiZXhwIjoxNzc5MDgxODIzLCJpYXQiOjE3NzkwODA5MjMsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJlNmU1MDc2Yy1iNjI3LTQ1ZjMtYWMwMi0zMjNjYmY5NGY4MzEiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJtaWR1bmF2YXJzaGluaSIsInN1YiI6ImRmZjM3YTRhLWYxZDYtNGVmYi04ZmU2LWNjMjMyM2ZmOGUwZCJ9LCJlbWFpbCI6Im1pZHVuYXZhcnNoaW5pcy4yM2NzZUBrb25ndS5lZHUiLCJuYW1lIjoibWlkdW5hdmFyc2hpbmkiLCJyb2xsTm8iOiIyM2NzcjEzMiIsImFjY2Vzc0NvZGUiOiJSeVpCY3kiLCJjbGllbnRJRCI6ImRmZjM3YTRhLWYxZDYtNGVmYi04ZmU2LWNjMjMyM2ZmOGUwZCIsImNsaWVudFNlY3JldCI6IkpYZFNBeE56elZNYlNwenAifQ.O-NtNf-Gw7jnEfcEABr8uuTKugh9qVE3LH9Ogjr9Yeg";
app.get("/notifications",async(req,res)=>{
    try{
        const response = await fetch("http://4.224.186.213/evaluation-service/notifications",
            {
                headers:{
                    Authorization:`Bearer ${ACCESS_TOKEN}`
                }
            }
        );
        const data=await response.json();
        res.json(data);
    }
    catch(error){
        res.status(500).json({
            message:"Error fetching data"
        });
    }
});
app.listen(5000,()=>{
    console.log("Server running at port 5000");
});