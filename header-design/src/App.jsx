import Background from "./components/Background";
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  let heroData = [
    { text1: "Gemlik Mavisi", text2: "TOGG T10X" },
    { text1: "Zarif ve Şık", text2: "" },
    { text1: "Büyük ve Geniş", text2: "" },
  ]


  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App