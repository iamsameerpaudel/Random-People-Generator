"use client"
import NavBar from "./components/NavBar";
import RandomPeople from "./components/RandomPeople";

export default function Home() {
  return (
    <div className="bg-[#f6f4f0] min-h-screen h-auto " >
      <div className="h-[10%]" >
        <NavBar />
      </div>
      <div className="h-[90%]" >
        <RandomPeople />
      </div>
    </div>
  )
}
