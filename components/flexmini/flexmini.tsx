
import React, {ReactNode} from 'react'
import {moduledBem} from '@csszen/hooks.usebem'
import styles from './flexmini.module.scss'


const useBem = moduledBem(styles)

export interface IFlexProps {
    className?: string
    children?: ReactNode
    full?: boolean
    central?: boolean
    verticle?: boolean
    grow?: boolean
    shrink?: boolean
    wrap?: boolean
}

export default function Flex ({
    className = '',
    children,
    central,
    full = false,
    verticle = false,
    grow = false,
    shrink = false,
    wrap = false,
}: IFlexProps) {
    const _className = useBem('flex', '', {full, verticle, grow, shrink, wrap}) + ` ${className}`

    if (central) return (
        <div className={_className}>
            <div className={styles['flex-container']}>
                {children}
            </div>
        </div>
    )

    return (
        <div className={_className}>
            {children}
        </div>
    )
}
