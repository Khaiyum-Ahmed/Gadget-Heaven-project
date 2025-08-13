
import bgimg from '../../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div className="bg-[#9538E2] rounded-4xl pt-12 relative">
            <div className="hero pb-60">
                <div className="hero-content text-center">
                    <div className="lg:max-w-6xl md:max-w-2xl">
                        <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="py-6 text-white text-base">
                           Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="btn text-[#9538E2] py-4 px-8 rounded-4xl bg-[#fff]">Shop Now</button>
                    </div>
                </div>
            </div>
            <div className='lg:max-w-6xl md:max-w-2xl border-[24px] border-[rgba(255,255,255,.3)] rounded-4xl absolute top-2/3 lg:left-1/6 md:left-1/8 '>
                <img className='rounded-xl' src={bgimg} alt="background image" />
            </div>
        </div>
    );
};

export default Banner;

// 