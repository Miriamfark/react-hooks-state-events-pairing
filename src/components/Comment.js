import React from 'react'

function Comment({ comment }) {
    return(
        <>
            <p>{comment.user}</p>
            <p>{comment.comment}</p>
        </>
    )
}

export default Comment