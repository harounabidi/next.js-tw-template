export default function Package(props) {
  return (
    <svg
      width={props.size ?? '1em'}
      height={props.size ?? '1em'}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      fill={props.color ?? 'currentColor'}
    >
      <path
        fill={props.color ?? 'currentColor'}
        d="M6 3c-.5 0-.9.2-1.2.6L3.5 5.2c-.3.4-.5.8-.5 1.3V19c0 1.1.9 2 2 2h8.3c-.2-.6-.3-1.3-.3-2c0-3.3 2.7-6 6-6c.7 0 1.4.1 2 .3V6.5c0-.5-.2-.9-.5-1.3l-1.4-1.7c-.2-.3-.6-.5-1.1-.5H6m-.1 1h12l.9 1H5.1l.8-1M6 15h6v3H6v-3m15.3.8l-3.6 3.6l-1.6-1.6L15 19l2.8 3l4.8-4.8l-1.3-1.4Z"
      />
    </svg>
  )
}
