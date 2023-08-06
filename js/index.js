const btnNav = document.querySelector('.menu-btn');

btnNav.addEventListener('click', ()=> {
    document.querySelector('.nav-menu').classList.toggle('show')
});

const btnDownloadCV = document.querySelector('.download_cv');
btnDownloadCV.addEventListener('click', () => {
    console.log("Download cv");
    btnDownloadCV.setAttribute('href', './assets//files/cv.pdf');
});