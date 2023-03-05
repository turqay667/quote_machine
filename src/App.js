
import './App.css';
import { useEffect,useState } from 'react';
import {FaQuoteLeft } from "react-icons/fa"

function App() {
  const [quote,setQuote]=useState('')
  const [author,setAuthor]=useState('')
 
  useEffect(()=>{
    fetchQuotes()
    },[])

  const fetchQuotes=async()=>
    await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
    .then(response=>response.json())
    .then(data=>{
      let dataQuotes=data.quotes;
      let randomIndex=Math.floor(Math.random()*dataQuotes.length)
      let randomQuote=dataQuotes[randomIndex]
      setQuote(randomQuote.quote)
      setAuthor(randomQuote.author)
    })


  const changeQuote=()=>{
  fetchQuotes()
  }
  return (
    <div className="App">




<div className='quote-box'>


<p className='quote-text'>
<FaQuoteLeft/>
<span>
{quote}
</span>

</p>  
 <div className='quote-author'>- <span>{author}</span></div>
<div className='random-quote'><button className='new-quote' onClick={changeQuote}>New quote</button></div>
</div>
    </div>

  );
}

export default App;
