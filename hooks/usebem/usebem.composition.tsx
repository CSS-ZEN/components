import React, {useState} from 'react'
import {useBem, moduledBem} from './usebem'
import './usebem.composition.scss'
import style from './usebem.composition.module.scss'


export const BasicUsebem = () => {
    const [borderless, setBorderless] = useState(false)
    const className = useBem('container', '', {borderless})

    const toggleBorderless = () => setBorderless(prev => !prev)

    return (
        <div className={className}>
            <h1>classname is "{className}"</h1>
            <button onClick={toggleBorderless}>{borderless ? 'show' : 'hide'} border</button>
        </div>
    )
}

const useModuledBem = moduledBem(style)
export const ModuledUsebem = () => {
    const [borderless, setBorderless] = useState(false)
    const className = useModuledBem('container', '', {borderless})

    const toggleBorderless = () => setBorderless(prev => !prev)

    return (
        <div className={className}>
            <h1>classname is "{className}"</h1>
            <button onClick={toggleBorderless}>{borderless ? 'show' : 'hide'} border</button>
        </div>
    )
}
