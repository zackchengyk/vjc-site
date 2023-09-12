import { StoryWrapper } from '../resources/components/StoryWrapper'

export { Page }
export { documentProps }

const documentProps = { title: 'Stories' }

function Page() {
  return (
    <>
      <header>
        <h1>Stories</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
      </header>
      <section id="stories-section">
        <StoryWrapper
          facing="wall-left"
          images={[
            '/images/stories/test1/test1a.JPG',
            '/images/stories/test1/test1b.JPG',
            '/images/stories/test1/test1c.JPG',
            '/images/stories/test1/test1d.JPG',
          ]}
        />
        <StoryWrapper
          facing="wall-right"
          images={[
            '/images/stories/test1/test1a.JPG',
            '/images/stories/test1/test1b.JPG',
            '/images/stories/test1/test1c.JPG',
            '/images/stories/test1/test1d.JPG',
          ]}
        />
        <StoryWrapper
          facing="floor-left"
          images={[
            '/images/stories/test1/test1a.JPG',
            '/images/stories/test1/test1b.JPG',
            '/images/stories/test1/test1c.JPG',
            '/images/stories/test1/test1d.JPG',
          ]}
        />
        <StoryWrapper
          facing="floor-right"
          images={[
            '/images/stories/test1/test1a.JPG',
            '/images/stories/test1/test1b.JPG',
            '/images/stories/test1/test1c.JPG',
            '/images/stories/test1/test1d.JPG',
          ]}
        />
      </section>
    </>
  )
}
