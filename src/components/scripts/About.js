import '../styles/about.css'
import data from './data.json'

export default function abouts() {
    return (
        <div className="about-container" id='about'>
            <div className="upper-about">
                <div className="about-left">
                    <span> WELCOME TO REGISTERKARO.IN </span>
                    <h1 className='about-left-title'>About <span>Register Karo</span></h1>
                    <p className='about-left-para'>We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I'm extremely pleased with
                        their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about
                        customer satisfaction.
                        <br />
                        He has built a solid team which has consistently delivered on projects thereby exceeding everyone's expectations.
                        I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.
                        <br /><br />
                        <button className='navbarBtn bgblue' >Learn More &#8677;</button>
                    </p>
                </div>
                <div className="about-right">
                    <img src="/dataset/abouts/about-1.png" alt="aboutright" />
                </div>
            </div>
            <div className="lower-about">
                <div className="about-left">
                    <span> WHY REGISTERKARO.IN </span>
                    <h2 className='about-left-title'>Why Choose Register Karo</h2>
                    <p className='about-left-para'>
                        It is with consistent service and results that builds trust with the people and that in turn help us to serve the business better.
                    </p>
                </div>
                <div className="about-right lower-blr">

                    {
                        data.features.map((item) => (
                            <div key={item.image} style={{ backgroundColor: item.color }} className='cb-card'>
                                <img src={item.image} alt="" />
                                <h3>{item.title}</h3>
                                <span>{item.description}</span>
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className="lowest-about">
                <div className="lowest-left">
                    <h1>Our Video Introductions</h1>
                    <p>Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.</p>

                    <h2><img src="/dataset/abouts/about-2.png" alt=" " /> Explore ideas together</h2>
                    <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>

                    <h2><img src="/dataset/abouts/about-3.png" alt=" " /> Bring those ideas to life</h2>
                    <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                </div>
                <div className="lowest-right">
                    <iframe src="https://www.youtube.com/embed/Vkn4lec-sy0?si=HOqAiR-FyuLOo1WP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}