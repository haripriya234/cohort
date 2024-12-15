const express=require("express")
const app=express();
let lib=[
    {
        id:1,
        title:"wdf",
        author:"sfdsfs"
    },
    {
        id:2,
        title:"sfdsf",
        author:"sfsafds"
    }
]
app.use(express.json());
app.get("/books",function(req,res){
    res.json(lib);
})

app.get("/books/:id",function(req,res){
    const i=parseInt(req.params.id);
    const an=lib.find(t=>t.id===i);
    if(!an){
        res.status(404).send();
    }
    else{
        res.json(an);
    }
})


app.post("/books",function(req,res){
    const newbook=[{
        id:Math.floor(Math.random()*1000000),
        title:req.body.title,
        author:req.body.author
    }]
    lib.push(newbook);
    res.json(lib);

})

app.put("/books/:id",function(req,res){
    const iw=parseInt(req.params.id);
    const an=lib.findIndex(y=>y.id==iw);
    if(an==-1){
        res.status(404).send();
    }else{
        lib[an].title=req.body.title
        lib[an].author=req.body.author
        res.json(lib);
    }



})
app.listen(3000);