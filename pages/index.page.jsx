import { Counter } from '/resources/old-shit/Counter'

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
    </>
  )
}
