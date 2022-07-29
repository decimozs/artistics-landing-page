import {Navigations, Header, Artistic, Features, Waiting, Footer} from "../components"

export default function Home() {
  return (

    <div className="layout">
      <div className="wrapper">
        <Navigations />
        <Header />
      </div>
      <Artistic />
      <Features />
      <Waiting />
      <Footer />
    </div>

  )
}
