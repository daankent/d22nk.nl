import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import Container from "../components/Container";
import Links from "../components/Links";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Daan Kentrop</title>
        <meta name="description" content="Daan Kentrop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className="flex flex-col justify-center items-center max-w-2xl border-gray-200  mx-auto pb-16 w-full ">
          <div className="w-[60px] sm:w-[132px] relative mb-8  ">
            <Image
              alt="Daan Kentrop"
              height={176}
              width={176}
              src="/images/profile.JPEG"
              sizes="30vw"
              priority
              className="rounded-full filter grayscale"
            />
          </div>

          <div className="flex flex-col items-center justify-center  w-full md:w-[55%]">
            <h1 className="font-bold text-2xl md:text-5xl mb-1 text-black ">
              Daan Kentrop
            </h1>
            <h2 className="text-gray-700 text-lg">Ja ik ken rop</h2>
            {/* //TODO: Iets goed verzinnen */}

            <Links />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
