import './App.css'

function App() {

  return (
    <>
      <div className="relative">
        <div className='bg-gray-blue-400 w-full h-20 absolute'></div>
        <div className='w-full h-20 flex items-center justify-between p-10 z-100 relative'>
          <div className='text-gray-blue-900 text-4xl font-bold'>Jacob Moore</div>
          <div>
            <a className='ml-2 mr-2 border-2 border-gray-blue-400 transition-all duration-500 hover:pb-2 hover:border-b-gray-blue-700' href='#about'>About</a>
            <a className='ml-2 mr-2 border-2 border-gray-blue-400 transition-all duration-500 hover:pb-2 hover:border-b-gray-blue-700' href='#projects'>Projects</a>
            <a className='ml-2 mr-2 border-2 border-gray-blue-400 transition-all duration-500 hover:pb-2 hover:border-b-gray-blue-700' href='#contact'>Contact</a>
            <a className='ml-2 mr-2 p-2 rounded border-solid border-gray-blue-900 border-2 hover:bg-gray-blue-700 hover:text-gray-blue-100 transition-colors duration-500' href='#resume'>Resume</a>
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default App
