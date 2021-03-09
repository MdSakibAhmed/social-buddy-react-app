import React, { useState } from 'react';
import { useParams } from 'react-router';

const Comments = (props) => {

 const {name,email,body} = props.comment;

    
    return (
        <div className="col-md-6 col-12 border p-3">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    );
};

export default Comments;