import { useEffect, useState } from "react";
import axios from "axios";
import { Form, InputGroup } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function App() {
    const [data, setData] = useState([]);
    const [updatedPost, setUpdatedPost] = useState({});
    const [search, setSearch] =useState('');
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get("/api/Fin/docs")
            .then((res) => {
                console.log(res);
                setData(res.data)
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        let amount1 = 0;
        let amount2 = 0;
        if (data) {
            data.map((post) => {
                if (post.type == "Income") {
                    amount1 = amount1 + post.amount;
                }else{
                    amount2 = amount2 + post.amount;
                }
            })
            setIncome(amount1);
            setExpense(amount2);
        }
    }, [data]);

    const deleteData = (id) => {
        let text = "Do you want to delete ? ";
        if (window.confirm(text) == true) {
            axios
                .delete(`/api/Fin/delete/${id}`)
                .then((res) => console.log(res))
                .catch((err) => console.log(err));

                window.location.reload();
        }
    };

    const updatePost = (post) => {
        setUpdatedPost(post);
        handleShow();
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

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
    }

    return (
        <div className="finance">
            <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title style={{color:"#b30059"}}>Update Transactions</Modal.Title>
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
                            placeholder="Transaction"
                            name="transaction"
                            value={updatedPost.transaction ? updatedPost.transaction : ""}
                            onChange={handleChange}/>
                        <Form.Select
                            style={{width: "80%",
                            padding: "6px 10px",
                            margin: "10px 0",
                            border: "1px solid #c762a1",
                            borderRadius: "5px",
                            boxSizing: "border-box",
                            display: "block",
                            marginLeft: "10%"}}
                            placeholder="Type"
                            name="type"
                            value={updatedPost.type ? updatedPost.type : ""}
                            onChange={handleChange}>
                                <option>Transaction Type</option>
                                <option>Income</option>
                                <option>Expense</option>
                            </Form.Select>
                        <Form.Control 
                            style={{width: "80%",
                            padding: "6px 10px",
                            margin: "10px 0",
                            border: "1px solid #c762a1",
                            borderRadius: "5px",
                            boxSizing: "border-box",
                            display: "block",
                            marginLeft: "10%"}}
                            placeholder="Category"
                            name="amount"
                            value={updatedPost.amount ? updatedPost.amount : ""}
                            onChange={handleChange}>
                        </Form.Control>
                        <Form.Control 
                            style={{width: "80%",
                            padding: "6px 10px",
                            margin: "10px 0",
                            border: "1px solid #c762a1",
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
                            border: "1px solid #c762a1",
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
                <button style={{borderRadius:"5px", background:"#b30059", padding:"1.5%", width:"200px", fontSize:"17px", 
                    border:"#b30059", marginRight:"25%"}} onClick={saveUpdatedPost}>
                    Save Changes
                </button>
                <button style={{borderRadius:"5px", background:"#b30059", padding:"1.5%", width:"200px", fontSize:"17px", 
                border:"#b30059", marginRight:"25%"}} onClick={handleClose}>
                    Close
                </button>
                <br />
            </Modal.Footer>
        </Modal>

        {data ? (
            <div>
                <Form>
                    <InputGroup className="my-1" style={{width:"20%", marginLeft:"75%"}}>
                        <Form.Control 
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search Here"
                        />
                    </InputGroup>
                </Form>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button style={{borderRadius:"5px", background:"#b30059", padding:"0.5%"}}><Link to="/add" style={{color:"white", textDecoration:"none"}}>Add New Transaction</Link></button>&nbsp;&nbsp;&nbsp;&nbsp;
                <br /><br />
                <center>
                    <h1>Income & Expenses</h1>
                </center>

                <div className="container">
                <div className="income" style={{textAlign:"right"}}>
                        Income - LKR. 
                        <span>{income} </span>
                    </div>
                    <div className="income" style={{textAlign:"right"}}>
                        Expenses - LKR. 
                        <span>{expense} </span>
                    </div>
                    <div className="balance">
                        Balance - LKR. 
                        <span>{income - expense} </span>
                    </div>
                </div>
                <br />
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Transaction</th>
                                <th scope="col">Type</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Date</th>
                                <th scope="col">Reference</th>
                                <th></th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>

                            {data.filter((post) => {
                                return search.toLowerCase() === ''
                                ? post
                                :   post.transaction.toLowerCase().includes(search) ||
                                    post.type.toLowerCase().includes(search) ||
                                    post.amount.toLowerCase().includes(search) ||
                                    post.date.toLowerCase().includes(search) ||
                                    post.reference.toLowerCase().includes(search)
                            })
                            .map((post, index) => {
                                return (
                                    <tbody>
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>{post.transaction}</td>
                                            <td>{post.type}</td>
                                            <td>{post.amount}</td>
                                            <td>{post.date}</td>
                                            <td>{post.reference}</td>
                                            <td>
                                            <button 
                                                style={{width: "80%", marginLeft:'10px'}} 
                                                onClick={() => updatePost(post)}>UPDATE</button>
                                            </td>
                                            <td>
                                            <button 
                                                style={{width: "90%", marginLeft:'-20%', marginTop:""}} 
                                                onClick={() => deleteData(post._id)}>DELETE</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                );
                            })}
                    </table>
                </div>
            </div>
        ) : (
            ""
        )}

        </div>
    );
}

export default App;