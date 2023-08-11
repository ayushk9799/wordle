 const checkWords = (wordArray)=>
        {
            wordArray.forEach((element,index)=>
    {
       
        keySelector=document.getElementById(element)
        let indexof=actualWord.indexOf(element.toLowerCase())
        console.log(indexof)
       if(indexof>=0)
       {
          if(wordArray[index]===actualWord[index].toUpperCase())
          {
            answer.push(1)
            actualWord[index]='1'
            console.log(actualWord)
            keySelector.style.backgroundColor='#79b851';
            keySelector.style.color='white';
            charInputs[index].style.backgroundColor='#79b851';
            charInputs[index].style.color='white'
          }
          else{
            answer.push(0)
            keySelector.style.backgroundColor='#f3c237';
            keySelector.style.color='white';
            charInputs[index].style.backgroundColor='#f3c237';
            charInputs[index].style.color='white'
          }
       }
       else{
                 answer.push(-1)
                 keySelector.style.backgroundColor='#989a9c';
            keySelector.style.color='white';
            charInputs[index].style.backgroundColor='#989a9c';
            charInputs[index].style.color='white'
       }
})

   actualWord=[...storeActualWord];
        
        }