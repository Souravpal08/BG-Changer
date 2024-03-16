import { useState } from "react"

function App() {
  const [color, setColor] = useState("White")


  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>

      <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-slate-400 px-6 py-2 rounded-md ">

          <button onClick={() => setColor("red")} className="Outline-none px-6 py-1 text-white rounded-2xl "

            style={{ backgroundColor: "red" }}>Red</button>

          <button onClick={() => setColor("Olive")} className="Outline-none px-6 py-1 text-white rounded-2xl"
            style={{ backgroundColor: "olive" }}>Olive</button>

          <button onClick={() => setColor("Green")} className="Outline-none px-6 py-1 text-white rounded-2xl"
            style={{ backgroundColor: "Green" }}>Green</button>

          <button onClick={() => setColor("blue")} className="Outline-none px-6 py-1 text-white rounded-2xl"
            style={{ backgroundColor: "Blue" }}>Blue</button>

          <button onClick={() => setColor("Grey")} className="Outline-none px-6 py-1 text-white rounded-2xl"
            style={{ backgroundColor: "Grey" }}>Grey</button>

          <button onClick={() => setColor("Yellow")} className="Outline-none px-6 py-1 text-black rounded-2xl"
            style={{ backgroundColor: "Yellow" }}>Yellow</button>

          <button onClick={() => setColor("Black")} className="Outline-none px-6 py-1 text-white rounded-2xl"
            style={{ backgroundColor: "Black" }}>Black</button>

          <button onClick={() => setColor("purple")} className="Outline-none px-6 py-1 text-white rounded-2xl"
            style={{ backgroundColor: "Purple" }}>Purple</button>
        </div>
      </div>
    </>
  )
}

export default App
