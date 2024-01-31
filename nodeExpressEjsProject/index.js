import express from "express";

const app = new express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res)=>{
    // console.log(blog[0].title);
    res.render("index.ejs",{
        // blogPost: blog[0].title,
        blogPost: blog
    });
});

app.get("/content/:title", (req, res) => {
    const reqTitle = req.params.title;

    blog.find(post => {

        if(post.title === reqTitle){
            
            res.render("blogContent.ejs",{
                blogTitle: reqTitle,
                blogContent: post.blogs,
                blogWriter: post.writerName,
                
            });

        }

    }
    );
});

app.listen(port, () => {
    console.log(`Server running at port ${port}.`);
});

const blog = [
    {
      title : "0001",
      blogs: "1Lorem ipsum dolor sit amet, et proin, justo mus. Porta suspendisse turpis netus sagittis tortor at, vitae aliquet",
      writerName: "1Chicken Taco",
    },
    {
        title : "0002",
        blogs: "2Lorem ipsum dolor sit amet, et proin, justo mus. Porta suspendisse turpis netus sagittis tortor at, vitae aliquet",
        writerName: "2Chicken Taco",
    },
    {
        title : "0003",
        blogs: "3Lorem ipsum dolor sit amet, et proin, justo mus. Porta suspendisse turpis netus sagittis tortor at, vitae aliquet",
        writerName: "3Chicken Taco",
    }
  ];