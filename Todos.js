const express=require("express");
const app=express();
app.use(express.json());
let todo=[{
  id:1,
  title:"bath",
  description:"Dsdada"
},{
  id:2,
  title:"cook",
  description:"fsdfsdf"
}]
app.get("/todos",function(req,res){
  res.send(todo);
})
app.get("/todos/:id",function(req,res){

 const an=todo.find(ids=>ids.id===parseInt(req.params.id));
  if(!an){
    res.status(404).send();
  }
  else{
    res.json(an);
  }

})

app.put("/todos/:id",function(req,res){
  const ans=todo.find(t => t.id===parseInt(req.params.id));
  if(ans==-1){
    res.status(200).send();
  }
  else{
    todo[ans].title=req.body.title;
    todo[ans].description=req.body.description;
    res.json(todo[ans]);
  }


})


app.listen(3000);
