const btnClick = document.querySelectorAll('#subModelo .btn-link');
const showModeloList = document.querySelectorAll('#infoModelo');

btnClick.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const showModelo = showModeloList[index];
        showModelo.classList.add('showModelo');
        showModeloList.forEach( (element, idx) => {
            if (idx !== index) {
                element.classList.remove('showModelo');
            }
        });
    });
});