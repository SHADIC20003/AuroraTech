import { MILLISECONDS } from '@/lib/constants'
import React from 'react'

type UseIntervalProps = {
    fn: () => void
    delay?: number
}

export const useInterval = ({ fn, delay }: UseIntervalProps) => {
    const [isRunning, setIsRunning] = React.useState(true)
    let interval = React.useRef<NodeJS.Timeout>()

    const start = () => {
        if (interval.current) return
        interval.current = setInterval(fn, delay ?? MILLISECONDS)
        setIsRunning(true)
    }

    const stop = () => {
        if (!interval.current) return
        clearInterval(interval.current)
        interval.current = undefined
        setIsRunning(false)
    }

    const reset = () => {
        stop()
        start()
    }

    React.useEffect(() => {
        start()
        return stop
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [delay])

    return { start, stop, reset, isRunning }
}
