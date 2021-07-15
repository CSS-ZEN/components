import React from 'react'
import useClipboard from './useclipboard'

export const Basicuseclipboard = () => {
    const [clipboard, setClipboard] = useClipboard()

    const copyText = 'Copy me!'
    const handleClick = () => setClipboard(copyText)

    return (
        <>
            <h1>The clipboard is: {clipboard}</h1>
            <button onClick={handleClick}>{copyText}</button>
        </>
    )
}
