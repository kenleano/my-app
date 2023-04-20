import React, { useState } from "react";
import axios from "axios";

function CreateBook() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');

    
  const handleAddBook = (e) => {
    e.preventDefault();
    const activityvar = {
        title: title,
        author: author,
        description: description,
    };
    axios
      .post("http://localhost:5000/", activityvar)
      .then((res) => {
        console.log(res)
        alert("Book added!");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
    return (<body>
        <div class="CreateBook">
          <div class="container">
            <div class="row">
              <div class="col-md-8 m-auto">
                <br /><a class="btn btn-info float-left" href="/">Show BooK List</a>
              </div>
              <div class="col-md-8 m-auto">
                <h1 class="display-4 text-center">Add Book</h1>
                <p class="lead text-center">Create new book</p>
                <form onSubmit={handleAddBook} novalidate="">
                  <div class="form-group">
                    <input  value={title} onChange={(e) => setTitle(e.target.value)}  type="text" placeholder="Title of the Book" name="title" class="form-control" 
                      spellcheck="false" data-ms-editor="true" />
                  </div>
                  <div class="form-group">
                    <input value={author} onChange={(e) => setAuthor(e.target.value)}  type="text" placeholder="Author" name="author" class="form-control" spellcheck="false"
                      data-ms-editor="true" />
                  </div>
                  <div class="form-group">
                    <input value={description} onChange={(e) => setDescription(e.target.value)}  type="text" placeholder="Describe this book" name="description" class="form-control" 
                      spellcheck="false" data-ms-editor="true" />
                  </div>
                  <input type="submit" class="btn btn-info btn-block mt-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>)
}

export default CreateBook;