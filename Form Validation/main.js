

const username  = document.querySelector("#username")
const email  = document.querySelector("#email")
const password  = document.querySelector("#password")
const confirmPassword  = document.querySelector("#confirmPassword")
const form  = document.querySelector("#form")

const showError = (input,message)=>{


    let parentElement = input.parentElement;
    parentElement.classList = 'form-control error ';
    const small = parentElement.querySelector("small");
    const  successIcon = parentElement.querySelectorAll("li")[0];
    const  errorIcon = parentElement.querySelectorAll("li")[1];
    errorIcon.style.visibility = 'visible';
    successIcon.style.visibility ='hidden';
    small.innerText = message;

}
const showESuccess = (input)=>{


    let parentElement = input.parentElement;
    parentElement.classList = 'form-control success ';
    // const small = parentElement.querySelector("small");
    const  successIcon = parentElement.querySelectorAll("li")[0];
    const  errorIcon = parentElement.querySelectorAll("li")[1];
    errorIcon.style.visibility = 'hidden';
    successIcon.style.visibility ='visible';


}


const checkEmail = (email) =>{
    const reg =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(reg.test(email.value)){
        showESuccess(email);
    }
    else
    {
        showError(email,'Invalid email')
    }
}



const chechPasswordLenght = (input,min,max) => {

        if(input.value.length < min){
            showError(input,`Password atleast ${min} Characrer`);
        }
        else if (input.value.length > max){
            showError(input,`Password Maximum Characrer is ${max}`);
        }
        else{
            showESuccess(input);
        }
}

const chechEmpty = (elements) =>{
        elements.forEach(element => {
            if(element.value === ''){
                showError(element, 'Input required')
            }
            else{
                showESuccess(element);
            }
        });
}

// form.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     chechEmpty([username,email,password,confirmPassword]);
//     checkEmail(email);

//     chechPasswordLenght(password,6,10)
//     chechPasswordLenght(confirmPassword,6,10)

   
// })

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    chechEmpty([username,email,password,confirmPassword]);

    checkEmail(email);

    if(password.value !== ''){
        chechPasswordLenght(password,6,10)
    }

    if(confirmPassword.value !== ''){
        chechPasswordLenght(confirmPassword,6,10)
    }

})