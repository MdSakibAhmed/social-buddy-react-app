import React from 'react';
import { useHistory } from 'react-router';


const Posts = (props) => {
    const {post} = props
    const {title,body,id} = post;
    const history = useHistory();
    const handleShowDetailed = (id)=> {
        const url = `post/${id}/comments`
        history.push(url)

    }
    return (
     
        <div className="  col-md-6 col-12 border text-center p-3 d-flex flex-column justify-content-between align-items-center">
            <h1>{title}</h1>
            <p>{body}</p>

            <button className="btn-success border-0 rounded p-2" onClick={() => handleShowDetailed(id)}>Show comments</button>

        </div>
        
    );
};

export default Posts;