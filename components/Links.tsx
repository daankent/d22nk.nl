import {
  FaInstagram,
  FaArrowRight,
  FaLinkedin,
  FaLinkedinIn,
  FaGithub,
  FaBriefcase,
} from "react-icons/fa";
import NextLink from "next/link";

function Link({ title, icon, href, iconColor }: any) {
  return (
    <NextLink href={href}>
      <a>
        <div className="flex flex-row items-center bg-white p-2 border-gray-200 border-2 rounded-xl my-2 w-full hover:border-gray-400 hover:cursor-pointer">
          <div className={`p-2  align-middle ${iconColor}`}>{icon}</div>
          <h1 className="p-2 text-2xl   flex-1">{title} </h1>
          <div className="p-2">
            <FaArrowRight size={16} />
          </div>
        </div>
      </a>
    </NextLink>
  );
}

export default function Links() {
  return (
    <div className="flex flex-col w-full ">
      <Link
        title="Instagram"
        href="https://instagram.com/kentropdaan"
        icon={<FaInstagram size={32} />}
        iconColor="text-purple-600"
      />

      <Link
        title="LinkedIn"
        href="https://www.linkedin.com/in/daan-kentrop-0a76021aa/"
        icon={<FaLinkedinIn size={32} />}
        iconColor="text-sky-600"
      />

      <Link
        title="Github"
        href="https://github.com/d22nk"
        icon={<FaGithub size={32} />}
        iconColor="text-gray-600"
      />

      {/* <Link
        title="Bereal"
        href="https://bere.al/daankent"
        icon={<h1 className="text-2xl mx-[0.6rem]">B</h1>}
        iconColor="text-gray-600"
      /> */}
    </div>
  );
}
