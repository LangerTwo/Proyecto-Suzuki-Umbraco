const btnClick = document.querySelectorAll('#subModelo .btn-link');
const showModeloList = document.querySelectorAll('#infoModelo');
const modelos = document.querySelector('nav #modelos');
const subModelo = document.querySelector('#subModelo');
console.log(subModelo)

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

modelos.addEventListener('mouseenter', () => {
    subModelo.classList.add('show');
});

subModelo.addEventListener('mouseleave', (e) => {
    subModelo.classList.remove('show');       
});