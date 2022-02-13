function AboutSection() {
    return (
        <>
            {/* About Sectoin Start */}
            <section
                className=' bg-primary-50 mt-[150px] md:!mt-56 scroll-mt-44'
                id='about_section'
            >
                {/* Twitter Svg Start*/}
                <div className='container -translate-y-[90px] md:-translate-y-[190px]'>
                    <div className='w-[200px] md:w-[390px] mx-auto  '>
                        <img src='/vector/Tail.svg' alt='' />
                    </div>
                    {/* Twitter Svg End*/}
                    {/* Text */}
                    <p className='md:w-[40%] mx-auto text-center font-medium text-white text-base md:text-xl leading-[30px] mt-8'>
                        Bring bluechip projects into the hands of many, while teaching our holders
                        on how to search and find the next bluechip projects.
                    </p>
                    {/* Text */}

                    {/* Gif */}
                    <div className='w-full md:w-[500px] aspect-square mx-auto mt-12 md:mt-20'>
                        <img src='/gif/Gif_BlueChips.gif' alt='' />
                    </div>
                    {/* Gif */}
                </div>
            </section>
            {/* About Sectoin End */}
        </>
    );
}

export default AboutSection;
