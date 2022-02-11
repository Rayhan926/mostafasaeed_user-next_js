import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <header className="container py-4 bg-white flex justify-between items-center">
        {/* Logo Start */}
        <div>
          <a className="text-primary-50 font-rixel text-2xl" href="#">
            BLUES
          </a>
        </div>
        {/* Logo End */}
        {/* Nav Start */}
        <ul className="flex gap-10 font-quick-sand font-bold text-primary-50">
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">SEAMAP</a>
          </li>
          <li>
            <a href="#">TEAM</a>
          </li>
        </ul>
        {/* Nav End */}

        {/* Social Start */}
        <div className="bg-red-600 py-6 px-10"></div>
        {/* Social End */}
      </header>

      <main>
        {/* Blue Text Start */}
        <div className="container">
          <h1 className="font-rixel relative w-fit mx-auto text-primary-50 text-[300px] leading-[300px] text-center">
            BLUES
            {/* Donation Start */}
            <div className="absolute -rotate-12 -right-4 -bottom-[110px] w-40">
              <img
                className="w-full h-auto"
                src="/vector/DonationIcon.svg"
                alt=""
              />
            </div>
            {/* Donation End */}
          </h1>
        </div>
        {/* Blue Text End */}

        {/* Gif Blue Chief Sectoin Start */}
        <section className=" bg-primary-50 !mt-56">
          {/* Twitter Svg Start*/}
          <div className="container -translate-y-[190px]">
            <div className="w-[390px] mx-auto  ">
              <img src="/vector/Tail.svg" alt="" />
            </div>
            {/* Twitter Svg End*/}
            {/* Text */}
            <p className="w-[40%] mx-auto text-center font-medium text-white text-xl leading-[30px] mt-8">
              Bring bluechip projects into the hands of many, while teaching our
              holders on how to search and find the next bluechip projects.
            </p>
            {/* Text */}

            {/* Gif */}
            <div className="w-[500px] aspect-square mx-auto mt-20">
              <img src="/gif/Gif_BlueChips.gif" alt="" />
            </div>
            {/* Gif */}
          </div>
        </section>
        {/* Gif Blue Chief Sectoin End */}

        {/* Team Section Start */}
        <section className="bg-primary-800 py-[70px]">
          <div className="container">
            <h2 className="section_title">Team</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-14">
              <div>
                <div className="flex flex-col items-center bg-red-600">
                  <h3 className="text-3xl font-rixel text-white">
                    MASTERWHALE
                  </h3>
                  <div className="w-[150px] aspect-square bg-primary-700  mt-2.5">
                    {/* <img src="" alt="" /> */}
                    team image
                  </div>
                  <div className="mt-2.5">
                    <p className="text-white text-center">zTTaira #0334Co</p>
                    <p className="text-white text-center">founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Team Section End */}
      </main>
    </>
  );
};
