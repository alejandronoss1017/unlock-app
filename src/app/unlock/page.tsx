'use client'

import { LockOpen, XIcon, LockKeyhole } from 'lucide-react'
import { K2D } from 'next/font/google'
import { useState } from 'react'

const k2d = K2D({
  subsets: ['latin'],
  weight: ['400'], // Puedes ajustar los pesos que necesites
})


export default function UnlockPage() {

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-4 transition-colors ${
        isUnlocked ? 'bg-[#16423C]' : ''
      } ${error ? 'bg-red-800' : ''}`}
    >
      <h1 className={`text-4xl sm:text-6xl  font-semibold ${isUnlocked || error ? 'text-white' : 'text-[#16423C]'}  mb-14 ${k2d.className}`}>UNLOCK</h1>
      <LockKeyhole className={`w-16 h-16 ${isUnlocked || error ? 'hidden' : 'visible'} text-[#16423C] mb-10`} />
      <LockOpen className={`w-16 h-16 ${isUnlocked ? 'visible': 'hidden'} text-white mb-10`} />
      <XIcon className={`w-16 h-16 ${error ? 'visible': 'hidden'} text-white mb-10`} />
      <p className={`text-[#16423C] ${isUnlocked || error ? 'hidden' : 'visible'}`}>¡Bienvenido usuari@!</p>
      <p className={`text-white ${isUnlocked ? 'visible' : 'hidden'}`}>Ya tienes acceso</p>
      <p className={`text-white ${error ? 'visible' : 'hidden'}`}>Acceso denegado</p>
      <button
        className="w-full max-w-xs bg-[#6A9C89] text-white py-3 mt-3 rounded-full text-lg font-medium hover:bg-[#55796B] transition-colors"
        onClick={() => {
          setIsUnlocked(!isUnlocked)
          setError(false)
        }}
      >
        Abrir
      </button>
      <button
        className="w-full max-w-xs bg-[#6A9C89] text-white py-3 mt-3 rounded-full text-lg font-medium hover:bg-[#55796B] transition-colors"
        onClick={() => {
          setError(!error)
          setIsUnlocked(false)
        }}
      >
        Error
      </button>
    </div>
  )
}