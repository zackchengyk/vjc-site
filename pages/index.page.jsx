import { HeroSection } from '/resources/components/sections/HeroSection'
import { PrefaceSection } from '/resources/components/sections/PrefaceSection'
import { DocumentarySection } from '/resources/components/sections/DocumentarySection'
import { MapSection } from '/resources/components/sections/MapSection'
import { TeamSection } from '/resources/components/sections/TeamSection'

export { Page }
export { documentProps }

const documentProps = { title: 'The School That Watched Us Grow' }

function Page() {
  return (
    <>
      <HeroSection />
      <PrefaceSection />
      <DocumentarySection />
      <MapSection />
      <TeamSection />
    </>
  )
}
