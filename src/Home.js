// import {useEffect, useState} from 'react';
import BlogsList from './BLogsList';
import useFetch from './useFetch';


const Home = () => {
    
    const {data: blogs , isPending , error} = useFetch(' http://localhost:8000/blogs');

    //  const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blogs => blogs.id !== id );
    // setBlogs(newBlogs); 
  

  

    return (
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogsList blogs = {blogs} title = "All Blogs"  />}           
        </div>
    );
    }

export default Home;