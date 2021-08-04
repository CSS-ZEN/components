import React from 'react'
import Flex from './flexmini'
import style from './flexmini.composition.module.scss'

export const BasicFlex = () => (
    <Flex className={style.debug} full>
        <Flex shrink central>Shrink</Flex>
        <Flex grow verticle>
            <Flex grow central>Grow, Verticle</Flex>
            <Flex grow central>Grow, Verticle</Flex>
        </Flex>
    </Flex>
)
