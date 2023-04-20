import logo from './logo.svg';
import './App.css';
import BookList from './components/FrontPage_BookList';
import { Route, Routes } from "react-router-dom";
import CreateBook from './components/CreateBook';
function App() {
  return (
    <div className="App">
      <h2>Book List</h2>
      <Routes>
      <Route path="/" element={<BookList />}></Route>
      <Route path="/create-book" element={<CreateBook />}></Route>
      </Routes>
    </div>
  );
}

export default App;
