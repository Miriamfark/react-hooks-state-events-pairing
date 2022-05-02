import React from 'react'

function UpvoteButton({ upvote, handleUpvoteClick }) {
    return(
        <button onClick={handleUpvoteClick}>👍 {upvote}</button>
    )
}

export default UpvoteButton