import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
        <div className="container">
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
                <li className="nav-item"><Link to="/about" className="nav-link px-2 text-body-secondary">About Us</Link></li>
                <li className="nav-item"><Link to="/all-items" className="nav-link px-2 text-body-secondary">All Items</Link></li>
                <li className="nav-item"><Link to="/add-new-item" className="nav-link px-2 text-body-secondary">Add Item</Link></li>
                <li className="nav-item"><Link to="update-item" className="nav-link px-2 text-body-secondary">Update Item</Link></li>
                <li className="nav-item"><Link to="/delete-item" className="nav-link px-2 text-body-secondary">Delete Item</Link></li>
                <li className="nav-item"><Link to="/contact-us" className="nav-link px-2 text-body-secondary">Contact Us</Link></li>
            </ul>
            <p className="text-center text-body-secondary">© 2024 Pizzeria | Made by Nithiya Manoharan</p>
        </footer>
        </div>
        </>
    )
}

export default Footer;
