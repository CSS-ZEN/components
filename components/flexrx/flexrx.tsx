import React, {ReactNode, HTMLAttributes, forwardRef} from 'react'
import {useBem} from '@csszen/hooks.usebem'
import type {Property, Globals} from 'csstype'


type SelfPosition = 'center' | 'end' | 'flex-end' | 'flex-start' | 'self-end' | 'self-start' | 'start'
type ContentDistribution = 'space-around' | 'space-between' | 'space-evenly' | 'stretch'
type ContentPosition = 'center' | 'end' | 'flex-end' | 'flex-start' | 'start'

type AlignItems = Globals | SelfPosition | 'baseline' | 'normal' | 'stretch'
type JustifyContent = Globals | ContentDistribution | ContentPosition | 'left' | 'normal' | 'right'
type AlignContent = Globals | ContentDistribution | ContentPosition | 'baseline' | 'normal'
type FlexDirection = Globals | 'column' | 'column-reverse' | 'row' | 'row-reverse'
type AlignSelf = Globals | SelfPosition | 'auto' | 'baseline' | 'normal' | 'stretch'
type Order = Globals | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export interface IFlexProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode
    central?: boolean
    full?: boolean
    // shortcuts
    verticle?: boolean
    stretch?: boolean
    grow?: boolean
    shrink?: boolean
    // raw
    alignItems?: AlignItems
    justifyContent?: JustifyContent
    alignContent?: AlignContent
    wrap?: true | Property.FlexWrap
    direction?: FlexDirection
    alignSelf?: AlignSelf
    /** Globals or 0-9 */
    order?: Order

    'full-xs'?: boolean
    'full-sm'?: boolean
    'full-md'?: boolean
    'full-lg'?: boolean

    'stretch-xs'?: boolean
    'stretch-sm'?: boolean
    'stretch-md'?: boolean
    'stretch-lg'?: boolean
    'grow-xs'?: boolean
    'grow-sm'?: boolean
    'grow-md'?: boolean
    'grow-lg'?: boolean
    'shrink-xs'?: boolean
    'shrink-sm'?: boolean
    'shrink-md'?: boolean
    'shrink-lg'?: boolean
    'alignItems-xs'?: AlignItems
    'alignItems-sm'?: AlignItems
    'alignItems-md'?: AlignItems
    'alignItems-lg'?: AlignItems
    'justifyContent-xs'?: JustifyContent
    'justifyContent-sm'?: JustifyContent
    'justifyContent-md'?: JustifyContent
    'justifyContent-lg'?: JustifyContent
    'alignContent-xs'?: AlignContent
    'alignContent-sm'?: AlignContent
    'alignContent-md'?: AlignContent
    'alignContent-lg'?: AlignContent
    'wrap-xs'?: true | Property.FlexWrap
    'wrap-sm'?: true | Property.FlexWrap
    'wrap-md'?: true | Property.FlexWrap
    'wrap-lg'?: true | Property.FlexWrap
    'direction-xs'?: FlexDirection
    'direction-sm'?: FlexDirection
    'direction-md'?: FlexDirection
    'direction-lg'?: FlexDirection
    'alignSelf-xs'?: AlignSelf
    'alignSelf-sm'?: AlignSelf
    'alignSelf-md'?: AlignSelf
    'alignSelf-lg'?: AlignSelf
    'order-xs'?: Order
    'order-sm'?: Order
    'order-md'?: Order
    'order-lg'?: Order
}

