import './App.css';
import Trivia from './components/Trivia.js';
import { useEffect, useMemo, useState } from "react";
function App() {
  const [questionnumber, setQuestionNumber] = useState(1);
  const [timeOut,setTimeOut]=useState(false);
   const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];
  const moneyPyramid=[
    {id:1,amount:"$100"},
    {id:2,amount:"$200"},
    {id:3,amount:"$300"},
    {id:4,amount:"$400"},
    {id:5,amount:"$500"},
  ].reverse();
 

  return (

    <div className="app">
      <div className="main">
         <div className="top">
           <div className="timer">
           30
           </div>
         </div>
         <div className="bottom"><Trivia
              data={data}
              setTimeOut={setTimeOut}
              questionNumber={questionnumber}
              setQuestionNumber={setQuestionNumber}

         />
         </div>
      </div>
      
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m)=>(
           <li className={questionnumber===m.id?"moneyListItem active" :"moneyListItem"}>
              <span className="moneyListItemnumber">{m.id}</span>
              <span className="moneyListItemamount">{m.amount}</span>

           </li>))}
       
        </ul>
      </div> 
    </div>
  );
}

export default App;
