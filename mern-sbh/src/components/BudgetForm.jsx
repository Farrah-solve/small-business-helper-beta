import React from 'react';

function BudgetForm() {
    return (
     
        <div>
          {/* <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="theme-color" content="#317EFB" />
          <link rel="shortcut icon" href="icons/icon-192x192.png" type="image/x-icon" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="styles.css" />
          <title>Budget Tracker</title> */}
          <div className="wrapper">
            <div className="total">
              <div className="total">Your total is: $<span id="total">0</span></div>
            </div>
            <div className="form">
              <input type="text" id="t-name" placeholder="Name of transaction" />
              <input type="number" min={0} id="t-amount" placeholder="Transaction amount" />
              <button id="add-btn"><i className="fa fa-plus buttons" /> Add Funds</button>
              <button id="sub-btn"><i className="fa fa-minus" /> Subtract Funds</button>
              <p className="error" />
            </div>
            <div className="transactions">
              <table>
                <thead>
                  <tr><th>Transaction</th>
                    <th>Amount</th>
                  </tr></thead>
                <tbody id="tbody">
                </tbody>
              </table>
            </div>
            <canvas id="myChart" />
          </div>
        </div>
      );
        };
  export default BudgetForm;