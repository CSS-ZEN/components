
import {useMemo} from 'react'
import {bem} from '@somarlyonks/bem'

type IModifier = string | undefined | false
type IModifiers = IModifier[] | Record<string, IModifier | true>


export function useBem (
    block: string,
    element: string,
    modifiers: IModifiers = [],
    inputs: React.DependencyList = []
) {
    if (arguments.length === 3) {
        inputs = Array.isArray(modifiers) ? [] : Object.values(modifiers)
    }

    return useMemo(() => bem(block, element, modifiers), inputs)
}

export function moduledBem (styles: {readonly [key: string]: string}) {
    return function useModuledBem (
        block: string,
        element: string,
        modifiers: IModifiers = [],
        inputs: React.DependencyList = []
    ) {
        if (arguments.length === 3) {
            inputs = Array.isArray(modifiers) ? [] : Object.values(modifiers)
        }

        return useMemo(() => bem(block, element, modifiers).split(' ').map(key => styles[key]).join(' '), inputs)
    }
}
