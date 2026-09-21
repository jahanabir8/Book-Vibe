import Image from "next/image";
import React from "react";
import Banner from '@/public/hero_img.jpg'

const BannerPage = () => {
  return (
    <section className="hero bg-base-200 min-h-screen mb-25">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* <img
          alt="Tailwind CSS hero component"
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        /> */}
        <Image src={Banner} alt="banner"></Image>
        <div>
          <h1 className="text-5xl font-bold leading-16 mb-12">Books to freshen up your bookshelf</h1>
          
          <button className="btn bg-[#23BE0A] text-white">View The List</button>
        </div>
      </div>
    </section>
  );
};

export default BannerPage;
