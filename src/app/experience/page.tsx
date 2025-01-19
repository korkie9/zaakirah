"use client";

import { motion } from 'framer-motion';
import Socials from '@/components/Socials';
import { Caveat, Puppies_Play } from 'next/font/google'

const caveat = Caveat({ weight: "400", subsets: ["latin"] })
const puppies = Puppies_Play({ weight: "400", subsets: ["latin"] })

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-r from-orange-200 to-black-600 p-4">
      <main className="flex flex-col items-center justify-center gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`${caveat.className} md:w-1/2 lg:w-1/2 gap-2 mb-4 w-full p-4`} >

          <h3 className={` ${puppies.className} text-gray-700 text-4xl flex items-center justify-center`}>Huru</h3>
          <p className={` text-2xl`}>
            I worked at Huru for a brief period. My time there has taught me many lessons such teamwork, communication and professionalism.
            As a prospective cybersecurity professional, I intend to leverage the skills I have learnt at this post for the bettership
            of my career.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`${caveat.className} md:w-1/2 lg:w-1/2 gap-2 mb-4 w-full p-4`} >

          <h3 className={` ${puppies.className} text-gray-700 text-4xl flex items-center justify-center`}>Cyber X (Mido Academy)</h3>
          <p className={` text-2xl`}>
            Since mid 2024, I have been enrolled at Cyber X (formally Mido Academy). During this time I have obtained an ITF+ certificaion.
            I intend to further my studies and work toward an A+ and Security+ certificate.
          </p>
        </motion.div>
      </main>
      <footer className="">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className='mt-8'>
            <Socials />
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
