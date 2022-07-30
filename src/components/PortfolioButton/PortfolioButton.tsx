import React from 'react';
import './portfoliobutton.css';

const PortfolioButton = ({button, filter}) => {
  return (
    <div className="buttons">
        {
            button.map((cat, i)=>{
                return <button type="button" onClick={()=> filter(cat)} className="w-fit-content btn-custom-1 btn btn-primary" key={i}>{cat}</button>
            })
        }
    </div>
  )
}

export default PortfolioButton