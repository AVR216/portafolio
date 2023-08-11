const btnNav = document.querySelector('.menu-btn');

btnNav.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show')
});

/* Download button */
const btnDownloadCV = document.querySelector('.download_cv');
btnDownloadCV.addEventListener('click', () => {
    console.log("Download cv");
    btnDownloadCV.setAttribute('href', './assets//files/cv.pdf');
});

/* Send mail from contact form */
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const templateParams = {};
    let isError = false;

    formData.forEach( (value, key) => {
        if(value.trim().length == 0) {
            isError = true;
        }
    });

    if(isError){
        Swal.fire("This web says", "Please fill in the form fields", "error");
        return;
    }

    formData.forEach((value, key) => {
        templateParams[key] = value;
    });

    emailjs.send('service_r3fztd5', 'template_pkmwr9w', templateParams, '9GQFU0RvgRoGB3RQa')
        .then(function (response) {
            Swal.fire("This web says", "The message was sent!", "success");
            /* console.log('SUCCESS!', response.status, response.text); */
        }, function (error) {
            Swal.fire("This web says", "An error has occurred, please contact Jhon by another means", "warning");
           /*  console.log('FAILED...', error); */
        });
});

