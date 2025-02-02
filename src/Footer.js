import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
        <div className="container">
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><Link to="/pizzeria" className="nav-link px-2 text-body-secondary">Home</Link></li>
                <li className="nav-item"><Link to="/pizzeria/about" className="nav-link px-2 text-body-secondary">About Us</Link></li>
                <li className="nav-item"><Link to="/pizzeria/all-items" className="nav-link px-2 text-body-secondary">All Items</Link></li>
                <li className="nav-item"><Link to="/pizzeria/add-new-item" className="nav-link px-2 text-body-secondary">Add Item</Link></li>
                <li className="nav-item"><Link to="/pizzeria/update-item" className="nav-link px-2 text-body-secondary">Update Item</Link></li>
                <li className="nav-item"><Link to="/pizzeria/delete-item" className="nav-link px-2 text-body-secondary">Delete Item</Link></li>
                <li className="nav-item"><Link to="/pizzeria/contact-us" className="nav-link px-2 text-body-secondary">Contact Us</Link></li>
            </ul>
            <p className="text-center text-body-secondary">© 2024 Pizzeria | Made by Nithiya Manoharan</p>
        </footer>
        </div>
        </>
    )
}

export default Footer;
