export default function Options(props) {
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
        fill={props.color ?? 'currentColor'}
        d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4zm-6 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4zm12 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4z"
      />
    </svg>
  )
}
