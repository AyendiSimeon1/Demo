import './demo.css'
import background1 from "../../assets/20231020_114648.jpg"
import background2 from "../../assets/20231023_213446.jpg"
import { BsFillArrowDownRightSquareFill } from 'react-icons/bs'
const demo = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <a href="#" className="navbar-brand">
                        <h1>LineBiz</h1>
                    </a>
                    <button className='navbar-toggler' type='button' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle Navigation' id='navbarSupportedContent' data-bs-target='#navbarSupportedContent'  data-bs-toggle='collapse'>
                        <span className='navbar-toggler-icon'></span>

                    </button>
                    <div className="collapse navbar-collapse justify-content-center">
                    <ul className="navbar-nav  " id='navbarSupportedContent'>
                        <li className="nav-item">
                            <a href="" className="nav-link">Platform</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">Events</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">About Us</a>
                        </li>
                    </ul>
                    </div>
                    <button className='btn btn-outline'>
                        Join
                    </button>
              
                </div>
            </nav>
            <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="hero-header">
                            <h1 className="hero-text">
                                New goals require new knowledge
                            </h1>
                            <br />
                            <br />
                            <br />
                            <br />
                            
                            <div className="col-md-6">
                            <p className="lead align-items-end">
                                We have created an in learning platform that allows teams to find, share and use the knowledge they need to achieve there goals.
                            </p>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <img src={background2} className='img2' />
                        </div>
                        <div className="col-sm-4">
                        { BsFillArrowDownRightSquareFill }
                        <p className="lead">An Icon</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="img-container" style={{
                            backgroundImage: 'url(${background1})'
                        }} >
                            <img src={background1} className='img' />

                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
        
    )
}

export default demo;