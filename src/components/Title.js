import React from 'react'


function Title({ title, views, createdAt }) {
    return(
        <>
            <h1>{title}</h1>
            <p>{views} Views | Uploaded {createdAt}</p>
        </>
    )
}

export default Title