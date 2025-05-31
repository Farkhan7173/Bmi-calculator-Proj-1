import React, { useState } from 'react'

const Bmi = () => {

const[height,setheight]=useState("");
const[weight,setweight]=useState("");
const[bmi,setbmi]=useState();
const[msg,setmsg]=useState("");

const submit=()=>{
if(height==="" || weight===""){
  setbmi(0);
  setmsg('Please enter height and weight!');
}
else{
  let bmi=(weight/(height*height)*10000)  //formula for BMI
  setbmi(bmi);

  if(bmi<18.5){
    setmsg("You are underweight");
  }
  else if(bmi>18.5 && bmi<24){
    setmsg("You are a healthy weight");
  }
  else{
    setmsg("You are overweight");
  }
}

}


  return (
    <>
    <h1>BMI Calculator</h1>

     <div className='container'>
    <input className='in' type="text" placeholder='Enter height(cm)' value={height} onChange={(e)=>setheight(e.target.value)}/> <br /> <br />
    <input className='in' type="text" placeholder='Enter weight(kgs)' value={weight} onChange={(e)=>setweight(e.target.value)}/> <br /><br />
    <button className='btn'onClick={submit}>Calculate BMI</button>

    {/* now lets show on UI: */}

  
 
<p className='bmi'>Your BMI is: {bmi}</p>
<p className='msg'>{msg}</p>


  
</div>



    </>
  )
}

export default Bmi