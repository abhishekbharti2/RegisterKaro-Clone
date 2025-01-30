import '../styles/Services.css'
import data from './data.json'

export default function Services() {

    return (
        <div className="service-container" id="services">
            <div className="partners">
                <h2>Trusted By Over 100+ Startups and freelance business</h2>
                <div className="partner-images">
                    <img src="/dataset/companies/logo-1.png" className="partImage" alt='companylogo' />
                    <img src="/dataset/companies/logo-2.png" className="partImage" alt='companylogo' />
                    <img src="/dataset/companies/logo-3.png" className="partImage" alt='companylogo' />
                    <img src="/dataset/companies/logo-4.png" className="partImage" alt='companylogo' />
                    <img src="/dataset/companies/logo-5.png" className="partImage" alt='companylogo' />
                </div>
            </div>
            <div className="service-list">
                <p>WELCOME TO REGISTERKARO.IN</p>
                <h1>Explore Our Services</h1>
                <div className="all-service-cards">
                    {
                        data.services.map((item) => (
                            <div className="card-individual" key={item.image}>
                                <img src={item.image} alt="logos" />
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <span>Learn more &#8677;</span>
                            </div>
                        ))
                    }
                </div>
                <button className='navbarBtn bgblue'>See All Services</button>
            </div>
        </div>
    )
}