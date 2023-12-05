import './App.css'
import './Buttons/NoBorderBtn.tsx'
import NoBorderBtn from './Buttons/NoBorderBtn.tsx'
import BorderBtn from './Buttons/BorderBtn.tsx'

function App() {

  return (
    <>
      <div className="relative">
        <div className='bg-gray-blue-400 w-full h-20 absolute'></div>
        <div className='w-full h-20 flex items-center justify-between p-5 md:p-10 z-100 relative'>
          <div className='flex-grow text-gray-blue-900 text-2xl md:text-4xl font-bold'>Jacob Moore</div>
          <div className="hidden md:block">
            <NoBorderBtn link='#about' text='About' />
            <NoBorderBtn link='#projects' text='Projects' />
            <NoBorderBtn link='#contact' text='Contact' />
            <BorderBtn link='#resume' text='Resume' />
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default App
