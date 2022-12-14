import {useState} from 'react';
const Home = () => {
const [blogs,setBlogs]  = useState([
    {title:"blog 1",body:"content1",author:"author1",id:1},
    {title:"blog 2",body:"content2",author:"author2",id:2},
    {title:"blog 3",body:"content3",author:"author3",id:3}
]);    

    return ( 
        <div className="home">
        {blogs.map((blog)=>(
<div className="blog-preview" key={blog.id}> 
<h2>{blog.body}</h2>
<p>Written by {blog.author}</p>


</div>

))}
        </div>
     );
}
export default Home;


