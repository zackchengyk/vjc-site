import { Counter } from '/resources/old-shit/Counter'
import { DioramaWrapper } from '/resources/components/DioramaWrapper'
import { Classroom } from '/resources/components/dioramas/Classroom'

export { Page }
export { documentProps }

const documentProps = { title: 'Video' }

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
        <DioramaWrapper>
          <Classroom />
        </DioramaWrapper>

        <DioramaWrapper>
          <Classroom />
        </DioramaWrapper>

        <DioramaWrapper>
          <Classroom />
        </DioramaWrapper>
      </div>
    </>
  )
}
