type SeaMapProps = {
    imgSrc: string;
    description: string;
    className: string;
};
function SeaMap({ imgSrc, description, className = '' }: SeaMapProps) {
    return (
        <div className={`py-[75px] ${className} relative`}>
            <span
                style={{
                    backgroundImage: 'linear-gradient(#fff 50%, rgba(255,255,255,0) 0%)',
                    backgroundPosition: 'right',
                    backgroundSize: '1px 25px',
                    backgroundRepeat: 'repeat-y',
                }}
                className='absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full z-10 hidden md:block'
            >
                <span className='absolute w-4 h-4 rounded-full bg-white block -left-[5px] top-1/2 -translate-y-1/2'></span>
            </span>
            <div className='container grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[220px] place-items-center'>
                <div className='max-w-[200px] md:max-w-[240px] md:ml-auto'>
                    <img src={imgSrc} alt='' />
                </div>
                <div className='flex flex-col justify-center md:w-[70%] text-center md:text-left mr-auto'>
                    <p className='text-white font-semibold text-xl'>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default SeaMap;
