import { Form } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import './supplier.css';

function CreatePost () {
    const navigate = useNavigate();
    const [post, setPost] = useState ({
        name: "",
        product: "",
        contact: "",
        email: "",
        status: "",
        date: "",
        quantity: "",
        price: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setPost((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const handleClick = (event) => {
        event.preventDefault();

        axios.post("/api/Sup/add", post)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

        navigate("sups");
        
    };

    return (
        <div className="product-create">

        <div className="Create-post">
            <h1 className="title">Add New Suppliers</h1><br />
            <Form className="Form">
                <Form.Group className="Form-Group">
                    <Form.Control className="Form-Control" 
                        name="name" 
                        value={post.name}
                        placeholder="Name"
                        onChange={handleChange}
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                    
                    <Form.Control className="Form-Control" 
                        name="product" 
                        value={post.product}
                        placeholder="Product"
                        onChange={handleChange}
                        style={{width:"80%", marginLeft:"10%"}}
                        required />

                    <Form.Control className="Form-Control"
                        name="contact" 
                        value={post.contact}
                        placeholder="Contact"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                    <Form.Control className="Form-Control"
                        name="email" 
                        value={post.email}
                        placeholder="Email"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                    <Form.Control className="Form-Control"
                        name="status" 
                        value={post.status}
                        placeholder="Status"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                    <Form.Control className="Form-Control"
                        name="date" 
                        value={post.date}
                        placeholder="Date"
                        onChange={handleChange} 
                        type="date"
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                    <Form.Control className="Form-Control"
                        name="quantity" 
                        value={post.quantity}
                        placeholder="Quantity"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                    <Form.Control className="Form-Control"
                        name="price" 
                        value={post.price}
                        placeholder="Price"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                </Form.Group>
                <br />
                < button style={{borderRadius:"5px", background:"#A7D5E5", padding:"1.5%", width:"45%", fontSize:"17px", 
                paddingLeft:"5px", paddingRight:"5px", border:"#b30059"}} onClick={handleClick}>Add Suppliers</button>
            </Form>
            <br />
            {/* <br />
            <button style={{borderRadius:"5px", background:"#a66f72", padding:"0.5%"}} onClick={() => navigate(-1)}> BACK </button>   */}
        </div>
        </div>
    );
}

export default CreatePost;