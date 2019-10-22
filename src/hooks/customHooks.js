/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from 'react'

export const useMountDidUpdateEffect = (mountFun, didUpdFun, inputs) => {
    const isMounted = useRef(false);
    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            mountFun();
        } else {
            didUpdFun();
        }
    }, inputs)
}

export const useDidUpdateEffect = (fun, inputs) => {
    const isMounted = useRef(false);
    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
        } else {
            fun();
        }
    }, inputs)
}

export const useAnimationOnUpdate = (setClasses, [initialClasses, animationClass, animatedClass], toogler, inputs) => {
    const isMounted = useRef(false);
    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            setClasses(!toogler ? [].concat(initialClasses) : [].concat(initialClasses, animatedClass));
        } else {
            setClasses(!toogler ? [].concat(initialClasses, animationClass) : [].concat(initialClasses, animatedClass, animationClass));
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
