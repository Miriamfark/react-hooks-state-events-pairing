import React, { useState } from 'react'
import video from "../data/video.js";
import Title from "./Title"
import CommentList from "./Comment-List"
import HideButton from "./Hide-Button"
import UpvoteButton from './Upvote-Button'
import DownvoteButton from './Downvote-Button'

function App() {
  console.log("Here's your data:", video);

  const [upvote, setUpvote] = useState(video.upvotes)
  const [downvote, setDownvote] = useState(video.downvotes)
  const [isHidden, setIsHidden] = useState(false)

  function handleUpvoteClick() {
    setUpvote(upvote + 1)
  }

  function handleDownvoteClick() {
    setDownvote(downvote + 1)
  }

  return (
    <div className="App">
      <iframe
        id={video.id}
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Title title={video.title} views={video.views} createdAt={video.createdAt} />
      <UpvoteButton handleUpvoteClick={handleUpvoteClick} upvote={upvote} />
      <DownvoteButton handleDownvoteClick={handleDownvoteClick} downvote={downvote} />
      <HideButton isHidden={isHidden} setIsHidden={setIsHidden} />
      <CommentList comments={video.comments} isHidden={isHidden} />
    </div>
  );
}

export default App;
