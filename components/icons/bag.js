export default function Bag(props) {
  return (
    <svg
      width={props.size ?? '1em'}
      height={props.size ?? '1em'}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      fill={props.color ?? 'currentColor'}
    >
      <g id="evaShoppingBagFill0">
        <g id="evaShoppingBagFill1">
          <path
            id="evaShoppingBagFill2"
            fill="currentColor"
            d="m20.12 6.71l-2.83-2.83A3 3 0 0 0 15.17 3H8.83a3 3 0 0 0-2.12.88L3.88 6.71A3 3 0 0 0 3 8.83V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.83a3 3 0 0 0-.88-2.12ZM12 16a4 4 0 0 1-4-4a1 1 0 0 1 2 0a2 2 0 0 0 4 0a1 1 0 0 1 2 0a4 4 0 0 1-4 4ZM6.41 7l1.71-1.71A1.05 1.05 0 0 1 8.83 5h6.34a1.05 1.05 0 0 1 .71.29L17.59 7Z"
          />
        </g>
      </g>
    </svg>
  )
}
