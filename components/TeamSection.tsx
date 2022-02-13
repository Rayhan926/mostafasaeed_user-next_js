import { BsTwitter } from 'react-icons/bs';
import Team, { TeamProps } from './Team';

const teams: TeamProps[] = [
    {
        name: 'MASTERWHALE',
        rank: 'Co-founder',
        username: 'Condz#9215',
        imgSrc: '/img/team/image 1.png',
        socials: [
            {
                link: '#',
                icon: BsTwitter,
            },
        ],
    },
    {
        name: 'DIPBLUES',
        rank: 'Co-founder',
        username: 'zTTaira#0334',
        imgSrc: '/img/team/image 7.png',
        socials: [
            {
                link: '#',
                icon: BsTwitter,
            },
        ],
    },
    {
        name: 'ARTBLUES',
        rank: 'Artist',
        username: 'Walaa#7780',
        imgSrc: '/img/team/image 3.png',
        socials: [
            {
                link: '#',
                icon: BsTwitter,
            },
        ],
    },
    {
        name: 'CODEBLUE',
        rank: 'Lead Developer',
        username: 'BountyHunt3r#7092',
        imgSrc: '/img/team/image 8.png',
        socials: [
            {
                link: '#',
                icon: BsTwitter,
            },
        ],
    },
    {
        name: 'LADYBLUES',
        rank: 'Lead Mod',
        username: 'Amandita#1640',
        imgSrc: '/img/team/image 5.png',
        socials: [
            {
                link: '#',
                icon: BsTwitter,
            },
        ],
    },
    {
        name: 'LADYBLUES',
        rank: 'Lead Mod',
        username: 'Amandita#1640',
        imgSrc: '/img/team/image 6.png',
        socials: [
            {
                link: '#',
                icon: BsTwitter,
            },
        ],
    },
];

function TeamSection() {
    return (
        <>
            {/* Team Section Start */}
            <section className='bg-primary-800 py-[70px]' id='team_section'>
                <div className='container'>
                    <h2 className='section_title'>Team</h2>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-5 md:gap-y-20 mt-14'>
                        {teams.map((team, i) => (
                            <Team {...team} key={i} />
                        ))}
                    </div>
                </div>
            </section>
            {/* Team Section End */}
        </>
    );
}

export default TeamSection;
