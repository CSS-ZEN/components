import React from 'react'
import useInterSectionObserver from './useintersectionobserver'

export const BasicUseInterSectionObserver = () => {
    const [isIntersecting, setIsIntersecting] = React.useState(false)
    const $ref = useInterSectionObserver(entry => {
        console.info('entry is intersecting', entry.isIntersecting)
        setIsIntersecting(entry.isIntersecting)
    })

    return (
        <>
            <div style={{height: '110vh'}}>Ho.</div>
            <div style={{height: '30vh'}}>The observed element is {!isIntersecting && (<strong style={{color: 'red'}}>NOT</strong>)} intersecting.</div>
            <h1 ref={$ref}>The is observed elment</h1>
            <div style={{height: '30vh', display: 'flex', alignItems: 'flex-end'}}>The observed element is {!isIntersecting && (<strong style={{color: 'red'}}>&nbsp;NOT&nbsp;</strong>)} intersecting.</div>
            <div style={{height: '110vh'}}>Hey.</div>
        </>
    )
}
