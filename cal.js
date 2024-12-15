const express=require("express");
const app=express();

function add(n){
    let ans=0;
    for(let i=0;i<n;i++){
        ans=ans+i;
    }
    return ans;
}

app.get("/",function(req,res){
    const a=req.query.a;
    const an=add(a);
    res.send(an.toString());


})
app.listen(3000);