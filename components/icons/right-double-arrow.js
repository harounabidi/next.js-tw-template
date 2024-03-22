export default function RightDoubleArrow(props) {
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
        d="M2.146 11.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 1 0-.708.708L5.793 7.5l-3.647 3.646Zm6 0a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 1 0-.708.708L11.793 7.5l-3.647 3.646Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
