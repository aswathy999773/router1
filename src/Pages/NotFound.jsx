import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NotFound() {
  return (
    <div>
        <center>
       <body>
    <div class="container mt-5 pt-5" >
      <div class="gif">
        <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
      </div>
      <div class="content">
        <h1 class="main-heading">This page is gone.</h1>
        <p>
          ...maybe the page you're looking for is not found or never existed.
        </p>
        <a href="https://www.google.co.in/" target="blank">
          <button>Back to home <i class="far fa-hand-point-right"></i></button>
        </a>
      </div>
    </div>
  </body>
  </center>
    </div>
  )
}
