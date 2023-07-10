import React, { useState, useEffect } from 'react'
import './App.css';
import PdfTemplate from './PDF/Template'

function App() {

  const [InvoiceNumber, setInvoiceNumber] = useState('');

  const [Dates, setDates] = useState('');

  const [view, setView] = useState(true);

  let newDate = new Date()
  let date = newDate.getDate();

  const numbers = [
    {
      product: 'dsdsd',
      amount: '23782'
    },
    {
      product: 'dsd',
      amount: '993'
    },
    {
      product: 'dssdffedfdsd',
      amount: '623'
    }
  ]

  useEffect(() => {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    console.log(`Date is ${date}`);
    setDates(date)

},[])

  const Create = () => {
    setView(false)
  }

  return (
    <>
      {
        view ?
          <div className='containers' >
            <div className="form">
              <div className="inputs">
                <input type="text" placeholder='Invoice Number' value={InvoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} />
              </div>
              <div className="buttons">
                <button onClick={Create} >Create ➡️ </button>
              </div>
            </div>
          </div>
          :
          <PdfTemplate InvoiceNumber={InvoiceNumber} date={Dates}  />
      }
    </>
  );
}


export default App;
