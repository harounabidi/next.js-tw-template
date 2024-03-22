export default function LeftDoubleArrow(props) {
  return (
    <svg
      className={props.className}
      onClick={props.onClick}
      width={props.size ? props.size : '2em'}
      height={props.size ? props.size : '2em'}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 15 15"
      fill={props.color}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.854 3.854a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L3.207 7.5l3.647-3.646Zm6 0a.5.5 0 0 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L9.207 7.5l3.647-3.646Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
