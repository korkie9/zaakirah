import Link from 'next/link';
import { parseMdString } from "@/util/parse-md-to-heading"
import { useEffect, useState } from 'react';
import { Book } from 'react-feather';

const Blogs: React.FC = () => {
  const [blogPaths, setBlogPaths] = useState<string[]>(['editors', 'dsfsdf'])

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
      <h2 className="text-4xl font-bold mb-4 text-gray-200">Blogs</h2>
      <ul className='flex flex-col text-xl p-5 gap-4 text-gray-500'>
        {blogPaths.map((path) => {
          const parsedMd = parseMdString(path);
          return (
            <li key={path} className="w-full">
              <div className=" shadow-md w-full md:w-1/4 lg:w-1/4 p-2">
                <Link href={`blog/${path}`} className={"text-left "} >
                  <p className="text-3xl flex flex-row items-center gap-2"><Book />{parsedMd.heading ?? ""}</p>
                  <p className="text-sm"><em>{parsedMd.date ?? ""}</em></p>

                </Link>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Blogs;
