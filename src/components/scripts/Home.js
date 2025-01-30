import '../styles/home.css'

export default function Home() {
    return (
        <div className="home-container" id='home'>
            <div className="home-left">
                <span className='ratings'><span>★</span> Google Ratings <img src="/dataset/home/home-4.png" alt="starimg" /></span>
                <span className='left-heading'>Your trusted Parter <br /> for compilience Business needs </span >
                <hr />
                <span className='left-para'> An online business compliance platform that helps entrepreneurs and other individuals with various, <strong>registrations</strong>, <strong>tax filings</strong>, and other <strong>legal matters</strong>.</span>
                <img src="/dataset/home/home-5.png" alt="cf" />
                <div className="left-bottom">
                    <button className='navbarBtn'>Talk An Expert</button>
                    <span><button className='fa fa-play'></button> See how it works</span>
                </div>
            </div>
            <div className="home-right">
                <div className="right-btns">
                    <button>Annual Compilience</button>
                    <button>Payroll Services</button>
                    <button>Company Formation</button>
                    <button>Annual Compilience</button>
                </div>
            </div>
        </div>
    );
}