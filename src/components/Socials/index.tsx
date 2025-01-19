import { Linkedin } from "react-feather";
import Link from 'next/link'

const Socials: React.FC = () => {

  return (
    <div className="flex flex-row gap-8">
      <Link href="https://www.linkedin.com/in/zaakirah-ecksteen-01b1ba326/">
        <Linkedin />
      </Link>
      {/* <Link href=""> */}
      {/*   <Twitter /> */}
      {/* </Link> */}
    </div>
  );
};

export default Socials;
