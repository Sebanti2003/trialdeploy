
import './App.css'
import { Button } from './components/ui/button'
function App() {
  const alertfunction=()=>{
    alert(" Hello This Is Me Sebanti Dasgupta")
  }

  return (
    <>
     <div className=' text-xl font-bold text-blue-500'>Food Cosmosis</div>
     <Button onClick={alertfunction} className='bg-red-500 text-white p-5 m-5'>Hi</Button>
    </>
  )
}

export default App
