import './App.css'
import { SideBar } from './components/sidebar';
import { Content } from './components/content';
function App() {
  return (
    <>
      <div className="flex">
        <SideBar/>
        <Content/>
      </div>
    </>
  )
}

export default App
