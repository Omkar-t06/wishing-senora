import ImageSection from "./components/ImageSection"
import MessageSection from "./components/MessageSection"
import Sound from "./components/Sound"
import Welcome from "./components/Welcome"

function App() {
  return (
    <div>
      <Sound/>
      <Welcome/>
      <ImageSection/>
      <MessageSection/>
    </div>
  )
}

export default App
