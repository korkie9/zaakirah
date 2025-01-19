import Link from 'next/link';
import { parseMdString } from "@/util/parse-md-to-heading"
import { useEffect, useState } from 'react';
import { Book } from 'react-feather';
import { Caveat } from 'next/font/google';
import { motion } from 'framer-motion';

const caveat = Caveat({ weight: "400", subsets: ["latin"] })

const Blogs: React.FC = () => {
  const [blogPaths, setBlogPaths] = useState<string[]>([])

  useEffect(() => {
    const getBlogNames = async () => {
      const res = await fetch(`/api/getBlogNames`)
      const _blogPaths = await res.json();
      setBlogPaths(_blogPaths)
    }
    getBlogNames()
  }, []);
  return (
    <div className="text-center mt-8 flex flex-col  ">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={`text-4xl font-bold mb-4 text-gray-200 ${caveat.className}`}>Blogs</h2>
      </motion.div>
      <ul className='flex flex-col text-xl p-5 gap-4 text-gray-500'>
        {blogPaths.map((path, index) => {
          const parsedMd = parseMdString(path);
          return (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: (index + 1) * 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              key={path}
            >
              <li className="w-full">
                <div className=" shadow-md w-full md:w-1/4 lg:w-1/4 p-2">
                  <Link href={`blog/${path}`} className={"text-left "} >
                    <p className="text-3xl flex flex-row items-center gap-2"><Book />{parsedMd.heading ?? ""}</p>
                    <p className="text-sm"><em>{parsedMd.date ?? ""}</em></p>

                  </Link>
                </div>
              </li>
            </motion.div>
          )
        })}
      </ul>
    </div>
  );
};

export default Blogs;
