export default function Search(props) {
  return (
    <svg
      width={props.size ?? '1em'}
      height={props.size ?? '1em'}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 16 16"
      fill={props.color ?? 'currentColor'}
    >
      <g
        fill="none"
        stroke={props.color ?? 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="m11.25 11.25l3 3" />
        <circle cx="7.5" cy="7.5" r="4.75" />
      </g>
    </svg>
  )
}
