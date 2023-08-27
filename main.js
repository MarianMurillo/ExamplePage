//Modal login
const btnabrirModal=document.querySelector("#btn-abrir-modal");
const btncerrarModal=document.querySelector("#btn-cerrar-modal");
const modal=document.querySelector("#modal");

btnabrirModal.addEventListener("click",()=>{
    modal.showModal();
})


btncerrarModal.addEventListener("click",()=>{
    modal.close();
})

// validar formulario login
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const loginForm=document.getElementById('login'); //formulario login
const inputs= document.querySelectorAll("#login input"); // inputs del form login

//validar al presionar teclas
//${parámetro} para acceder a un parámetro
//´#Variable i´ para concatenar cadenas
const validarFormulario=(e)=>{
   switch(e.target.name){
        case "correo":
            if(expresiones.correo.test(e.target.value)){
                document.getElementById('grupo__correo').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__correo').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__correo i').classList.remove('fa-times-circle');
                document.querySelector('#grupo__correo i').classList.add('fa-check-circle');
                document.querySelector('#grupo__correo .formulario__input-error').classList.remove('formulario__input-error-activo');
            }else{
                document.querySelector('#grupo__correo i').classList.remove('fa-check-circle');
                document.querySelector('#grupo__correo i').classList.add('fa-times-circle');
                document.getElementById('grupo__correo').classList.add('formulario__grupo-incorrecto');
                document.querySelector('#grupo__correo .formulario__input-error').classList.add('formulario__input-error-activo');
            }
        break;
        case "password":
            if(expresiones.password.test(e.target.value)){
                document.getElementById('grupo__password').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__password').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__password i').classList.remove('fa-times-circle');
                document.querySelector('#grupo__password i').classList.add('fa-check-circle');
                document.querySelector('#grupo__password .formulario__input-error').classList.remove('formulario__input-error-activo');
            }else{
                document.querySelector('#grupo__password i').classList.remove('fa-check-circle');
                document.querySelector('#grupo__password i').classList.add('fa-times-circle');
                document.getElementById('grupo__password').classList.add('formulario__grupo-incorrecto');
                document.querySelector('#grupo__password .formulario__input-error').classList.add('formulario__input-error-activo');
            }
        break;
   }
};


inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault(); //no enviar los datos todavia

});