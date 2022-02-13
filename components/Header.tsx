import Link from 'next/link';
import { BsTwitter } from 'react-icons/bs';
import { SiDiscord } from 'react-icons/si';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
function Header({ theme }: { theme?: 'dark' }) {
    const isDarkHeader = theme === 'dark';

    const [showSidebar, setShowSidebar] = useState(false);

    const closeSidebar = (e: any) => e?.target?.id === 'mobile_sidebar' && setShowSidebar(false);
    const closeSidebarForcely = () => setShowSidebar(false);
    useEffect(() => {
        document.body.style.overflow = showSidebar ? 'hidden' : 'auto';
    }, [showSidebar]);

    return (
        <header className={`${isDarkHeader ? 'bg-primary-900' : 'bg-white'}`}>
            <div className='container relative py-4 md:py-6 flex justify-between items-center '>
                {/* Logo Start */}
                <div>
                    <Link href='/'>
                        <a className='text-primary-50 font-rixel text-3xl'>BLUES</a>
                    </Link>
                </div>
                {/* Logo End */}
                {/* Nav Start */}
                <div
                    onClick={closeSidebar}
                    id='mobile_sidebar'
                    className={`fixed pointer-events-none top-0 left-0 w-full h-screen bg-black/50 z-50 md:static md:w-auto md:h-auto md:bg-transparent opacity-0 duration-200 ${
                        showSidebar ? 'opacity-100 pointer-events-auto' : ''
                    } md:opacity-100 md:pointer-events-auto`}
                >
                    <ul
                        className={`gap-10 font-quick-sand font-bold text-primary-50 bg-primary-900 pt-5 md:pt-0 w-[80%] md:w-auto md:flex h-full md:h-auto md:bg-transparent -translate-x-full duration-200 ${
                            showSidebar ? 'translate-x-0' : ''
                        } md:translate-x-0`}
                    >
                        <li>
                            <a
                                onClick={closeSidebarForcely}
                                href='#about_section'
                                className='hover:text-primary-300 duration-100 px-6 py-2.5 block md:p-1'
                            >
                                ABOUT
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={closeSidebarForcely}
                                href='#seamap_section'
                                className='hover:text-primary-300 duration-100 px-6 py-2.5 block md:p-1'
                            >
                                SEAMAP
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={closeSidebarForcely}
                                href='#team_section'
                                className='hover:text-primary-300 duration-100 px-6 py-2.5 block md:p-1'
                            >
                                TEAM
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Nav End */}

                {/* Social Start */}
                <div className='text-primary-50 flex items-center gap-6 md:gap-8'>
                    <Link href='#'>
                        <a className='hover:text-primary-300 hover:scale-110 duration-100'>
                            <SiDiscord size={25} />
                        </a>
                    </Link>
                    <Link href='#'>
                        <a className='hover:text-primary-300 hover:scale-110 duration-100'>
                            <BsTwitter size={25} />
                        </a>
                    </Link>
                    {/* Hamburger Icon --Start-- */}
                    <div
                        className='hover:text-primary-300 hover:scale-110 duration-100 md:hidden'
                        onClick={() => setShowSidebar((prev) => !prev)}
                    >
                        <GiHamburgerMenu size={25} />
                    </div>
                    {/* Hamburger Icon --End-- */}
                </div>
                {/* Social End */}
            </div>
        </header>
    );
}

export default Header;
