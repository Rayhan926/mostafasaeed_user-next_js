import { ReactNode } from 'react';

export type TeamProps = {
    name: ReactNode;
    rank: ReactNode;
    username: ReactNode;
    imgSrc: string;
    socials: {
        icon: ReactNode;
        link: string;
    }[];
};
function Team({ name, rank, username, socials, imgSrc }: TeamProps) {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <h3 className='text-3xl font-rixel text-white'>{name}</h3>
                <div className='w-[150px] aspect-square bg-primary-700 mt-3.5'>
                    <img src={imgSrc} alt='' />
                </div>
                <div className='mt-2.5'>
                    <p className='text-white text-center'>{username}</p>
                    <p className='text-white text-center'>{rank}</p>
                </div>
                <div className='flex items-center text-white justify-center mt-3'>
                    {socials.map((social, i) => (
                        <a href={social.link} key={i}>
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Team;
