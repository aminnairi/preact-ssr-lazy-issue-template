import { render } from "preact-render-to-string"
import { Main } from "./main"

const main = async () => {
  const rendered = render(
    <Main />
  )

  console.log(rendered)
}

main().catch(error => {
  console.error("An error occurred, see below")
  console.error(error)
  console.error(`Error is a promise? ${error instanceof Promise}`)
})
