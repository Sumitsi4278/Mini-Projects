const buttons = document.querySelectorAll('button');
const screen = document.getElementById('display');

let resultDisplayed = false;

for(let button of buttons){
    button.addEventListener('click', (e)=>{
        const buttonText = e.target.innerText;

        if(buttonText === 'C'){
            screen.value = "";
        }
        
        else if(buttonText === 'x'){
            screen.value += '*';
        }
        else if(buttonText === '='){
            try {
                screen.value = eval(screen.value);
                resultDisplayed = true;
                // screen.value = "";
            } catch (error) {
                screen.value = "Invalid Operator"
            }
        }
        else{
            if(resultDisplayed){
                screen.value = "";
                resultDisplayed = false;
            }
            screen.value += buttonText;
        }
    })
}


