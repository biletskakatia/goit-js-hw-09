import"./assets/modulepreload-polyfill-3cfb730f.js";let e={email:"",message:""};const t={form:document.querySelector(".feedback-form"),emailInput:document.querySelector('input[name="email"]'),messageInput:document.querySelector('textarea[name="message"]')},o="feedback-form-state";t.form.addEventListener("input",l);t.form.addEventListener("submit",u);function l(a){const{name:n,value:r}=a.target;e={...e,[n]:r},s()}function s(){localStorage.setItem(o,JSON.stringify(e))}function c(){const a=localStorage.getItem(o);a&&(e=JSON.parse(a),m())}function m(){t.emailInput.value=e.email,t.messageInput.value=e.message}function u(a){if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log("Form data:",e),i()}function i(){e={email:"",message:""},localStorage.removeItem(o),m()}c();
//# sourceMappingURL=commonHelpers2.js.map
