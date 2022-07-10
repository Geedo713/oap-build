const form = document.getElementById("form-div");
    const startBtn = document.getElementById("form-btn");
    const confirmMsg = document.getElementById("confirmationMsg");
    
    opacity = 0;
    function showModal() {
        opacity = Number(window.getComputedStyle(form).getPropertyValue("opacity"));
        if (opacity > 0) {
            opacity = opacity - 1;
            form.style.opacity = opacity;
            confirmMsg.innerHTML = "Thank for your interest in OAP, We have received your information and will get in contact with you shortly!"
        }
    }
    //console.log(showModal());
    startBtn.addEventListener('click', showModal);
