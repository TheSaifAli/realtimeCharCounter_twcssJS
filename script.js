const textArea = document.querySelector('#textArea');
const totalChar = document.querySelector('#totalChar');
const remainingChar = document.querySelector('#remainingChar');

const charTotal = 500;
remainingChar.textContent=charTotal;

textArea.addEventListener('keyup',()=>{
    
    const textValue= textArea.value;
    const totalCharValue =textValue.length;
    const remainingCharValue = charTotal - totalCharValue
    totalChar.textContent=totalCharValue;
    remainingChar.textContent=remainingCharValue
    if(remainingCharValue<10)
    {
        remainingChar.style.color='#facd4e';
        remainingChar.classList.add('anime');
        if(remainingCharValue<0)
        {
            textArea.style.color = '#a72807';
            remainingChar.style.color='red';
        }
        else
        {
            textArea.style.color = 'black';
            remainingChar.style.color='#facd4e';
        }
    }
    else{
        remainingChar.style.color='white';
        remainingChar.classList.remove('anime');
    }
   
})