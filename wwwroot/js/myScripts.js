const btnClick = document.querySelectorAll('#subModelo .btn-link');
const showModeloList = document.querySelectorAll('#infoModelo');
const showLista = document.querySelectorAll('nav #lista .dropdown #prueba');
const subMenu = document.querySelectorAll('.dropdown-menu');

const btnScroll = document.querySelector('#btnScroll')
const divCard = document.querySelector('#divCard')


// console.log(showLista)

document.addEventListener('DOMContentLoaded', () => {
    showModel();
    listaShow();
    closeShow();
 });

 
 // Funciones
function showModel() {
     btnClick.forEach((btn, index) => {
         btn.addEventListener('click', (e) => {
             e.preventDefault();
     
             const showModelo = showModeloList[index];
             showModelo.classList.add('showModelo');
             // console.log(e.target)
             showModeloList.forEach( (element, idx) => {
                 if (idx !== index) {
                     e.preventDefault();
                     element.classList.remove('showModelo');
                 }
             });
     
             const btnStyle = btnClick[index]
             btnStyle.classList.add('active')
                btnClick.forEach( (element, idx) => {
                    if(idx !== index){
                        e.preventDefault();
                        element.classList.remove('active');
                    }
                })
         });
     });
}

function listaShow() {
    showLista.forEach((btn, index) => {
        btn.addEventListener('mouseenter', (e) => {
            e.preventDefault();

            const listaShow = subMenu[index]
            listaShow.classList.add('show');
            subMenu.forEach( (element, idx) => {
                if (idx !== index) {
                    e.preventDefault();
                    element.classList.remove('show');
                }
            })

            const btnStyle = showLista[index]
            btnStyle.classList.add('prueba2');
            showLista.forEach( (element, idx) => {
                if(idx !== index){
                    e.preventDefault();
                    element.classList.remove('prueba2');
                }
            })

        });
    })
}

function closeShow() {
    subMenu.forEach((btn, index) => {
        btn.addEventListener('mouseleave', (e) => {
            e.preventDefault();

            const listaShow = subMenu[index]
            listaShow.classList.remove('show');

            subMenu.forEach( (element, idx) => {
                if (idx !== index) {
                    e.preventDefault();
                    element.classList.remove('show');  
                }
            })

            const btnStyle = showLista[index]
            btnStyle.classList.remove('prueba2');
        });
    })
}

btnScroll.addEventListener('click', (e) => {
    console.log(e.target)
})