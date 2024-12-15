const express=require("express");
const app=express();
var users=[{
    name:"John",
    kidneys:[{
        healthy:false
    },{
        healthy:true
    }]
}]

app.get("/",function(req,res){

    const jkid=users[0].kidneys;
    const nofkidney=jkid.length;
   // res.send("No of kidney"+nofkidney);
    let noheal=0;
    for(let i=0;i<nofkidney;i++){
        if(users[0].kidneys[i].healthy){
            noheal=noheal+1;
        }
    }
    let unheal=nofkidney-noheal;
    //res.send("helathy"+noheal);
    res.json({
        "no of kid":nofkidney,
        "healthy":noheal,
        "unhelathy":unheal
    })
})
app.use(express.json())
app.post("/",function(req,res){
    const ishealthy=req.body.ishealthy;
    users[0].kidneys.push({
        healthy:ishealthy
    })
    res.json({
        msg:"done"
    })
})

app.listen(3000);