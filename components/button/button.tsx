import React, {forwardRef} from 'react'
import Flex from '@csszen/components.flexmini'
import {moduledBem} from '@csszen/hooks.usebem'
import styles from './button.module.scss'


const useBem = moduledBem(styles)

export interface IButtonProps {
    type?: 'button' | 'submit' | 'reset'
    name?: string
    label?: string
    loading?: boolean
    disabled?: boolean
    className?: string
    labelClassName?: string
    primary?: boolean
    borderless?: boolean
    onClick?: JSX.IntrinsicElements['button']['onClick']
}

export default forwardRef<HTMLButtonElement, IButtonProps>(({
    type = 'button',
    name,
    label,
    loading = false,
    disabled = false,
    className = '',
    labelClassName = '',
    onClick,
    primary = false,
    borderless = false,
}, ref) => (
    <button
        ref={ref}
        type={type}
        name={name}
        className={useBem('button', '', {primary, borderless}) + ` ${className}`}
        disabled={disabled || loading}
        onClick={onClick}
    >
        <Flex>
            <span className={styles.button__label + ' ' + labelClassName}>{label}</span>
        </Flex>
    </button>
))
