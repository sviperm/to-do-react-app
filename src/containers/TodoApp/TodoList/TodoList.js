import React, { useRef } from 'react';
import { useDrag } from 'react-use-gesture'
import { useSprings, animated, interpolate } from 'react-spring'
import swap from 'lodash-move'
import classes from './TodoList.module.css'

import TodoItem from '../../../components/TodoItem/TodoItem'

const fn = (order, down, originalIndex, curIndex, y) => index => {
    if (down && index === originalIndex) {
        return {
            y: curIndex * 55 + y < 0 ? 0 : curIndex * 55 + y,
            scale: 1.03,
            radius: 10,
            shadow: 3,
            zIndex: 1,
            immediate: key => key === 'zIndex',
            delay: key => key !== 'y' && 300,
        }
    } else if (!down && index === originalIndex) {
        return {
            y: order.indexOf(index) * 55,
            scale: 1,
            radius: 0,
            shadow: 0,
            zIndex: 1,
            immediate: key => key === 'zIndex',
        }
    } else if (down) {
        return {
            y: order.indexOf(index) * 55,
            opacity: 0.3,
            zIndex: 0,
            delay: key => key === 'opacity' && 300,
            immediate: key => key === 'zIndex',
        }
    }
    return {
        y: order.indexOf(index) * 55,
        opacity: 1,
        scale: 1,
        radius: 0,
        shadow: 0,
        zIndex: 0,
        immediate: key => key === 'zIndex',
    }
}

const TodoList = ({ items }) => {
    const order = useRef(items.map((_, index) => index))
    const [springs, setSprings] = useSprings(items.length, fn(order.current))
    const bind = useDrag(({ args: [originalIndex], down, movement: [, y] }) => {
        const curIndex = order.current.indexOf(originalIndex)
        const curRow = Math.round(curIndex + y / 55)
        const newOrder = swap(order.current, curIndex, curRow)
        setSprings(fn(newOrder, down, originalIndex, curIndex, y))
        if (!down && order.current !== newOrder) {
            order.current = newOrder
            // console.log(newOrder)
        }
    })

    return (
        <ul className={classes.TodoList} style={{ height: items.length * 55 }}>
            {springs.map(({ y, scale, radius, shadow, opacity, zIndex }, i) => (
                <animated.li
                    {...bind(i)}
                    key={i}
                    className={classes.TodoItem}
                    style={{
                        boxShadow: shadow.interpolate(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${5 * s}px 0px`),
                        borderRadius: radius.interpolate(br => `${br}px`),
                        transform: interpolate([y, scale], (y, scale) => `translate3d(0,${y}px,0) scale(${scale})`),
                        opacity: opacity.interpolate(o => o),
                        zIndex,
                    }}
                    children={<TodoItem {...items[i]} />}
                />
                //>
                //    <div {...bind(i)} className={classes.Grip} />
                //    <TodoItem {...items[i]} />
                //</animated.li>
            ))}
        </ul>
    );
};

export default TodoList;