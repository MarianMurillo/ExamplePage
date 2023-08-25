const btnabrirModal=document.querySelector("#btn-abrir-modal");
const btncerrarModal=document.querySelector("#btn-cerrar-modal");
const modal=document.querySelector("#modal");

btnabrirModal.addEventListener("click",()=>{
    modal.showModal();
})


btncerrarModal.addEventListener("click",()=>{
    modal.close();
})

