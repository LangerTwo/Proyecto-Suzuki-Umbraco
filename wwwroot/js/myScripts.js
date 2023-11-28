const btnClick = document.querySelectorAll('#subModelo .btn-link');
const showModeloList = document.querySelectorAll('#infoModelo');
const showLista = document.querySelectorAll('nav #lista .dropdown');
const subMenu = document.querySelectorAll('.dropdown-menu');
console.log(subMenu)

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

showLista.forEach((btn, index) => {
    btn.addEventListener('mouseenter', () => {
        const listaShow = subMenu[index]
        listaShow.classList.add('show');
        subMenu.forEach( (element, idx) => {
            if (idx !== index) {
                element.classList.remove('show');  
            }
        })
    });
})

subMenu.forEach((btn, index) => {
    btn.addEventListener('mouseleave', () => {
        const listaShow = subMenu[index]
        listaShow.classList.remove('show');
        subMenu.forEach( (element, idx) => {
            if (idx !== index) {
                element.classList.remove('show');  
            }
        })
    });
})