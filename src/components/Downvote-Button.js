import React from 'react'

function DownvoteButton({ downvote, handleDownvoteClick }) {
    return(
        <button onClick={handleDownvoteClick}>👎 {downvote}</button>
    )
}

export default DownvoteButton