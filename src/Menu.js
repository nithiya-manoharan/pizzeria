import { Link } from "react-router-dom";

function Menu(){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ fontSize: '18px' }}>
            <div className="container-fluid">
                <h1 className="navbar-brand" style={{ fontSize: '23px' , marginBottom: '-2px'}}>  
                <img src="https://t3.ftcdn.net/jpg/01/12/01/56/240_F_112015664_z8VATjVfpJtSFoqpJZZeXrLl8eXumAic.jpg" alt="Pizza" width="50" height="50" style={{ borderRadius: '5px'}}/> Pizzeria</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/all-items">All items</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/contact-us">Contact Us</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link active dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">More</Link>
                            <ul className="dropdown-menu"  style={{ fontSize: '17px' }}>
                                <li><Link className="dropdown-item" to="/add-new-item">Add item</Link></li>
                                <li><Link className="dropdown-item" to="/update-item">Update item</Link></li>
                                <li><Link className="dropdown-item" to="/delete-item">Delete item</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        <b>Slice by slice, we conquer the world!</b>
                    </span>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Menu;
