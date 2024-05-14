import Link from 'next/link'
import { useRouter } from 'next/router'
import { Children, cloneElement } from 'react'
export default function ActiveLink({ children, activeClassName, href, as, onClick }) {
  const { asPath } = useRouter()
  const child = Children.only(children)
  let className = child.props.className || null
  if (asPath === href || asPath === as) {
    className = `${activeClassName} ${className || ''} `
  }
  return (
    <Link href={href} passHref>
      {cloneElement(child, { className })}
    </Link>
  )
}
