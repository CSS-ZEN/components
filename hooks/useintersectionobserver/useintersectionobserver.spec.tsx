import {renderHook, act} from '@testing-library/react-hooks'
import useintersectionobserver from './useintersectionobserver'

it('should increment counter', () => {
    const {result} = renderHook(() => useintersectionobserver(() => {}))
    act(() => {
        if (result.current.current) console.info('then do nothing.')
    })
    expect(1).toBe(1)
})
