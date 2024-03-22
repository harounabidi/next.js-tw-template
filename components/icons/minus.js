export default function Minus(props) {
  return (
    <svg
      width={props.size ?? '1em'}
      height={props.size ?? '1em'}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 36 36"
      fill={props.color ?? 'currentColor'}
      className={props.className}
    >
      <path
        fill={props.color ?? 'currentColor'}
        d="M34 18a3 3 0 0 1-3 3H5a3 3 0 1 1 0-6h26a3 3 0 0 1 3 3z"
      />
    </svg>
  )
}
