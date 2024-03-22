export default function Plus(props) {
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
        d="M31 15H21V5a3 3 0 1 0-6 0v10H5a3 3 0 1 0 0 6h10v10a3 3 0 1 0 6 0V21h10a3 3 0 1 0 0-6z"
      />
    </svg>
  )
}
