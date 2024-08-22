import Navbar from './components/navbar/navbar'
import Header from './components/header/header'
import Album from './components/album/album'

const App = () => {
  return (
    <div className='h-screen text-white'>
      <Navbar />
      <Header />
      <Album />
    </div>
  )
}

export default App