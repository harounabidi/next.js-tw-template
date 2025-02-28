export default function Shutdown(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26 26"
      width={props.size ?? '1em'}
      height={props.size ?? '1em'}
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        fill={props.color ?? 'currentColor'}
        d="M13 0a2 2 0 0 0-2 2v10a2 2 0 0 0 4 0V2a2 2 0 0 0-2-2M5.844 2.594a1.5 1.5 0 0 0-.782.344A12.796 12.796 0 0 0 .188 13C.188 20.058 5.94 25.813 13 25.813S25.813 20.058 25.813 13c0-4.073-1.902-7.717-4.875-10.063a1.5 1.5 0 1 0-1.875 2.344A9.804 9.804 0 0 1 22.813 13A9.789 9.789 0 0 1 13 22.813A9.789 9.789 0 0 1 3.187 13a9.808 9.808 0 0 1 3.75-7.719a1.5 1.5 0 0 0-1.093-2.687"
      ></path>
    </svg>
  )
}
