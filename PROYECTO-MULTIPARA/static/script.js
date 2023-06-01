const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".form_close"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});




// const loginForm =document.querySelector('#login-form')
// const loginButton=document.querySelector('#login-btn')
//   loginButton.addEventListener('click',(e)=>{
//   e.preventDefault();
//   const email =document.querySelector('#email').value
//   const password =document.querySelector('#password').value

//   fetch('/log',{
//       method:'POST',
//       headers:{
//           'Content-Type':'application/json'
//       },
//       body:JSON.stringify({
//           'email':email,
//           'password':password
//       })

//   }).then(response=>response.json())
//   .then(data=>{
//       console.log(data.auth_token)
//       localStorage.setItem('token',data.auth_token)
//       window.location.href='/main'
//   })
// })

