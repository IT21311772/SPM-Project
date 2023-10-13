import React, { useRef} from "react";
import { useReactToPrint } from "react-to-print";
import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from "react-bootstrap";
//import Logo from '../../images/logo.jpg';
//import Logo from '../../images/logo.jpg';

const SuppliersPdf = () =>{

    const [products, setPosts] = useState([]);

    useEffect(() => {
        axios.get("/api/Sup/sups")
            .then((res) => {
                console.log(res)
                setPosts(res.data);
            })
            .catch((err) => console.log(err));
}, []);

const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Available Suppliers',
        onAfterPrint: ()=> alert('Print success')
    });

    return (
        <>
            <div className="product-report">
            <div ref={componentRef} >
           <h3 style={{fontWeight:"bold", textAlign:"center", backgroundColor:"#373B61", padding:"3%", marginTop:"-1%", color:"#EDEFFE"}}>Supplier Report</h3>
                <br />
            
          
            <br /><br /><br /><br />
                <br />
                <Table className="w-75 mx-auto" bordered>
                    <thead>
                        <th>Name</th>
                        <th>Product</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Quantity</th>
                        <th>price</th>
                        
                    </thead>
                    <tbody>
                    {products ? (
                        <>
                            {products.map((post) => {
                                return (
                                        <tr key={post._id} >
                                            <td>{post.name}</td>
                                            <td>{post.products}</td>
                                            <td>{post.contact}</td>
                                            <td>{post.email}</td>
                                            <td>{post.status}</td>
                                            <td>{post.date}</td>
                                            <td>{post.quantity}</td>
                                            <td>Rs. {post.price}.00</td>
                                        </tr>
                                        );
                            })}
                        </>
                    ) : (
                     ""
                    )}
                    </tbody>
                </Table>
            </div>
            <br />
            <center>
                <button className="btn btn-secondary" style={{ borderRadius:"5px", width:"20%",backgroundColor:"#373B61"}} onClick={handlePrint}>Download</button>
            </center>
            <br /><br /><br />
            </div>
        </>
    );
}

export default SuppliersPdf;