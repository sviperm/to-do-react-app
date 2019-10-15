/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from 'react'

export const useDidUpdateEffect = (fn, inputs) => {
    const didMountRef = useRef(false);

    useEffect(() => {
        if (didMountRef.current) {
            fn();
        } else {
            didMountRef.current = true;
        }
    }, inputs)
}

export const useIsMounted = () => {
    const isMounted = useRef(false)

    useEffect(() => {
        isMounted.current = true
        return () => isMounted.current = false
    }, [])
    return isMounted
}
