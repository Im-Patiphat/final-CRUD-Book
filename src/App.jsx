import { AddBook, EditBook,BookDetail,BookList,Footer } from './Pages'
import './App.css'
import { BrowserRouter,Routes , Route } from 'react-router-dom'
function App() {
  return (
    <>
      <div className="container">
        <h1>Final CRUD BookList</h1>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/book/create" element={<AddBook />} />
          <Route path="/book/edit/:id" element={<EditBook />} />
          <Route path="/book/detail/:id" element={<BookDetail />} />
        </Routes>
        </BrowserRouter>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
