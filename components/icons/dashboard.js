export default function Dashboard(props) {
  return (
    <svg
      width={props.size ? props.size : "1em"}
      height={props.size ? props.size : "1em"}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      fill={props.color ? props.color : "currentColor"}
    >
      <path
        fill="currentColor"
        d="M9 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2zm6 0h4c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2zm6-13V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2z"
      />
    </svg>
  )
}