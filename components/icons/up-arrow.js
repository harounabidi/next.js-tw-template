export default function UpArrow(props) {
  return (
    <svg
      width={props.size ?? '1em'}
      height={props.size ?? '1em'}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      fill={props.color ?? 'currentColor'}
      className={props.className}
    >
      <path
        fill="none"
        stroke={props.color ?? 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="m12 5l6 6m-6-6l-6 6m6-6v14"
      />
    </svg>
  )
}
