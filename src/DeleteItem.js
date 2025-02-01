import { useState, useEffect } from "react";
import axios from 'axios';

function DeleteItem() {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetchPizzas();
    }, []);

    const fetchPizzas = () => {
        axios.get('https://pizzeria-db.onrender.com/pizzas')
            .then(response => {
                setPizzas(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the pizza data', error);
            });
    };

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this pizza item?");
        if (confirmDelete) {
            axios.delete(`https://pizzeria-db.onrender.com/pizzas/${id}`)
                .then(response => {
                    fetchPizzas();
                })
                .catch(error => {
                    console.error('There was an error deleting the pizza data', error);
                });
        }
    };

    return (
        <div className="container mt-4">
            <div className="row">
                {pizzas.map(pizza => (
                    <div className="col-md-4" key={pizza.id} style={{ marginTop: '10px' }}>
                        <div className="card h-100">
                            <img src={pizza.image} height={300} alt={pizza.name} className="card-img-top" />
                            <div className="card-body">
                                <h4 className="card-title">{pizza.name}</h4>
                                <p className="card-text"><b>Size:</b> {pizza.size} inches</p>
                                <p className="card-text"><b>Crust type:</b> {pizza.crust}</p>
                                <p className="card-text"><b>Toppings:</b> {pizza.toppings}</p>
                                <p className="card-text"><b>Cooking style:</b> {pizza.cooking}</p>
                                <p className="card-text"><b>Price:</b> ₹{pizza.price}</p>
                                <p className="card-text"><b>Description:</b> {pizza.description}</p>
                                <button className="btn btn-danger me-2" onClick={() => handleDelete(pizza.id)}>DELETE</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DeleteItem;