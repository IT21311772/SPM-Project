import { useEffect,useState } from "react";
import axios from "axios";
import {Form, InputGroup } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import './transactions.css';
import AdminNavBar from "./AdminNavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faPlus } from '@fortawesome/free-solid-svg-icons'; // Import the "plus" icon
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp91 } from '@fortawesome/free-solid-svg-icons';

function App() {
    // Use of useState
    const [data, setData] = useState([]);
    const [updatedPost, setUpdatedPost] = useState({})
    const [search, setSearch] = useState('');
    const [income, SetIncome] = useState(0);
    const [expenses, SetExpenses] = useState(0);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Use of useEffect
    useEffect(() => {
        axios.get("/api/Fin/trans")
            .then((res) => {
                console.log(res)
                setData(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => { 
        let amount1 = 0;
        let amount2 = 0;
        if(data){
            data.map((post) => {
                if(post.type == "Income"){
                    amount1 = amount1 + post.amount;
                }
                else{
                    amount2 = amount2 + post.amount;
                }
        })
        SetIncome(amount1);
        SetExpenses(amount2);
        }

    }, [data]);

    //delete validation
    const deletePost = (id) => {
        let text = "Do you want to delete";
        if (window.confirm(text) == true) {
            axios
            .delete(`/api/Fin/delete/${id}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
            
            window.location.reload();
        } 

    };

    // Update Function
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
    axios.put(`/api/Fin/update/${updatedPost._id}`, updatedPost)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

    handleClose();
    window.location.reload();
    };

    // Set the state as ascending order
    const [order, setOrder] = useState("ASC");

    // Bubble Sort Algorithm to sort the data
    const bubbleSort = (array, col) => {
    const arr = [...array];
    const n = arr.length;
    let swapped;
    
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
        if ((order === "ASC" && arr[i][col] > arr[i + 1][col]) || (order === "DESC" && arr[i][col] < arr[i + 1][col])) {
            const temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            swapped = true;
        }
        }
    } while (swapped);
    
    return arr;
    };

    // Quick Sort Algorithm to sort the date
    const quickSort = (array, col) => {
        if (array.length <= 1) {
            return array;
        }
    
        const pivot = array[Math.floor(Math.random() * array.length)];
        const left = [];
        const right = [];
        const equal = [];
    
        array.forEach((item) => {
        if ((order === "ASC" && item[col] < pivot[col]) || (order === "DESC" && item[col] > pivot[col])) {
            left.push(item);
        } else if (item[col] === pivot[col]) {
            equal.push(item);
        } else {
            right.push(item);
        }
        });
  
        const sortedLeft = quickSort(left, col);
        const sortedRight = quickSort(right, col);
    
        return [...sortedLeft, ...equal, ...sortedRight];
    };

    const quickSorting = (col) => {
        const sortedData = quickSort(data, col);
        setData(sortedData);
        setOrder(order === "ASC" ? "DESC" : "ASC");
    };

    const sorting = (col) => {
        const sortedData = bubbleSort(data, col);
        setData(sortedData);
        setOrder(order === "ASC" ? "DESC" : "ASC");
    };


return ( 
    <div className="finance">  
    <AdminNavBar /> 
      <br /><br />
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title style={{color:"#373B61", fontWeight:"bold", marginLeft:"21%"}}>Update Transactions</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{width:"100%", height:"200%"}}>
                <Form>
                    <Form.Group>
                        <Form.Control 
                            style={{width: "80%",
                                    padding: "6px 10px",
                                    margin: "10px 0",
                                    border: "1px solid #373B61",
                                    borderRadius: "5px",
                                    boxSizing: "border-box",
                                    display: "block",
                                    marginLeft: "10%"}}
                            placeholder="Amount"
                            name="amount"
                            value={updatedPost.amount ? updatedPost.amount : ""}
                            onChange={handleChange}/>
                        <Form.Select
                            style={{width: "80%",
                            padding: "6px 10px",
                            margin: "10px 0",
                            border: "1px solid #373B61",
                            borderRadius: "5px",
                            boxSizing: "border-box",
                            display: "block",
                            marginLeft: "10%"}}
                            placeholder="type"
                            name="type"
                            value={updatedPost.type ? updatedPost.type : ""}
                            onChange={handleChange}>
                                <option>Transaction Type</option>
                                <option>Income</option>
                                <option>Expense</option>
                            </Form.Select>
                        <Form.Select 
                            style={{width: "80%",
                            padding: "6px 10px",
                            margin: "10px 0",
                            border: "1px solid #373B61",
                            borderRadius: "5px",
                            boxSizing: "border-box",
                            display: "block",
                            marginLeft: "10%"}}
                            placeholder="Category"
                            name="category"
                            value={updatedPost.category ? updatedPost.category : ""}
                            onChange={handleChange}>
                            <option>Select Category</option>
                            <option>Salary</option>
                            <option>Shop Fees</option>
                            <option>Supplier charges</option>
                            <option>Bills</option>
                            <option>TAX</option>
                            <option>Services</option> 
                            </Form.Select>
                        <Form.Control 
                            style={{width: "80%",
                            padding: "6px 10px",
                            margin: "10px 0",
                            border: "1px solid #373B61",
                            borderRadius: "5px",
                            boxSizing: "border-box",
                            display: "block",
                            marginLeft: "10%"}}
                            placeholder="Date"
                            name="date"
                            value={updatedPost.date ? updatedPost.date : ""}
                            readOnly={true}
                            onChange={handleChange}/>
                        <Form.Control 
                            style={{width: "80%",
                            padding: "6px 10px",
                            margin: "10px 0",
                            border: "1px solid #373B61",
                            borderRadius: "5px",
                            boxSizing: "border-box",
                            display: "block",
                            marginLeft: "10%"}}
                            placeholder="Description"
                            name="description"
                            value={updatedPost.description ? updatedPost.description : ""}
                            onChange={handleChange}/>
                        <Form.Control 
                            style={{width: "80%",
                            padding: "6px 10px",
                            margin: "10px 0",
                            border: "1px solid #373B61",
                            borderRadius: "5px",
                            boxSizing: "border-box",
                            display: "block",
                            marginLeft: "10%"}}
                            placeholder="Reference"
                            name="reference"
                            value={updatedPost.reference ? updatedPost.reference : ""}
                            onChange={handleChange}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button style={{borderRadius:"5px", background:"#373B61", padding:"1.5%", width:"200px", fontSize:"17px", 
                    border:"#373B61", marginRight:"25%", color:"white"}} onClick={saveUpdatedPost}>
                        Save Changes
                </button>
                <button style={{borderRadius:"5px", background:"#373B61", padding:"1.5%", width:"200px", fontSize:"17px", 
                border:"#373B61", marginRight:"25%", color:"white"}} onClick={handleClose}>
                    Close
                </button>
                <br /> 
            </Modal.Footer>
        </Modal>
        {data ? (
            <div className="content">
            <Form>
                <InputGroup className="my-1" style={{ width: "20%", marginLeft: "75%", color: "#373B61", borderColor: "#373B61" }}>
                    <Form.Control
                        style={{ color: "#373B61", borderColor: "#373B61" }}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search here"
                    />
                </InputGroup>
            </Form>
            <br />
                <center>
                    <h1 style={{color:"#373B61", fontWeight:"bolder", fontSize:"50px"}}>O P A L Outlook Finance Management</h1>
                </center>

                <button
                    style={{
                        borderRadius: "5px",
                        background: "#373B61",
                        padding: "0.5%",
                        border: "#373B61",
                        display: "flex",
                        alignItems: "center", // Center icon and text vertically
                        width: "35px",
                        height: "35px",
                        marginLeft: "91.5%"
                    }}
                >
                    <Link to="/fin/add" style={{ color: "#EDEFFE", textDecoration: "none", display: "flex", alignItems: "center" }}>
                        <FontAwesomeIcon icon={faPlus} style={{marginLeft: "4px"}} />
                    </Link>
                </button>&nbsp; 

                <div className="newContainer">
                    <div className="balance" style={{marginLeft: "6%"}}>
                        <div className="data">
                            <div className="income">
                                Income &nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div className="expense">
                                Expenses &nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div className="profit">
                                Profit <br />
                            </div>
                        </div>
                        <hr className="line" />
                        <span style={{fontSize: "18px"}} className="in">{income}.00 </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <span style={{fontSize: "18px"}} className="ex">{expenses}.00 </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <span style={{fontSize: "18px"}} className="pr">{income - expenses}.00 </span><br />
                        <hr className="line" />
                    </div>
                    <br />
                    <div className="buttons">
                    <button
                        onClick={() => quickSorting('type')}>
                            TYPE &nbsp;&nbsp;
                        <FontAwesomeIcon icon={faSort} />
                    </button><br />
                    <button
                        onClick={()=>sorting('amount')}>
                            AMOUNT&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faArrowUp91} />
                    </button>&nbsp;
                    </div>
                </div>
                <br/>

            <div className="container">   
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Amount(LKR)</th>
                            <th scope="col" onClick={()=>sorting("type") }>Type</th>
                            <th scope="col">Category</th>
                            <th scope="col">Date</th>
                            <th scope="col">Description</th>
                            <th scope="col" onClick={()=>sorting("reference") }>Reference</th>
                            <th></th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead> 
                    {data.filter((post) => {
                        return search.toLowerCase() === ''
                            ? post
                            : post.category.toLowerCase().includes(search) ||
                              post.type.toLowerCase().includes(search) ||
                              post.date.toLowerCase().includes(search) ||
                              post.reference.toLowerCase().includes(search) ||
                              post.description.toLowerCase().includes(search)
                    })
                    .map((post,index) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{post.amount}.00</td>
                                    <td>{post.type}</td>
                                    <td>{post.category}</td>
                                    <td>{post.date}</td>
                                    <td>{post.description}</td>
                                    <td>{post.reference}</td>
                                    <td >
                                        <button  style={{width: "80%",
                                                    marginLeft:'10px'                   
                                        }} onClick={() => updatePost(post)}>UPDATE</button>   
                                    </td>
                                    <td>
                                        <button style={{width: "90%", marginLeft:'-20%', marginTop:""}} onClick={() => deletePost(post._id)}>DELETE</button>
                                    </td>
                                </tr>
                            </tbody>         
                        );
                    })}
                </table>
                <br /><br />
            </div>
        </div>
        ) : (
          ""
        )}  
  </div>
);
}


export default App;
