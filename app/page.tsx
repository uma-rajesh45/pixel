import Image from "next/image";
import HomePageHeader from "./components/HomePageHeader";
import Logo from "@/public/Logo.png";
import HomeSearch from "./components/HomeSearch";

const page = () => {
  return (
    <>
      <HomePageHeader />
      <div className="flex flex-col items-center mt-24 ">
        <Image
          src={Logo}
          alt="Pixel search engine Logo"
          width={300}
          height={100}
          priority
        />
        <HomeSearch />
      </div>
    </>
  );
};

export default page;
