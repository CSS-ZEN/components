import React from 'react'

import Flex from '@csszen/components.flexmini'
import Button from '@csszen/components.button'

import Quote from '@csszen/components.quote'

import styles from './fof.module.scss'


export interface IFOFProps {
    Link?: <T extends {href: string}>(props: T) => JSX.Element
    Head?: <T extends {title: string}>(props: T) => JSX.Element
}

export default function FOF ({Head, Link}: IFOFProps) {

    return (
        <Flex className={styles['f0f-container']} full central>
            {Head && <Head title="Content Not Found" />}

            <Flex className={styles['f0f-container__404']}>
                <hgroup data-word="404">404<Flex className={styles['f0f-container__noise']} /></hgroup>
            </Flex>
            <Flex><Quote inline quote="远方除了遥远一无所有" author="海子" work="远方" /></Flex>
            <Flex>
                <Button borderless label="Back" onClick={navigateBack} />
                <span>/</span>
                {Link
                    ? <Link href="/"><Button borderless label="Home" /></Link>
                    : <a href="/"><Button borderless label="Home" /></a>
                }
            </Flex>
        </Flex>
    )
}

function navigateBack () {
    if (history.length) return history.back()
    return location.assign('/')
}
