import React, { useRef} from "react";
import { useReactToPrint } from "react-to-print";
import { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from "react-bootstrap";


const ProductsPdf = () =>{

    const [products, setPosts] = useState([]);

    useEffect(() => {
        axios.get("/api/Product/products")
            .then((res) => {
                console.log(res)
                setPosts(res.data);
            })
            .catch((err) => console.log(err));
}, []);

const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'salon-packages',
        onAfterPrint: ()=> alert('Print success')
    });

    return (
        <>
            <div className="product-report">
            <div ref={componentRef} >
           <h3 style={{fontWeight:"bold", textAlign:"center", backgroundColor:"#373B61", padding:"3%", marginTop:"-1%", color:"#EDEFFE"}}>Finance Report</h3>
                <br />
                
                
           
            <br /><br /><br /><br />
               
                <br />
                <Table className="w-75 mx-auto" bordered>
                    <thead>
                        <th>Product Name</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Remaining Quantity</th>
                        <th>Used Quantity</th>
                        <th>Total Price</th>
                        
                    </thead>
                    <tbody>
                    {products ? (
                        <>
                            {products.map((post) => {
                                return (
                                        <tr key={post._id} >
                                            <td>{post.name}</td>
                                            <td>{post.type}</td>
                                            <td>{post.category}</td>
                                            <td>{post.date}</td>
                                            <td>{post.rquantity}</td>
                                            <td>{post.uquantity}</td>
                                            <td>Rs. {post.totalPrice}.00</td>
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

export default ProductsPdf;