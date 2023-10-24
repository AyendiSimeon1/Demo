import img from '../../assets/img.jpg';

const Hero = () => {

    return (
        <div>
            <div className="hero">
            <h2>Search and Book Flights and Hotels</h2>
            <div className="container-fluid">
                <div className='hero-block'>
                        <a href='#'>Book Flights</a>
                        <a href='#'>Find Hotels</a>
                        <a href='#'>Visa</a>
                    
                <div className="hero-tabs flex">
                    
                    <ul className='dropdown show'>
                        <button className='btn btn-primary dropdown-toogle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Economy</button>
                        <div className="dropdown-menu" aria-labelledby='dropdownMenuButton'>
                        <li className='dropdown-item'>Book Flights</li>
                        <li className='dropdown-item'>Find Hotels</li>
                        <li className='dropdown-item'>Visa</li>
                        </div>
                        
                    </ul>

                    <ul className='dropdown show'>
                        <button className='btn btn-secondary dropdown-toogle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                        Round Trip
                            </button>
                        <div className="dropdown-menu" aria-labelledby='dropdownMenuButton'>
                        <li className='dropdown-item'>One Way</li>
                        
                        </div>
                        
                    </ul>

                    <ul className='dropdown show'>
                        <button className='btn btn-secondary dropdown-toogle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                        1 Passenger
                            </button>
                        <div className="dropdown-menu" aria-labelledby='dropdownMenuButton'>
                        <li className='dropdown-item'>Multiple Passenger</li>
                       
                        </div>
                        
                    </ul>
                    
                   
                    
                    
                    </div>
                    </div>
                </div>
                <div className='searchbar'>
                        <input className="hero-input" placeholder="City or Airport"></input>
                        <input className="hero-input" placeholder="City or Airport"></input>
                        <button className="hero-btn">Let's Go</button>
                        <p>My dates are flexible </p>
                        <p>Best value guaranteed</p>
                    </div>

            </div>
            <div className="container flex">
                <div className="card-section ">
                    <h3>Africa's No.1</h3>
                    <p>Wakanow is Africa's leading travel company</p>
                </div>
                <div className="card-section">
                    <h3>Pay Small Small</h3>
                    <p>Lock down great travel deals and pay in convenient installments</p>
                </div>
                <div className="card-section">
                    <h3>We are here for you</h3>
                    <p>Reach us 24/7 Monday-Sunday</p>
                </div>
            </div>
        </div>
        
    )
}

export default Hero;