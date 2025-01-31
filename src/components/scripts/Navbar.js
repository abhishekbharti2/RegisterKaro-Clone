import '../styles/Navbar.css'
export default function Navbar() {
    return (
       <>
        <nav>
            <div className="uppernav">
                <div className="contacts">
                    <a href='/' className='fa fa-envelope'> <span>www.registerkaro.in</span></a>
                    <a href='/' className='fa fa-phone'> <span>+918447746183</span></a>
                    <a href='/' className='fa fa-instagram'> </a>
                    <a href='/' className='fa fa-facebook'> </a>
                    <a href='/' className='fa fa-twitter'> </a>
                    <a href='/' className='fa fa-pinterest'> </a>
                </div>
            </div>
            <div className="lowernav">
                <img src='/dataset/navbar/navbar-1.png' alt="logo" className='logo' />

                <input type="checkbox" id="sidebarCheck" hidden />
                <label htmlFor="sidebarCheck" id='sidebarBtn-1'>&#9776;</label>
                <label htmlFor="sidebarCheck" id='sidebarBtn-2'>&#10005;</label>
                <div className="navitems">
                    <a href="#home" className="navlink">Home</a>
                    <a href="#services" className="navlink">Our Services</a>
                    <a href="#blogs" className="navlink">Blog</a>
                    <a href="/" className="navlink">Contact Us</a>
                    <a href="/#about" className="navlink">About Us</a>
                    <span className="fa fa-search navlink"> </span>
                    <button className='navbarBtn'>Talk to an Expert</button>
                </div>

            </div>
        </nav>
        <div className="space"></div>
       </>
    );
}