

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

//Zustand
import { useStore } from '@/store';

//components
import Menu from '@/components/Menu';
import Quiz from '@/components/Quiz';
import Finshed from '@/components/Finshed';


export default function Home() {
  const { gamestate } = useStore()
  return (
    <div
      className={`flex min-h-screen flex-col items-center  p-24 ${inter.className}`}
    >
      <h1>Quiz App</h1>

      {gamestate === "menu" && <Menu />}
      {gamestate === "playing" && <Quiz />}
      {gamestate === "finshed" && <Finshed />}

    </div>
  )
}
