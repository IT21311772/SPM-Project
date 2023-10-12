import { useEffect,useState } from "react";
import axios from "axios";
import {Form, InputGroup } from "react-bootstrap";
// import {useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import './order.css';

function App() {
    // const navigate = useNavigate();


// const navigate = useNavigate();
const [posts, setPosts] = useState([]);
const [updatedPost, setUpdatedPost] = useState({})
const [search, setSearch] = useState('');

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

useEffect(() => {
    axios.get("/api/Ord/ords")
        .then((res) => {
            console.log(res)
            setPosts(res.data);
        })
        .catch((err) => console.log(err));
}, []);

const deletePost = (id) => {
    axios
    .delete(`/api/Ord/delete/${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    
    window.location.reload();
    };

const updatePost = (post) => {
        setUpdatedPost(post);
        handleShow();
}
        
const handleChange = (e) => {
    const { name, value} = e.target;
    
    setUpdatedPost((prev) => {
        return {
            ...prev,
            [name]: value,
        };
    });
    };

 const saveUpdatedPost = () => {
        axios.put(`/api/Ord/update/${updatedPost._id}`, updatedPost)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));


        handleClose();
        window.location.reload();
        };


    //Sorting function
const [order, setOrder] = useState("ASC");
const sorting = (col) =>{
  if(order ==="ASC"){
    const sorted = [...posts].sort((a,b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);

        setPosts(sorted);
        setOrder("DESC");
  }
  if(order ==="DESC"){
    const sorted = [...posts].sort((a,b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);

        setPosts(sorted);
        setOrder("ASC");
    }
  };


  return (
    <div className="packages">
    <div>
        {/* style={{width:"90%", margin: "auto auto", textAlign: "center"}} */}
        
      <br /><br />
        {/* <button onClick={() => navigate(-1)}>BACK</button> */}
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title style={{color:"#b30059"}}>Update Order</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{width:"100%", height:"200%"}}>
                <Form>
                    <Form.Group>
                        <Form.Control 
                            style={{width: "80%",
                                    padding: "6px 10px",
                                    margin: "10px 0",
                                    border: "1px solid #c762a1",
                                    borderRadius: "5px",
                                    boxSizing: "border-box",
                                    display: "block",
                                    marginLeft: "10%"}}
                            placeholder="name"
                            name="name"
                            value={updatedPost.name ? updatedPost.name : ""}
                            onChange={handleChange}/>
                        <Form.Control 
                            style={{width: "80%",
                                    padding: "6px 10px",
                                    margin: "10px 0",
                                    border: "1px solid #c762a1",
                                    borderRadius: "5px",
                                    boxSizing: "border-box",
                                    display: "block",
                                    marginLeft: "10%"}}
                            placeholder="product"
                            name="product"
                            value={updatedPost.product ? updatedPost.product : ""}
                            onChange={handleChange}/>
                        <Form.Control 
                            style={{width: "80%",
                            padding: "6px 10px",
                            margin: "10px 0",
                            border: "1px solid #c762a1",
                            borderRadius: "5px",
                            boxSizing: "border-box",
                            display: "block",
                            marginLeft: "10%"}}
                            placeholder="date"
                            name="date"
                            value={updatedPost.date ? updatedPost.date : ""}
                            onChange={handleChange}/>
                        <Form.Control 
                            style={{width: "80%",
                            padding: "6px 10px",
                            margin: "10px 0",
                            border: "1px solid #c762a1",
                            borderRadius: "5px",
                            boxSizing: "border-box",
                            display: "block",
                            marginLeft: "10%"}}
                            placeholder="quantity"
                            name="quantity"
                            value={updatedPost.quantity ? updatedPost.quantity : ""}
                            onChange={handleChange}/>  
                        <Form.Control 
                            style={{width: "80%",
                            padding: "6px 10px",
                            margin: "10px 0",
                            border: "1px solid #c762a1",
                            borderRadius: "5px",
                            boxSizing: "border-box",
                            display: "block",
                            marginLeft: "10%"}}
                            placeholder="Total price"
                            name="tprice"
                            value={updatedPost.tprice ? updatedPost.tprice : ""}
                            onChange={handleChange}/>
                        <Form.Control 
                            style={{width: "80%",
                            padding: "6px 10px",
                            margin: "10px 0",
                            border: "1px solid #c762a1",
                            borderRadius: "5px",
                            boxSizing: "border-box",
                            display: "block",
                            marginLeft: "10%"}}
                            placeholder="status"
                            name="status"
                            value={updatedPost.status ? updatedPost.status : ""}
                            onChange={handleChange}/>
                        
                        
                        
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button style={{borderRadius:"5px", background:"#b30059", padding:"1.5%", width:"200px", fontSize:"17px", 
                border:"#b30059", marginRight:"25%"}} onClick={handleClose}>
                    Close
                </button>
                <br />
                <button style={{borderRadius:"5px", background:"#b30059", padding:"1.5%", width:"200px", fontSize:"17px", 
                border:"#b30059", marginRight:"25%"}} onClick={saveUpdatedPost}>
                    Save Changes
                </button>
            </Modal.Footer>
        </Modal>

        {posts ? (
            
            <>
            
            <Form>
                <InputGroup className="my-1" style={{width:"20%", marginLeft:"75%"}}>
                    <Form.Control 
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search here"/>
                </InputGroup>
            </Form>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button style={{borderRadius:"5px", background:"#b30059", padding:"0.5%"}}><Link to="/sup/ords/ords/addorder" style={{color:"white", textDecoration:"none"}}>Add New Order</Link></button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button style={{borderRadius:"5px", background:"#b30059", padding:"0.5%"}}><Link to="/sup/report" style={{color:"white", textDecoration:"none"}}>Download Order List</Link></button>
            
                <br /><br />
                <center>
                    <h1 style={{color:"#660033", fontWeight:"bolder", fontSize:"50px"}}>Order Details</h1>++
                </center>

                <div className="container">
                <button onClick={() => sorting("status")}>Sort by Type</button>&nbsp;
                <button onClick={() => sorting("price")}>Sort by Price</button>
                </div>
                <br />
                    
                        {posts.filter((post) => {
                            return search.toLowerCase() === ''
                                ? post
                                : post.name.toLowerCase().includes(search) ||
                                  post.type.toLowerCase().includes(search) ||
                                  post.product.toLowerCase().includes(search)
                        })
                        .map((post) => {
                    return (

                            <div key={post._id} className = "package-preview" >
                                <center>
                                    <h2>{post.name}</h2>
                                    <p>{post.product}</p>
                                    <p>{post.date}</p>
                                    <p>{post.quantityl}</p>
                                    <p>{post.tprice}</p>
                                    <p>{post.status}</p>
                                    
                                        <button onClick={() => updatePost(post)}>UPDATE</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <button style={{color:"white", background:"#3d3c3c", border:"black"}} onClick={() => deletePost(post._id)}>DELETE</button><br />
                                    
                                </center>
                            </div>   
                    );
                })}
            </>
        ) : (
          ""
        )}
    </div>
    </div>
);

}

export default App;