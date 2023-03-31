import React from "react";
import { Routes, Route } from "react-router-dom";
import Book from "./pages/Book";
import Header from "./components/Header";
import Main from "./pages/Main";


function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='book/:id' element={<Book />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
