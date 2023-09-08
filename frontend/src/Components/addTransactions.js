import {Form} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import './addTransaction.css';

function AddTransaction() {

    const navigate = useNavigate();
    const [post, setPost] = useState({
        transaction:"",
        type:"",
        amount:"",
        date:"",
        reference:"",
    });

    useEffect(() => {
        getDate();
    }, []);

    const [date, setDate] = useState("");

    const [transactionError, setTransactionError] = useState("");
    const [typeError, setTypeError] = useState("");
    const [amountError, setAmountError] = useState("");
    const [dateError, setDateError] = useState("");
    const [referenceError, setReferenceError] = useState("");

    const validateForm = () => {
        let valid = true;

        const transaction = document.getElementById('transaction');
        if(post.transaction === '') {
            transaction.setCustomValidity('Please enter a transaction');
            setTransactionError("Please enter a transaction");
            valid = false;
        } else {
            transaction.setCustomValidity('');
            setTransactionError("");
        }

        const type = document.getElementById('type');
        if(post.type === '') {
            type.setCustomValidity("Please select a type");
            setTypeError("Please select a type");
            valid = false;
        } else {
            type.setCustomValidity('');
            setTypeError("");
        }

        const amount = document.getElementById('amount');
        if(post.amount === '') {
            amount.setCustomValidity("Please enter an amount");
            setAmountError("Please enter an amount");
            valid = false;
        }else if(isNaN(post.amount)){
            amount.setCustomValidity("Please enter a valid amount");
            setAmountError("Please enter a valid amount");
            valid = false;
        } else {
            amount.setCustomValidity('');
            setAmountError("");
        }

        const date = document.getElementById('date');
        if(post.date === '') {
            date.setCustomValidity("Please select a date");
            setDateError("Please select a date");
            valid = false;
        } else {
            date.setCustomValidity('');
            setDateError("");
        }

        const reference = document.getElementById('reference');
        if(post.reference === '') {
            reference.setCustomValidity("Please enter a reference");
            setReferenceError("Please enter a reference");
            valid = false;
        } else {
            reference.setCustomValidity('');
            setReferenceError("");
        }
        return valid;
        
    }

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
        if (validateForm()) {
            axios.post("/api/Fin/add", post)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));

            navigate("transactions");
        }
        
    };

    const getDate = () => {
        const date = new Date();
        let currentDay = String(date.getDate()).padStart(2, '0');
        let currentMonth = String(date.getMonth()+1).padStart(2, "0");
        let currentYear = date.getFullYear();
        let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
        setDate(currentDate);
        setPost({
            transaction:"",
            type:"",
            amount:"",
            date:currentDate,
            reference:"",
        })
    }

    return(
        <div>
            <div className="addTransaction">
                <h1 className="title">Add New Transaction</h1>
                <Form className='form'>
                    <Form.Group className='form-group'>
                        <Form.Control className='form-control'
                            id="transaction"
                            name="transaction"
                            value={post.transaction}
                            placeholder='Enter the Transaction'
                            onChange={handleChange}
                            required
                        />
                        { transactionError && <div className="error" style={{marginLeft:"10%"}}>{transactionError}</div> }

                        <Form.Select className='form-control'
                            id='type'
                            name='type'
                            value={post.type}
                            placeholder='Select the transaction type'
                            onChange={handleChange} >
                                <option selected>Select Type</option>
                                <option>Income</option>
                                <option>Expense</option>
                        </Form.Select>
                        { typeError && <div className="error" style={{marginLeft:"10%"}}>{typeError}</div> }

                        <Form.Control 
                            id='amount'
                            name='amount'
                            value={post.amount}
                            placeholder='Enter the Amount'
                            onChange={handleChange}
                        />
                        { amountError && <div className="error" style={{marginLeft:"10%"}}>{amountError}</div> }

                        <Form.Control 
                            id='date'
                            name='date'
                            value={post.date}
                            placeholder='Enter the Date'
                            readOnly={true}
                            onChange={handleChange}
                        />
                        { dateError && <div className="error" style={{marginLeft:"10%"}}>{dateError}</div> }

                        <Form.Control 
                            id='reference'
                            name='reference'
                            value={post.reference}
                            placeholder='Enter the Reference'
                            onChange={handleChange}
                        />
                        { referenceError && <div className="error" style={{marginLeft:"10%"}}>{referenceError}</div> }
                    </Form.Group>
                    <button onClick={handleClick}>Add Transaction</button>
                </Form>
            </div>
        </div>
    )
}

export default AddTransaction;