
import { useState } from 'react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

//Zustand
import { useStore } from '@/store';

//components
import Menu from '@/components/Menu';
import Quiz from '@/components/Quiz';
import Finshed from '@/components/Finshed';



// const EditPerson = () => {

//   const firstName = useStore((state) => state.firstName);
//   const lastName = useStore((state) => state.lastName);
//   const setFirstName = useStore((state) => state.setFirstName);
//   const setLastName = useStore((state) => state.setLastName);
//   return (
//     <div>
//       <div>
//         First Name:
//         <input
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//       </div>
//       <div>
//         Last Name:
//         <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
//       </div>
//     </div>
//   );
// };



export default function Home() {
  const { gamestate, firstName, setFirstName } = useStore()
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
