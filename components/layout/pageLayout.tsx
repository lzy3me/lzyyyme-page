import { ReactNode } from "react"
import Footer from "./footer.layout"

interface Props {
  children?: ReactNode
}

export default function PageLayout({ children, ...props }: Props) {
  return (
    <div className="cursor-default">
      {children}
      <Footer />
    </div>
  )
};