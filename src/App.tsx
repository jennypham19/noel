import Routers from './routes';
import { AudioProvider } from "@/context/AudioProvider";

function App() {

  return (
    <AudioProvider>
      <Routers/>
    </AudioProvider>
  )
}

export default App
