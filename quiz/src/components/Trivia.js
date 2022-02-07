import { useEffect, useMemo, useState } from "react";

export default function Trivia({data,setTimeOut,questionNumber,setQuestionNumber}){
	
	const [question,setQuestion]=useState(null);
	useEffect(()=>{
       setQuestion(data[questionNumber-1]);
	},[data,questionNumber]);
	
    console.log(question.answers)
	return(
		<div className="Trivia">
		
		  <div className="question">question</div>
		  <div className="answers">
		     <div className="answer correct">Lama Dev</div>
		     <div className="answer">bharat</div>
		     <div className="answer">dfgg</div>
		     <div className="answer">sdfsf</div>
		   </div>
		 
		   </div>  

		)
}