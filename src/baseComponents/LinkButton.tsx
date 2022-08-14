import React from "react"
import { useNavigate } from "react-router-dom"
import Button from "./Button"

type Props = {
  to: string
  children?: React.ReactNode
  className?: string
}

export default function LinkButton({ to, children, className }: Props) {
  const navigate = useNavigate()
  return (
    <Button
      onClick={() => {
        navigate(to)
      }}
      className={className}
    >
      {children}
    </Button>
  )
}

LinkButton.defaultProps = {
  children: null,
  className: ""
}
