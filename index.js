const express=require('express');
const redis=require('redis');

const client=redis.createClient({
    host: "redis-server",
    port: 6379
})
const app=express();
app.listen(8080);

client.set("name","sungjin");

app.get('/',(req,res)=>{
    client.get("name",(err,name)=>{
        client.set("name",name+" hello!")
        res.send("안녕하세여! "+name)
    })
})

console.log("Server is Running");