import React from 'react'
import './homecss.css'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <div class="container text-white text-center py-5">
            <h1 class="display-1">Manage Your Finances with Us.</h1>
            <h3 class="display-3 ">Finance Manager.</h3>
            <p class="lead">Track expenses, set budgets, and achieve your financial goals.</p>
            <Link to="/dashboard" class="btn btn-light btn-lg">Start Now</Link>
          </div>
    </div>
  )
}
