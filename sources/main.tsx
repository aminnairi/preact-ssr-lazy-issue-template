import { Router } from "preact-router"
import { lazy, Suspense } from "preact/compat"
import { Loading } from "./components/loading"

const HomePage = lazy(() => import("./pages/home"))

export const Main = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        {/* @ts-ignore */}
        <HomePage path="/" />
      </Router>
    </Suspense>
  )
}
