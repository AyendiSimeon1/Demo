import './header.css'

const Header = () => {

    return (
       <div>
       
         
           
    
        <nav className='navbar navbar-expand-lg'>
            <div className="container">
                <a href="#" className="navbar-brand">
                    <h1>Brand</h1>
                    </a>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle Navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
              
                <ul className="navbar-nav collapse navbar-collapse justify-content-end" id='navbarSupportedContent'>
                    <li className='nav-item'>
                        <button className='btn btn-primary'> <a href="#" className='nav-link'>Home</a></button>
                    </li>
                    <li className='nav-item'>
                        <a href="#" className='nav-link'>Dropdown</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#" className='nav-link'>Listings</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#" className='nav-link'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#" className='nav-link'>Bing</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#" className='nav-link'>Contact</a>
                    </li>
                </ul>
            </div>

        </nav>
       </div>
    )
}

export default Header;
