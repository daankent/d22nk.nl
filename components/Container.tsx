import Head from "next/head";
import { useRouter } from "next/router";
import NextLink from "next/link";
import cn from "classnames";

import Footer from "../components/Footer";
function NavLink({ href, text }: any) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? "font-semibold text-gray-800 "
            : "font-normal text-gray-600 ",
          "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 transition-all"
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}
export default function Container(props: any) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Daan Kentrop",
    description: ``,
    image: "https://d22nk.nl/static/images/profile.JPEG",
    type: "website",
    ...customMeta,
  };
  return (
    <div className="bg-gray-50">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://d22nk.nl${router.asPath}`} />
        <link rel="canonical" href={`https://d22nk.nl${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Daan Kentrop" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <div className="flex flex-col justify-center px-8">
        <nav className="flex items-center justify-between w-full max-w-[1000px] mx-auto relative border-gray-200 pt-4 pb- sm:pb-8 text-gray-900 bg-gray-50 ">
          <div className="ml-[-0.60rem]">
            <div className="visible md:hidden">
              <NavLink href="/" text="Home" />
            </div>
            <NextLink href="/">Home</NextLink>
            {/* <NavLink href="/wmdw" text="wmdw" /> */}
          </div>
        </nav>
      </div>
      <main id="skip" className="flex flex-col  px-8 bg-gray- min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
}
