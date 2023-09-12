import PropTypes from 'prop-types'

import { appendBaseURL } from '/resources/utils'
import { usePageContext } from '/renderer/usePageContext'

export { Link }

Link.propTypes = {
  href: PropTypes.string.isRequired,
}

function Link(props) {
  // Append base URL
  const cleanedHREF = appendBaseURL(props.href)

  // Add `is-active` to class name
  const urlPathname = usePageContext().urlPathname
  const className = [props.className, urlPathname === cleanedHREF && 'is-active'].filter(Boolean).join(' ')

  return <a {...props} href={cleanedHREF} className={className} />
}
