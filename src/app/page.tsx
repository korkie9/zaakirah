"use client";

import { useRef } from 'react';
import { Heart } from 'react-feather';
import Image from "next/image";
import { motion } from 'framer-motion';
import Socials from '@/components/Socials';
import { Caveat, Puppies_Play } from 'next/font/google'
import Link from 'next/link';

const caveat = Caveat({ weight: "400", subsets: ["latin"] })
const puppiesPlay = Puppies_Play({ weight: "400", subsets: ["latin"] })

export default function Home() {
  const aboutSection = useRef(null);
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-r from-orange-200 to-black-600 p-4">
      <main className="flex flex-col items-center justify-center gap-4">
        <section className={` flex flex-col md:flex-row lg:flex-row items-center justify-center gap-4 mb-16`}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 justify-center h-full items-center">
            <h1 className={`${puppiesPlay.className} text-8xl text-center w-full `}>Zaakirah Ecksteen</h1>
            <p className={`${caveat.className} text-gray-700 text-center w-full text-2xl `}>Student x Cybergirlie x Arachnophobe</p>
            <div className="flex flex-row gap-2">
              <Heart />
              <Link href={"/blogs"}
                style={{ marginBottom: '20px' }}>
                <em className={`${caveat.className} text-xl hover:underline`}>
                  Blogs
                </em>
              </Link>
              <Heart />
              <Link href={"/experience"}
                style={{ marginBottom: '20px' }}>
                <em className={`${caveat.className} text-xl hover:underline`}>
                  Ed. & Exp.
                </em>
              </Link>
              <Heart />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            whileDrag={{ scale: 0.9, rotate: 10 }}
            drag
          >
            <Image
              src="/profile.jpg"
              width={400}
              height={400}
              alt="Picture of the author"
              className="rounded-md"
            />
          </motion.div>
        </section>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`${caveat.className} md:w-1/2 lg:w-1/2 gap-2 mb-4 w-full p-4`} ref={aboutSection}>

          <h3 className="text-gray-700 text-4xl flex items-center justify-center ">About</h3>
          <p className={` text-2xl`}>
            I am an enthusiastic individual with a passion for reading. My goal for each day is to live each moment in the now.
            I am currently working toward my qualification in cybersecurity. As a self starter, I give this, among all other pursuits
            in my life my fullest effort
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
