const btnClick = document.querySelectorAll('#subModelo .btn-link');
const showModeloList = document.querySelectorAll('#infoModelo');
const showLista = document.querySelectorAll('nav #lista .dropdown');
const subMenu = document.querySelectorAll('.dropdown-menu');
console.log(subMenu)

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
        });
    })
    
    showLista.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            const listaShow = subMenu[index]
            listaShow.classList.add('show');
            subMenu.forEach( (element, idx) => {
                if (idx !== index || idx === index) {
                    e.preventDefault();
                    element.classList.remove('show');  
                }
            })
        });
    })

    showLista.forEach((btn, index) => {
        btn.addEventListener('touchstart', (e) => {
            e.preventDefault();

            const listaShow = subMenu[index]
            listaShow.classList.add('show');
            subMenu.forEach( (element, idx) => {
                if (idx !== index || idx === index) {
                    e.preventDefault();
                    element.classList.remove('show');  
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
        });
    })
}