export default forwardRef<HTMLDivElement, IFlexProps>(function FlexRx (props, ref) {
    const {central, ...rawProps} = props

    const defaultProps: Pick<IFlexProps, 'alignItems' | 'justifyContent' | 'alignContent'> = {
        alignItems: 'normal',
        justifyContent: 'normal',
        alignContent: 'normal',
    }

    if (central) Object.assign(defaultProps, {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    })

    const {
        className: propClassName = '',
        children,
        full,
        verticle,
        grow,
        shrink,
        stretch,
        alignItems = defaultProps.alignItems,
        justifyContent = defaultProps.justifyContent,
        alignContent = defaultProps.alignContent,
        wrap = 'nowrap',
        direction = 'row',
        alignSelf = 'auto',
        order = 0,
        // tslint:disable-next-line: trailing-comma
        ...extraProps
    } = rawProps

    const classList = [
        full && 'full',
        'flex-grow-' + (grow ? '1' : '0'),
        'flex-shrink-' + ((shrink === undefined || shrink) ? '1' : '0'),
        'flex-basis-' + ((grow || shrink) ? '0' : 'auto'),
        'align-items-' + (stretch ? 'stretch' : alignItems),
        'justify-content-' + justifyContent,
        'align-content-' + alignContent,
        'flex-wrap-' + (wrap === true ? 'wrap' : wrap),
        'flex-direction-' + (verticle ? 'column' : direction),
        'align-self-' + alignSelf,
        'order-' + order,
    ]

    const checkProperty = (screenSize: string) => (key: string) => {
        const propertyKey = `${key}-${screenSize}` as keyof IFlexProps
        const hasKey = Reflect.has(props, propertyKey)
        const value = hasKey ? props[propertyKey] : undefined
        return [hasKey, value]
    }

    for (const screenSize of ['xs', 'sm', 'md', 'lg']) {
        const checkPropertyInScreenSize = checkProperty(screenSize)
        const [, sFull] = checkPropertyInScreenSize('full')
        if (sFull) classList.push(`full-${screenSize}`)

        const [hasSGrow, sGrow] = checkPropertyInScreenSize('grow')
        if (hasSGrow) classList.push(`grow-${screenSize}-${sGrow ? '1' : '0'}`)

        const [, sStretch] = checkPropertyInScreenSize('stretch')
        if (sStretch) {
            classList.push(`align-items-${screenSize}-stretch`)
        } else {
            const [, sAlignItems] = checkPropertyInScreenSize('alignItems')
            if (sAlignItems) {
                classList.push(`align-items-${screenSize}-${sAlignItems}`)
            }
        }
        const [hasSShrink, sShrink] = checkPropertyInScreenSize('shrink')
        if (hasSShrink) {
            classList.push(`flex-shrink-${screenSize}-${sShrink ? 1 : 0}`)
        }
        if (hasSGrow || hasSShrink) {
            classList.push(`flex-basis-${screenSize}-0`)
        }
        const [, sJustifyContent] = checkPropertyInScreenSize('justifyContent')
        if (sJustifyContent) {
            classList.push(`justify-content-${screenSize}-${sJustifyContent}`)
        }
        const [, sAlignContent] = checkPropertyInScreenSize('alignContent')
        if (sAlignContent) {
            classList.push(`align-content-${screenSize}-${sAlignContent}`)
        }
        const [, sDirection] = checkPropertyInScreenSize('direction')
        if (sDirection) {
            classList.push(`flex-direction-${screenSize}-${sDirection}`)
        }
        const [, sAlignSelf] = checkPropertyInScreenSize('alignSelf')
        if (sAlignSelf) {
            classList.push(`align-self-${screenSize}-${sAlignSelf}`)
        }
        const [hasSOrder, sOrder] = checkPropertyInScreenSize('order')
        if (hasSOrder) {
            classList.push(`order-${screenSize}-${sOrder}`)
        }
    }

    const className = useBem('cz-flex', '', classList, [
        grow, shrink,
        alignItems, alignContent, justifyContent, wrap, verticle, direction,
        alignSelf, order,
    ]) + ` ${propClassName}`

    if (central) return (
        <div {...extraProps} className={className}>
            <div className="cz-flex-container">
                {children}
            </div>
        </div>
    )

    return (
        <div {...extraProps} className={className} ref={ref}>
            {children}
        </div>
    )
})
