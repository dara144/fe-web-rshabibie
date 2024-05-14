import Link from 'next/link'
import { useRouter } from 'next/router'
import { Children, cloneElement } from 'react'
export default function ActiveClass({ children, activeClassName, href }) {
  const { asPath } = useRouter()
  const child = Children.only(children)
  let className = child.props.className || null
  if (asPath.startsWith(href)) {
    className = `${activeClassName} ${className || ''} `
  }
  return cloneElement(child, { className })
}
