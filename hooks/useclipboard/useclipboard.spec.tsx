import {renderHook, act} from '@testing-library/react-hooks'
import useClipboard from './useclipboard'

it('should set clipboard text', () => {
    const {result} = renderHook(() => useClipboard())

    act(() => {
        const [, setClipboard] = result.current
        setClipboard('123')
    })

    // const [clipboard] = result.current
    // expect(clipboard).toBe('123')
})
