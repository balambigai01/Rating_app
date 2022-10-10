import star from './images/icon-star.svg';
import './App.css';
import { useState } from 'react';
import thanks from "./images/illustration-thank-you.svg";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(0)
  const [items,setItems] = useState("")
    const Button = ( {number}) => {
      return <button onClick={ () => setItems(number)}className='but1 bg-gray-700 h-10 w-10 rounded-full pt-1 text-gray-200 focus:bg-gray-400 '>{number}</button> 


    }


  return (
    <>
      {!isSubmitted && (<div className="wrapper">
        <img src={star} alt="" className='bg-gray-700 p-2 rounded-full' />
        <h2 className='text-gray-100 text-3xl my-6'> How did we do?</h2>
        <p className='text-gray-300 mb-10'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! </p>
        <ul className=' but grid grid-cols-5 gap-3 mb-10'>
          <li><Button number={1}/></li>
          <li><Button number={2}/></li>
          <li><Button number={3}/></li>
          <li><Button number={4}/></li>
          <li><Button number={5}/></li>
        </ul>  
        <div className='text-center pr-5'>
           <button onClick={ () => setIsSubmitted(1)} className="btn-rating w-full uppercase tracking-wide pt-3 pb-2 rounded-full">SUBMIT</button>    
        </div>
      </div>)}
    
    {isSubmitted && <Thankyou setIsSubmitted={setIsSubmitted} items={items}/>}
    </>
  );
}
 const Thankyou = ({items , setIsSubmitted}) => {
  return(
    <div className="wrapper">
      <img src={thanks} alt="" className="block mx-auto mb-5  pt-2" />
      <div className='flex items-center justify-center'>
      <p className='rating bg-gray-700 rounded-full text-center pl-4 pr-4 px-10 pt-1'>You selected {items} out of 5</p>
      </div>
      <h2 className='text-gray-100 text-3xl my-6 text-center'>Thank you</h2>

      <p className='text-gray-300 mb-10 text-center'> We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch! 
      </p>
      <div className='text-center pr-5'>
           <button onClick={ () => setIsSubmitted(0)} className="btn-rating w-full uppercase tracking-wide pt-3 pb-2 rounded-full">RATE AGAIN</button>    
        </div>
    </div>
  )


 }




export default App;
