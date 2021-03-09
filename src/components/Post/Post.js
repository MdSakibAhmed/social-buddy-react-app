import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Comments from '../Comments/Comments';

const Post = () => {
    const {postId} = useParams();

    const [post, setPost] = useState({});
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.json()).then(data => {
            setPost(data)
        })

    },[])

    const [comments, setComments] = useState([]);
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).then(res => res.json()).then(data => setComments(data))

    },[])
    return (
        <div className="text-center container" >
        <div style={{border:"1px solid blue"}}>
            <h2>{post.title}</h2>
        <p>{post.body}</p> 
        </div>
        
        
   
        <h1>Comments</h1>
        <div className="row">
{
    comments.map(comment => <Comments comment={comment}></Comments>)
}

        </div>
        </div>

    );
};

export default Post;