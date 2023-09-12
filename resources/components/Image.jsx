import PropTypes from 'prop-types'

import { appendBaseURL } from '/resources/utils'

export { Image }

Image.propTypes = {
  src: PropTypes.string.isRequired,
}

function Image(props) {
  return <img {...props} src={appendBaseURL(props.src)} />
}
