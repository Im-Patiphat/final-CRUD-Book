
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import './Bookdetail.css';
const BookDetail = () => {
  const { id } = useParams();
  const [bokData, setBokData] = useState({});
  useEffect(() => {
    fetch("http://localhost:8000/books/" + id)
      .then((res) => res.json())
      .then((data) => {
        setBokData(data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [id]);
  return (
    <div className="detail">
      <div className="offset-lg-3 col-lg-6">
        <div className="container">
          <div className="card row">
            <div className="card-title">
              <h2>รายละเอียดหนังสือ  ({bokData.id})</h2>
            </div>
            {bokData && (<div className="card-body">
              <img src={bokData.image + "&" + bokData.id} alt="book" />
              <div className="card-text">
                <h3>{bokData.name} </h3>
                <h4>ผู้เขียน: {bokData.author}</h4>
                <h4>ราคา: {bokData.price} </h4>
                <h4>ประเภท: {bokData.genre} </h4>
              </div>
              <Link className="btn btn-danger" to="/">
                ย้อนกลับไปที่รายชื่อหนังสือ
              </Link>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetail
