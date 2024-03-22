export default function Slash(props) {
  return (
    <svg
      width={props.size ?? '1em'}
      height={props.size ?? '1em'}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      fill={props.color ?? 'currentColor'}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".75"
        d="M15 4L8 20"
      />
    </svg>
  )
}
