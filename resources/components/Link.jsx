import PropTypes from 'prop-types'

import { usePageContext } from '/renderer/usePageContext'

export { Link }

Link.propTypes = {
  href: PropTypes.string.isRequired,
}

function Link(props) {
  // Ensure all links start with `/`, to support future changes of base URL
  if (!props.href.startsWith('/')) throw new Error('Link href should start with /')

  // Append base URL
  const cleanedHREF = normalize(import.meta.env.BASE_URL + props.href)

  // Add `is-active` to class name
  const urlPathname = usePageContext().urlPathname
  const className = [props.className, urlPathname === cleanedHREF && 'is-active'].filter(Boolean).join(' ')

  return <a {...props} href={cleanedHREF} className={className} />
}

function normalize(url) {
  return '/' + url.split('/').filter(Boolean).join('/')
}
