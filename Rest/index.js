const express=require(`express`);
//ejs file ke liy require path
const path=require(`path`);
// require unique id ke liy
const {v4:uuidv4}=require(`uuid`);
//require override method for patch method use ke liy htlm me ham delete ka bhi kam kar sake
const methodOverride=require('method-override');
const app=express();

PORT=8000;
app.use(methodOverride('_method'))
//sare ke sare api req ko samjh pay uske liy use kaarte h
app.use(express.urlencoded({extended:true}))
//set view engine
app.set(`view engine`,`ejs`);
app.set(`views`,path.join(__dirname,`views`));
//when link a stylesheet file then add set ki jagah use
app.use(express.static(path.join(__dirname,`public`)));

let posts=[
    {
        id:uuidv4(),
        username:`topper`,
        content:`I love coding`
    },
    {
        id:uuidv4(),
        username:`dheeraj`,
        content:`I love coffee`
    },
    {
        id:uuidv4(),
        username:`Shilpa`,
        content:`I love Maa`
    },
    {
        id:uuidv4(),
        username:`Mantush`,
        content:`I love movie`
    },
]
//diff routes(jyda use is tarah se hota hai)
app.get(`/posts`,(req,res)=>{
    res.render(`index.ejs`,{posts})
})
app.get(`/posts/new`,(req,res)=>{
    res.render(`new.ejs`,{posts})
})


//post req
app.post(`/posts`,(req,res)=>{
    let {username,content}=(req.body)
    let id=uuidv4()
    posts.push({id,username,content})
    res.redirect(`/posts`)
    //res.send(`post request working`)
})

app.get('/posts/:id', (req, res) => {
    let { id } = req.params; // Extracts the `id` from the URL
    let post=posts.find((p)=>id===p.id)
    //console.log(post); // Logs the `id` to the console
    res.render('show.ejs',{post}); // Sends a response
});

//pathch request is mean edit karne ke liy ya update ke liy
app.patch('/posts/:id', (req, res) => {
    let { id } = req.params; // Extracts the `id` from the URL
    let newContent=req.body.content;
    let post=posts.find((p)=>id===p.id)
    post.content=newContent
    console.log(post)
    //console.log(content)
    //console.log(id); // Logs the `id` to the console
    res.redirect(`/posts`); // Sends a response

});
// update ya edit ke liy request bhejne ke liy
app.get(`/posts/:id/edit`,(req,res)=>{
    let { id } = req.params; // Extracts the `id` from the URL
    let post=posts.find((p)=>id===p.id)
    res.render(`edit.ejs`,{post})
})
app.delete(`/posts/:id`,(req,res)=>{
    let { id } = req.params; // Extracts the `id` from the URL
     posts=posts.filter((p)=>id !== p.id)
    res.redirect(`/posts`)
})
//server kis port me run karega iske liy ya server listern ke liy
app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
});