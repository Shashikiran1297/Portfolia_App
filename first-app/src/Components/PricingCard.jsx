import "../Components/PricingCardStyle.css"

import React from 'react'
import {Link} from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>-- BASIC --</h3>
                <span className="bar"></span>
                <p className="btc">$ 100</p>
                <p>- 3Days -</p>
                <p>- 3Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive page -</p>
                <Link to="/Contacts" className="btn">Purchase Now</Link>
            </div>
            <div className="card">
                <h3>-- PREMIUM --</h3>
                <span className="bar"></span>
                <p className="btc">$ 200</p>
                <p>- 2Days -</p>
                <p>- 5Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive page -</p>
                <Link to="/Contacts" className="btn">Purchase Now</Link>
            </div>
            <div className="card">
                <h3>-- BUISNESS --</h3>
                <span className="bar"></span>
                <p className="btc">$ 300</p>
                <p>- 5Days -</p>
                <p>- 8Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive page -</p>
                <Link to="/Contacts" className="btn">Purchase Now</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard
