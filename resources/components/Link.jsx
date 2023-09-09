import PropTypes from 'prop-types'

import { usePageContext } from '/renderer/usePageContext'

export { Link }

Link.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
}

function Link(props) {
  if (!props.href.startsWith('/')) throw new Error('Link href should start with /')

  const cleanedHREF = normalize(import.meta.env.BASE_URL + props.href)
  const urlPathname = usePageContext().urlPathname

  const className = [props.className, urlPathname === cleanedHREF && 'is-active'].filter(Boolean).join(' ')

  return <a {...props} className={className} />
}

function normalize(url) {
  return '/' + url.split('/').filter(Boolean).join('/')
}
