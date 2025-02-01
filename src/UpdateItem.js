import { useState,useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function UpdateItem(){
    const [pizzas , setPizzas]=useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        fetchPizzas();
    }, [])

    const fetchPizzas = () => {
        axios.get('https://pizzeria-db.onrender.com/pizzas')
            .then(response => {
                setPizzas(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the pizza data',error)
            })
    }

    return (
        <div className="container mt-4">
            <div className="row">
                {pizzas.map(pizzas => (
                    <div className="col-md-4" key={pizzas.id} style={{marginTop:'10px'}}>
                    <div className="card h-100">
                        <img src={pizzas.image} height={300}  className="card-img-top" />
                        <div className="card-body">
                        <h4 className="card-title">{pizzas.name}</h4>
                            <p className="card-text"><b>Size:</b> {pizzas.size} inches</p>
                            <p className="card-text"><b>Crust type:</b> {pizzas.crust}</p>
                            <p className="card-text"><b>Toppings:</b> {pizzas.toppings}</p>
                            <p className="card-text"><b>Cooking style:</b> {pizzas.cooking}</p>
                            <p className="card-text"><b>Price:</b> ₹{pizzas.price}</p>
                            <p className="card-text"><b>Description:</b> {pizzas.description}</p>
                        <button className="btn btn-warning" onClick={() => navigate(`/update-form/${pizzas.id}`)}>UPDATE</button>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UpdateItem;

