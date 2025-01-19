'use client'

import Blogs from "@/components/Blogs";
import Link from "next/link";
import { ArrowLeftCircle } from "react-feather";

const BlogsComponent: React.FC = () => {

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-orange-200 to-black-600 p-4">
      <Link className='markdown ' style={{}} href={'/'}><ArrowLeftCircle style={{ fontSize: 20, color: "black" }} /></Link>
      <Blogs />
    </div>
  );
};

export default BlogsComponent;
