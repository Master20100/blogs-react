import {useState} from 'react';
import BlogList from './BlogList';
const Home = () => {
const [blogs,setBlogs]  = useState([
    {title:"blog 1",body:"content1",author:"author1",id:1},
    {title:"blog 2",body:"content2",author:"author2",id:2},
    {title:"blog 3",body:"content3",author:"author3",id:3}
]);    

    return ( 
<div className='home'>
    <BlogList blogs={blogs} />

</div>
);
}
export default Home;


