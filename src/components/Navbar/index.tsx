import Link from 'next/link';

const Navbar: React.FC = () => {

  return (
    <nav className="justify-center items-center">
      <ul className='flex flex-row w-full h-full justify-center items-center gap-8 '>
        <Link href="/about">About</Link>
        <Link href="/blogs">Blogs</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
