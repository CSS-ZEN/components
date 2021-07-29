import React from 'react'
import Flex from './flex'
import './flex.scss'
import style from './flex.composition.module.scss'

export const BasicFlex = () => (
    <Flex className={style.debug} full stretch>
        <Flex shrink central>Shrink</Flex>
        <Flex grow verticle stretch>
            <Flex grow central>Grow, Verticle</Flex>
            <Flex grow central>Grow, Verticle</Flex>
        </Flex>
    </Flex>
)

export const WrapFlex = () => (
    <Flex className={style.debug} full stretch verticle>
        <Flex style={{overflowX: 'auto'}}>
            {Array.from(Array(10)).map((_, i) => (
                <Flex key={i} className={style.square} central shrink={false}>Nowrap</Flex>
            ))}
        </Flex>
        <Flex wrap>
            {Array.from(Array(10)).map((_, i) => (
                <Flex key={i} className={style.square} central>Wrap</Flex>
            ))}
        </Flex>
        <Flex wrap="wrap-reverse">
            {Array.from(Array(10)).map((_, i) => (
                <Flex key={i} className={style.square} central>Wrap Reverse</Flex>
            ))}
        </Flex>
    </Flex>
)

export const NormalAlign = () => (
    <Flex className={style.debug} full stretch>
        <Flex wrap>
            {Array.from(Array(10)).map((_, i) => (
                <Flex central key={i} className={style.square} style={{
                    width: `${Math.random() * 50 + 50}px`,
                    height: `${Math.random() * 50 + 50}px`,
                }}>Normal Align</Flex>
            ))}
        </Flex>
    </Flex>
)

export const CentralAlign = () => (
    <Flex className={style.debug} full>
        <Flex grow central>
            <Flex className={style.square} central>Central</Flex>
        </Flex>
    </Flex>
)


export const FlexOrder = () => {
    const orders = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => Math.random() - 1 / 2)
    return (
        <Flex className={style.debug} full stretch>
            <Flex wrap>
                {Array.from(Array(10)).map((_, i) => (
                    <Flex key={i} className={style.square} order={orders[i] as ANY} central>
                        id: {i}<br />
                        order: {orders[i]}
                    </Flex>
                ))}
            </Flex>
        </Flex>
    )
}

export const AlignSelf = () => (
    <Flex className={style.debug} full stretch verticle>
        <Flex wrap>
            {Array.from(Array(10)).map((_, i) => (
                <Flex key={i} className={style.square} central alignSelf={i === 3 ? 'flex-end' : 'auto'}>
                    id: {i}<br />
                    {i === 3 ? 'flex-end' : 'auto'}
                </Flex>
            ))}
        </Flex>
    </Flex>
)
