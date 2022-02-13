function HeroSection() {
    return (
        <>
            {/* Blue Text Start */}
            <div className='container'>
                <h1 className='font-rixel relative w-fit mx-auto text-primary-50 text-[85px] leading-[85px] sm:text-[120px] sm:leading-[120px] md:text-[300px] md:leading-[300px] text-center'>
                    BLUES
                    {/* Donation Start */}
                    <div className='absolute -rotate-[8deg] -right-4 -bottom-[45px] sm:-bottom-[60px] md:-bottom-[110px] w-14 sm:w-20 md:w-40'>
                        <img className='w-full h-auto' src='/vector/DonationIcon.svg' alt='' />
                    </div>
                    {/* Donation End */}
                </h1>
            </div>
            {/* Blue Text End */}
        </>
    );
}

export default HeroSection;
