export default function LeftArrow(props) {
  return (
    <svg
      className={props.className}
      onClick={props.onClick}
      width={props.size ? props.size : '2em'}
      height={props.size ? props.size : '2em'}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      fill={props.color}
    >
      <g transform="rotate(180 12 12)">
        <path
          fill="currentColor"
          d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"
        />
      </g>
    </svg>
  )
}
