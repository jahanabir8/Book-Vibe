// import Image from "next/image";
// import Banner from "./Components/homepage/BannerPage";
import BannerPage from "./Components/homepage/BannerPage";
import Books from "./Components/homepage/Books";

export default function Home() {
  return (
    <>
      <BannerPage></BannerPage>
      <Books></Books>
    </>
  );
}
