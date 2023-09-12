import { Classroom } from '/resources/components/dioramas/Classroom'
import { DioramaWrapper } from '/resources/components/DioramaWrapper'

export { Page }
export { documentProps }

const documentProps = { title: 'Spaces' }

function Page() {
  return (
    <>
      <h1>Spaces</h1>
      <p>Todo</p>
      <DioramaWrapper>
        <Classroom />
      </DioramaWrapper>
    </>
  )
}
