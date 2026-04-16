import MyTaskList from "./ui/pages/MyTaskList"





function App() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
        ToDO APP - DB
      </h1>
      <div className="mt-8 w-full max-w-3xl">
        <MyTaskList />
      </div>
    </div>
  )
}

export default App
