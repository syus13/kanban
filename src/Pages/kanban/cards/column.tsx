import { ReactNode } from "react"
import { Title } from "./styledCards"

type PropsColumn = {
  title: string
  children?: ReactNode
}

export default function Column ({ title, children }: PropsColumn) {
  return (
    <div className="column">
      <Title>{title}</Title>

      {children}
    </div>
  ) 
}
