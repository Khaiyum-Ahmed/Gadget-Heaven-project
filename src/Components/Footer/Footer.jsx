
const Footer = () => {
    return (
        <div className="my-24">
            <div className="text-center pb-8 border-b border-[rgba(9,8,15,.1)]">
                <h3 className="text-3xl font-bold text-[#09080F] mb-3">Gadget Heaven</h3>
                <p className="text-base font-medium text-[rgba(9,8,15,.6)]">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <footer className=" max-w-7xl mx-auto footer place-items-center sm:justify-center md:justify-between sm:footer-horizontal  text-base-content p-10">

                <nav>
                    <h6 className="footer-title opacity-100 text-xl font-bold text-[#09080F]">Services</h6>
                    <a className="link link-hover text-[rgba(9,8,15,.6)]">Product Support</a>
                    <a className="link link-hover text-[rgba(9,8,15,.6)]">Order Tracking</a>
                    <a className="link link-hover text-[rgba(9,8,15,.6)]">Shipping & Delivery</a>
                    <a className="link link-hover text-[rgba(9,8,15,.6)]">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title opacity-100 text-xl font-bold text-[#09080F]">Company</h6>
                    <a className="link link-hover text-[rgba(9,8,15,.6)]">About us</a>
                    <a className="link link-hover text-[rgba(9,8,15,.6)]">Careers</a>
                    <a className="link link-hover text-[rgba(9,8,15,.6)]">Contact</a>
                    <a className="link link-hover text-[rgba(9,8,15,.6)]">Support</a>
                </nav>
                <nav>
                    <h6 className="footer-title opacity-100 text-xl font-bold text-[#09080F]">Legal</h6>
                    <a className="link link-hover text-[rgba(9,8,15,.6)]">Terms of Service</a>
                    <a className="link link-hover text-[rgba(9,8,15,.6)]">Privacy Policy</a>
                    <a className="link link-hover text-[rgba(9,8,15,.6)]">Cookie Policy</a>
                    <a className="link link-hover text-[rgba(9,8,15,.6)]">FAQ</a>
                </nav>

            </footer>
        </div>
    );
};

export default Footer;