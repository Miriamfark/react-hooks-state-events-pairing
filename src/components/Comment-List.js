import React from 'react'
import Comment from './Comment'

function CommentList({ comments, commentCount, isHidden }) {
    const newCommentsArray =  comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />
    })

    return(
        <>
            <h2>{comments.length} Comments</h2>
            {isHidden ? null : newCommentsArray}
        </>
    )
}

export default CommentList