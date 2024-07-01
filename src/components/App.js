import React, {Component, useState} from "react";
import '../styles/App.css';

   const FlamesApp=()=> {
    const [name1,setName1]=useState('');
    const [name2,setName2]=useState('');
    const[result,setResult]=useState('');
    
    const calculateRelationShip=()=>{
      if(!name1 || !name2){
         setResult("Please Enter Valid input");
         return;
      }
    
    const removeCommonLetters=(str1,str2)=>{
      let arr1=str1.split('');
      let arr2=str2.split('');
      
      for(let char of str1){
         let index=arr2.indexOf(char);
         if(index>-1){
            arr2.splice(index,1);
            arr1.splice(arr1.indexOf(char),1);
         }
      }
      return arr1.length+arr2.length;
   };

    const relationshipStatus=(num)=>{
         switch(num){
            case 1: return'Friends';
            case 2: return 'Love';
            case 3: return 'Affection';
            case 4: return 'Marriage';
            case 5: return 'Enemy';
            case 0: return '';
            default:return '';
         }
    };
    const totalLetters=removeCommonLetters(name1,name2);
    const resultIndex=totalLetters%6;
    setResult(relationshipStatus(resultIndex));
   };
     const clearFields=()=>{
       setName1('');
       setName2('');
       setResult('');
     };
        return(
            <div id="main">
               {/* Do not remove the main div */}
             <input type="text" data-testid="input1" placeholder="Enter first name"value={name1}onChange={(e)=> setName1(e.target.value)}></input>
             <input type="text" data-testid="input2" placeholder="Enter second name"value={name2}onChange={(e)=>setName2(e.target.value)}></input> 
             <button data-testid="calculate_relationship"onClick={calculateRelationShip}>Calculate Relationship future</button>
             <button data-testid="clear"onClick={clearFields}>Clear</button>
             <h3 data-testid="answer">{result}</h3>
            </div>
        )
    
}


export default FlamesApp;
