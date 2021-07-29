import React from 'react'
import Flex from './flexrx'
import './flexrx.scss'
import style from './flexrx.composition.module.scss'

export const ResponsiveFlex = () => (
    <Flex className={style.debug} full stretch>
        <Flex shrink central>Shrink</Flex>
        <Flex grow verticle stretch direction-md="row">
            <Flex grow central>Grow, Verticle</Flex>
            <Flex grow central>Grow, Verticle</Flex>
        </Flex>
    </Flex>
)
