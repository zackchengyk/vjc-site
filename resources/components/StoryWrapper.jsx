import PropTypes from 'prop-types'

import { appendBaseURL } from '/resources/utils'
import { Image } from '/resources/components/Image'

export { StoryWrapper }

const validFacings = ['floor-left', 'floor-right', 'wall-left', 'wall-right']

StoryWrapper.propTypes = {
  facing: PropTypes.oneOf(validFacings).isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

function StoryWrapper({ facing, images }) {
  return (
    <div className={`story-wrapper ${facing}`}>
      <div
        className="story-images scrolling"
        style={{
          '--max-translate': `-${(100 * images.length) / (images.length + 1)}%`,
          animationDuration: `${images.length * 3}s`,
        }}>
        {images.map((src) => (
          <div key={src} className="story-image-wrapper">
            <Image className="story-image" src={src} />
          </div>
        ))}
        <div className="story-image-wrapper" aria-hidden="true">
          <Image className="story-image" src={images[0]} />
        </div>
      </div>
    </div>
  )
}
