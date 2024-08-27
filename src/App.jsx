import ButtonGradient from "./assets/svg/ButtonGradient"
import Benefits from "./components/Benefits"
import Collabration from "./components/Collabration"
import Header from "./components/Header"
import Hero from "./components/Hero"


export const App = () => {
  return (
    <>
    <div className="pt-[4.75rem] lg:pt[5.25rem] overflow-hidden">
      <Header />
      <Hero />
      <Benefits />
      <Collabration />
    </div>
    <ButtonGradient />
    </>
  )
}
export default App