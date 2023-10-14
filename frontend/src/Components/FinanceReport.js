import React,{ useRef} from "react";
import { useReactToPrint} from 'react-to-print';
import { useEffect,useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from "react-bootstrap";

const ReactPdfPrint = () => {

    const [posts, setPosts] = useState([]);
    const [income, SetIncome] = useState(0);
    const [expenses, SetExpenses] = useState(0);

    useEffect(() => {
        axios.get("/api/Fin/trans")
            .then((res) => {
                console.log(res)
                setPosts(res.data);
            })
            .catch((err) => console.log(err));
}, []);

useEffect(() => { 
    let amount1 = 0;
    let amount2 = 0;
    if(posts){
        posts.map((post) => {
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

}, [posts]);

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'salon-packages'
    });

    return (
            <div className="report">
            <div ref={componentRef}>
                <h3 style={{fontWeight:"bold", textAlign:"center", backgroundColor:"#373B61", padding:"3%", marginTop:"-1%", color:"#EDEFFE"}}>Finance Report</h3>
                <br />
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
                    </div>
                    <br />

                <Table className="reportTable" bordered>
                    <thead>
                        <th className="col">ID</th>
                        <th>Amount</th>
                        <th className="col">Type</th>
                        <th>Category</th>
                        <th className="col">Date</th>
                        <th>Description</th>
                        <th className="col">Reference</th>
                    </thead>
                    <tbody>
                    {posts ? (
                        <>
                            {posts.map((post, index) => {
                                return (
                                        <tr key={post._id}>
                                            <td className="col">{index+1}</td>
                                            <td>{post.amount}</td>
                                            <td className="col">{post.type}</td>
                                            <td>{post.category}</td>
                                            <td className="col">{post.date}</td>
                                            <td>{post.description}</td>
                                            <td className="col">{post.reference}</td>
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
                <button style={{borderRadius:"5px", width:"20%", backgroundColor:"#373B61", color:"white"}} onClick={handlePrint}>Download</button>
            </center>
            </div>
    );
};

export default ReactPdfPrint;