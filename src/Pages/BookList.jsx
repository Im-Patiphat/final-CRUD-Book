import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
const BookList = () => {
    const [bokData, setBokData] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
         fetch("http://localhost:8000/books")
            .then((res) => {
                return res.json();
            }
            ).then((response) => {
                setBokData(response);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);


    const loadEdit = (id) => {
        navigate("/book/edit/" + id)
    };
    const loadDetail = (id) => {
        navigate("/book/detail/" + id)
    };
    const removeBook = (id) => {
        //alert("delete" + id)
        if (window.confirm("ID "+[id]+" do you want to remove?")){
            fetch("http://localhost:8000/books/"+id,{
                method: "DELETE"
            }).then((res)=>{
                alert("Remove Successfully");
                window.location.reload();
            })
            .catch((err)=>{
                console.log(err);
            });
        }
    };

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">

                </div>
                <div className="card-body">
                    <div className="btn">
                        <Link to="/book/create" className='btn btn-success' >
                            Add New (+)
                        </Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>ชื่อ</td>
                                <td>ผู้เขียน</td>
                                <td>ราคา(บาท)</td>
                                <td>ประเภท</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {bokData &&
                                bokData.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.author}</td>
                                        <td>{item.price}</td>
                                        <td>{item.genre}</td>
                                        <td>
                                            <a className="btn btn-success" onClick={() => {
                                                loadEdit(item.id)
                                            }}>แก้ไข</a>
                                            <a className="btn btn-danger" onClick={() => {
                                                removeBook(item.id)
                                            }}>ลบ</a>
                                            <a className="btn btn-primary" onClick={() => {
                                                loadDetail(item.id)
                                            }}>รายละเอียดหนังสือ</a>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BookList
