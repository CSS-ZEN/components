import {renderHook, act} from '@testing-library/react-hooks'
import {useBem} from './usebem'

it('should calculate classname', () => {
    const {result} = renderHook(() => useBem('container', ''))

    act(() => {
        const className = result.current
        expect(className).toBe('container')
    })
})
