import React, { useEffect, useState } from 'react';
import AllPosts from '../allPosts/AllPosts';
import {Button} from "react-bootstrap"

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts/").then(res => res.json()).then(data => setPosts(data))
    },[])

    
    
     // const [comments,setComments] = useState([]);
    // useEffect(()=> {
    //     fetch("")
    // })

   

    return (
        <div  className="row container  ">
        {
            posts.map(post => <AllPosts post={post} ></AllPosts>)
        }
            
        </div>
    );
};

export default Home;