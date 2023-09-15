import { Form } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import { useEffect,useState } from "react";
import axios from "axios";
import './transactions.css';

function CreatePost () {

    useEffect(() => {
        getDate();
    }, []);

    const navigate = useNavigate();
    const [data, setData] = useState ({
        amount:"",
        type:"",
        category:"",
        date:"",
        description:"",
        reference:"",
    });
    const [date, setDate] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;

        setData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const [amountError, setAmountError] = useState("");
    const [typeError, setTypeError] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [referenceError, setReferenceError] = useState("");

    const validationForm = () => {
        let valid = true;

        const Amount = document.getElementById('amount');
        if (data.amount == '') {
            Amount.setCustomValidity('Please Enter the Amount');
            setAmountError("Please Enter the Amount");
            valid = false;
        }else if (isNaN(data.amount)) {
            Amount.setCustomValidity('Please Enter a valid Amount');
            setAmountError("Please Enter a valid Amount");
            valid = false;
        } else {
            Amount.setCustomValidity('');
            setAmountError("");
        }

        const Type = document.getElementById('type');
        if (data.type == '') {
            Type.setCustomValidity('Please select a Type');
            setTypeError("Please select a Type");
            valid = false;
        } else {
            Type.setCustomValidity('');
            setTypeError("");
        }

        const Category = document.getElementById('category');
        if (data.category == '') {
            Category.setCustomValidity('Please select a Category');
            setCategoryError("Please select a Category");
            valid = false;
        } else {
            Category.setCustomValidity('');
            setCategoryError("");
        }

        const Description = document.getElementById('description');
        if (data.description == '') {
            Description.setCustomValidity('Please enter a Description');
            setDescriptionError("Please enter a Description");
            valid = false;
        } else {
            Description.setCustomValidity('');
            setDescriptionError("");
        }

        const Reference = document.getElementById('reference');
        if (data.reference == '') {
            Reference.setCustomValidity('Please enter a reference');
            setReferenceError("Please enter a Reference");
            valid = false;
        } else {
            Reference.setCustomValidity('');
            setReferenceError("");
        }

        return valid;
    }

    //add transaction form validation
    const handleClick = (event) => {
        event.preventDefault();

        if(validationForm()){
            axios.post("/api/Fin/add", data)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));

            navigate("trans");
        }
        
    };

    const getDate = () => {
        const date = new Date();
        let currentDay= String(date.getDate()).padStart(2, '0');
        let currentMonth = String(date.getMonth()+1).padStart(2,"0");
        let currentYear = date.getFullYear();
        let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
        setDate(currentDate);
        setData({
            amount:"",
            type:"",
            category:"",
            date:currentDate,
            description:"",
            reference:"",
        })
    }



    return (
        <div className="finance-create">

        <div className="Create-post">
            <h3 className="title">Add Transaction Details</h3><br />
            <Form className="Form">
                <Form.Group className="Form-Group">
                    <Form.Control className="Form-Control" 
                        id="amount"
                        name="amount" 
                        value={data.amount}
                        placeholder="Enter Amount (LKR)"
                        onChange={handleChange}
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                    { amountError && <div className="error" style={{marginLeft:"10%"}}>{amountError}</div> }
                    
                    <Form.Select className="Form-Control" 
                        id="type"
                        name="type"
                        value={data.type} 
                        placeholder="Transaction Type"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required>
                            <option>Select Transaction Type</option>
                            <option>Income</option>
                            <option>Expense</option>
                    </Form.Select>
                    { typeError && <div className="error" style={{marginLeft:"10%"}}>{typeError}</div> }

                    <Form.Select className="Form-Control" 
                        id="category"
                        name="category"
                        value={data.category} 
                        placeholder="Category"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required>
                            <option>Select Category</option>
                            <option>Salary</option>
                            <option>Shop Fees</option>
                            <option>Supplier charges</option>
                            <option>Bills</option>
                            <option>TAX</option>
                            <option>Services</option> 
                    </Form.Select>
                    { categoryError && <div className="error" style={{marginLeft:"10%"}}>{categoryError}</div> }

                    <Form.Control className="Form-Control"
                        name="date" 
                        value={data.date}
                        placeholder="Date"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        readOnly={true}
                        required />

                    <Form.Control className="Form-Control"
                        id="description"
                        name="description" 
                        value={data.description}
                        placeholder="Enter Description"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                    { descriptionError && <div className="error" style={{marginLeft:"10%"}}>{descriptionError}</div> }

                    <Form.Control className="Form-Control"
                        id="reference"
                        name="reference" 
                        value={data.reference}
                        placeholder="Enter Reference"
                        onChange={handleChange} 
                        style={{width:"80%", marginLeft:"10%"}}
                        required />
                    { referenceError && <div className="error" style={{marginLeft:"10%"}}>{referenceError}</div> }
                </Form.Group>
                <br />
                < button style={{borderRadius:"5px", background:"#A7D5E5", padding:"1.5%", width:"45%", fontSize:"17px", 
                paddingLeft:"5px", paddingRight:"5px", border:"#A7D5E5"}} onClick={handleClick}>ADD TRANSACTION</button>
            </Form>
            <br />
            {/* <br />
            <button style={{borderRadius:"5px", background:"#a66f72", padding:"0.5%"}} onClick={() => navigate(-1)}> BACK </button>   */}
        </div>
        </div>
    );
}

export default CreatePost;