import React from 'react'
import './featurescss.css'

export default function Features() {
  return (
    <div>
        <div class="feat container">
            <h1>Features</h1>
            <div class="row">
              <div class="col-md-4">
                <div class="card mb-4 ">
                  <div class="card-body text-center">
                    <i class="fas fa-chart-bar fa-4x mb-3"></i>
                    <h3 class="card-title">Financial Analytics</h3>
                    <p class="card-text">Gain insights into your spending habits with interactive charts and graphs.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4">
                  <div class="card-body text-center">
                    <i class="fas fa-wallet fa-4x mb-3"></i>
                    <h3 class="card-title">Budget Management</h3>
                    <p class="card-text">Create budgets, track expenses, and stay within your financial limits.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4">
                  <div class="card-body text-center">
                    <i class="fas fa-tasks fa-4x mb-3"></i>
                    <h3 class="card-title">Goal Setting and tracking</h3>
                    <p class="card-text">Set financial goals and monitor your progress towards achieving them.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
