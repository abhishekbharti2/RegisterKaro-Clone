import '../styles/Navbar.css'
export default function Navbar() {
    return (
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
                <div className="navitems">
                    <a href="#home" className="navlink">Home</a>
                    <a href="#services" className="navlink">Our Services</a>
                    <a href="#blogs" className="navlink">Blog</a>
                    <a href="/" className="navlink">Contact Us</a>
                    <a href="/" className="navlink">Aboout Us</a>
                    <a href='/' className="fa fa-search navlink"> </a>
                    <button className='navbarBtn'>Talk and Expert</button>
                </div>
            </div>
        </nav>
    );
}