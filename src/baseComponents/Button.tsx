import React from "react"

type Props = {
  // border: string;
  // color: string;
  children?: React.ReactNode
  // height: string;
  onClick: () => void
  // radius: string
  // width: string;
  className?: string
}

export default function Button({ children, className, onClick }: Props) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`rounded-full py-2 px-4 font-semibold bg-primary text-white ${className}`}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  children: null,
  className: ""
}
