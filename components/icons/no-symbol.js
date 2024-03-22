import { twMerge } from 'tailwind-merge'

export default function NoSymbol(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? '1em'}
      height={props.size ?? '1em'}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={props.color ?? 'currentColor'}
      className={twMerge('', props.className)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
      />
    </svg>
  )
}
