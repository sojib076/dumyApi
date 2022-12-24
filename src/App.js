import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Layout/Main';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Post from './Component/Post/Post';
function App() {

  const Router = createBrowserRouter([
    {
      path: "/", element: <Main></Main>, children: [
        {
          path: "/home", element: <Home></Home>
        },
        {
          path: "/about", element: <About></About>
        },
        {
          path: "/post/:id",
          loader: ({ params }) =>  fetch(`https://dummyapi.io/data/v1/post/${params.id}`,{ headers: { 'app-id': '63a73045cb605a19daa87b1f' } }).then(res => res.json()).then(data => { return data}),
          element: <Post></Post>
        }
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={Router}>
      </RouterProvider>
    </div>
  );
}

export default App;
