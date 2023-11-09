import React, { useState , useEffect } from 'react'
import { useNavigate, Link ,useParams } from 'react-router-dom'
const EditBook = () => {
    const {id} = useParams();
  const [book, setBook] = useState({
    name: "",
    author: "",
    price: "",
    genre: "",
    image: "https://source.unsplash.com/random/200*200/?portrait"
  });
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/books/" + id)
      .then((res) => res.json())
      .then((data) => {
        setBook(data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [id]);
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const bookData ={
      name: book.name,
      author: book.author,
      price: book.price,
      genre: book.genre,
      image: book.image
    };
    fetch("http://localhost:8000/books/"+id,{
      method:"PUT" ,
      headers:{"content-type":"application/json"},
      body:JSON.stringify(bookData)
    }).then(
      (res) => {
        alert("Save sucessfully")
        navigate("/")
      }
    ).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-title">
              <h2>Add New Book</h2>
            </div>
            <div className="card-body">
              <div className="row">
              <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="id">id</label>
                    <input type="text" disabled name="id" id="id" value={id}  className='form-control' />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" required name="name" id="id" value={book.name} onChange={handleChange} className='form-control' />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="author"> ผู้เขียน </label>
                    <input type="text" required name="author" id="author" value={book.author} onChange={handleChange} className='form-control' />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="price">ราคา</label>
                    <input type="double" required name="price" id="price" value={book.price} onChange={handleChange} className='form-control' />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="genre">ประเภท</label>
                    <input type="text" required name="genre" id="genre" value={book.genre} onChange={handleChange} className='form-control' />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="image">image</label>
                    <input type="text" required name="image" id="image" value={book.image} onChange={handleChange} className='form-control' />
                  </div>
                </div>
            
                <div className="col-lg-12">
                  <button className="btn btn-success" type='submit'>
                    บันทึก
                  </button>
                  <Link to="/" className='btn btn-danger'>
                    ย้อนกลับ
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditBook
