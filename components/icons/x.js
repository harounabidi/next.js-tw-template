export default function X(props) {
  return (
    <svg
      width={props.size ?? '1em'}
      height={props.size ?? '1em'}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      className={props.className}
      fill={props.color ?? 'currentColor'}
      onClick={props.onClick}
    >
      <path
        fill="none"
        stroke={props.color ?? 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.stroke ?? '3'}
        d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
      />
    </svg>
  )
}
