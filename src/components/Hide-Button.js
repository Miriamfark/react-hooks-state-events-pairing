import React, { useState } from 'react'

function HideButton({ isHidden, setIsHidden }) {

     function handleHideClick() {
        setIsHidden(!isHidden)
        console.log(isHidden)

        if (isHidden === true) {

        }
    }

    return(
        <button onClick={handleHideClick}>{isHidden ? "Show Comments" : "Hide Comments"}</button>
    )
}

export default HideButton