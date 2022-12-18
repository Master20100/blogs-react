import {useState, useEffect} from 'react';
import BlogList from './BlogList';
const Home = () => {
const [blogs,setBlogs]  = useState([
    {title:"blog 1",body:"content1",author:"author1",id:1},
    {title:"blog 2",body:"content2",author:"author2",id:2},
    {title:"blog 2",body:"content3",author:"author3",id:3}
]);    

const handleDelete = (id)=>{
    const newBlogs = blogs.filter(blog=>blog.id!==id);
    setBlogs(newBlogs);
}
    
return ( 
  <div className='home'>
    <BlogList blogs={blogs} handleDelete ={handleDelete}/>
  </div>
 );
}
export default Home;


