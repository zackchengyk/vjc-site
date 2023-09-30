import '/resources/scss/sections/documentary.scss'

export { DocumentarySection }

function DocumentarySection() {
  return (
    <section id="documentary" className="top-level-section">
      <section id="documentary-teaser">
        <video
          id="documentary-teaser-video"
          preload="metadata"
          muted
          playsInline
          loop
          autoPlay
          poster="assets/images/documentary-teaser-still.png">
          {/* todo: add code to lazy-load videos */}
          {/* todo: add webm */}
          <source src="assets/videos/documentary-teaser.mp4" type="video/mp4" />
        </video>

        <div id="documentary-teaser-overlay" />

        <div id="documentary-teaser-text">
          <h2>Title If There Is One</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam similique sunt facere beatae architecto!
            Corrupti earum expedita harum, voluptatibus porro debitis libero tempora nobis sint, ipsa pariatur minima
            consequuntur inventore.
          </p>
          <button>Watch The Full Documentary</button>
        </div>
      </section>

      <section id="documentary-artworks">
        <div></div>
      </section>
    </section>
  )
}
