import Container from "../components/Container";
import Link from "next/link";
import { FaHouseDamage } from "react-icons/fa";
export default function Page() {
  return (
    <Container title="404 - Daan Kentrop">
      <div className="flex flex-col justify-center  max-w-2xl border-gray-200  mx-auto pb-16 w-full ">
        <h1 className=" text-3xl md:text-5xl font-bold mb-6 ">
          404 - Pagina niet gevonden
        </h1>
        <p className="text-gray-500 font-semibold mb-4">
          De pagina waar je naar op zoek bent, kon niet worden gevonden.
        </p>
        <Link href="/">
          <a className=" flex flex-row justify-center  items-center  p-4 w-64 font-bold  border-gray-200 border-2 rounded-lg hover:bg-gray-200">
            Keer terug naar huis <FaHouseDamage className="mx-2" />
          </a>
        </Link>
      </div>
    </Container>
  );
}
