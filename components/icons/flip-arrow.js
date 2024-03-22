'use client'

import { useState } from 'react'

export default function FilpArrow({
  size,
  color,
  className,
  toggle,
  toggled,
  duration,
  rounded,
  direction
}) {
  const [isToggledInternal, toggleInternal] = useState(false)

  const isToggled = toggle ? toggle : isToggledInternal
  const setToggled = toggled ? toggled : toggleInternal

  const lineStyle = {
    strokeWidth: '3',
    strokeLinecap: rounded ? 'round' : 'square',
    transition: `transform ${duration ?? 0.2}s ease`
  }

  const top_line = {
    ...lineStyle,
    transformOrigin: 'center',
    transform: isToggled ? 'rotate(45deg)' : 'rotate(-45deg)'
  }

  const bottom_line = {
    ...lineStyle,
    transformOrigin: 'center',
    transform: isToggled ? 'rotate(-45deg)' : 'rotate(45deg)'
  }

  const getMidpoint = (x1, y1, x2, y2) => {
    return {
      x: (x1 + x2) / 2,
      y: (y1 + y2) / 2
    }
  }

  const { x: x1, y: y1 } = getMidpoint(12, 0, 12, 14)
  const { x: x2, y: y2 } = getMidpoint(12, 10, 12, 24)

  return (
    <svg
      style={{
        cursor: 'pointer',
        transform: direction === 'vertical' ? 'rotate(90deg)' : ''
      }}
      width={size ?? '1em'}
      height={size ?? '1em'}
      fill={color}
      onClick={() => setToggled(!isToggled)}
      className={className}
      preserveAspectRatio="xMidYMid meet"
      viewBox="-9 -9 42 42"
    >
      <g fill="none" stroke={color ?? 'black'}>
        <path
          d="M12 0V14"
          style={{ ...top_line, transformOrigin: `${x1}px ${y1}px` }}
        />
        <path
          d="M12 10V24"
          style={{ ...bottom_line, transformOrigin: `${x2}px ${y2}px` }}
        />
      </g>
    </svg>
  )
}
