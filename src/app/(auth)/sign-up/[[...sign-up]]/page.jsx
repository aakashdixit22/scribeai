import { Meteors } from '@/components/ui/meteors'
import { SignUp } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="relative bg-black flex min-h-screen w-full items-center justify-center overflow-hidden">
      <Meteors number={100} />
            
      <div className="flex z-50 flex-col items-center">
        <div className="flex items-center gap-2 mb-6">
          <Image 
            src="/logo.png"
            alt="Scribe AI Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <h1 className="text-3xl z-50 font-bold text-white">
            Scribe AI
          </h1>
        </div>
        <SignUp />
      </div>
      
    </div>
  )
}