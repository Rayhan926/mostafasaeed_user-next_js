import SeaMap from './SeaMap';

function SeaMapSection() {
    return (
        <>
            {/* SeaMap Section --Start-- */}
            <section className='-mt-10' id='seamap_section'>
                <div className='bg-primary-100 py-14'>
                    <h3 className='section_title'>SEAMAP</h3>
                </div>

                <div>
                    <SeaMap
                        imgSrc='/img/Seamap_1_Welcome.png'
                        description='Our first 5000 unique whales will be born and start their swimming journey into the opensea.'
                        className='bg-[#3988C9]'
                    />
                    <SeaMap
                        imgSrc='/img/Seamap_2_Fishing.png'
                        description="With mint revenue, we'll acquire bluechip projects in a weekly basis. Starting with Neo Tokyo, CyberKongz and VeeFriends, we'll then acquire other amazing projects, such as Kaiju Kingz, Cools Cats and many others... Some generate passive income, other we'll flip for profit, and most we'll hold for long term earnings, which will be reverted into the community wallet for future purchases.
                            "
                        className='bg-primary-300'
                    />
                    <SeaMap
                        imgSrc='/img/Seamap_3_DAO.png'
                        description="After our first acquisitions, we'll setup a DAO wallet, for whales of the highest order to vote on which new projects (only possible bluechips) we should acquire."
                        className='bg-primary-400'
                    />
                    <SeaMap
                        imgSrc='/img/Seamap_4_Earnings.png'
                        description='Blues will have access to weekly and monthly giveaways, gatcha boxes and gamification to receive earnings and NFTs from bluechips projects from the Blues DAO wallet.
                            '
                        className='bg-primary-500'
                    />
                    <SeaMap
                        imgSrc='/img/Seamap_5_Collabs.png'
                        description='Collaboration with bluechips projects to enter the metaverse.                            '
                        className='bg-primary-600'
                    />
                    <SeaMap
                        imgSrc='/img/Seamap_6_Deep.png'
                        description='The ocean is full of life and deeper than we imagine. What else is hidden in the deep ocean...'
                        className='bg-primary-700'
                    />
                </div>
            </section>
            {/* SeaMap Section --End-- */}
        </>
    );
}

export default SeaMapSection;
