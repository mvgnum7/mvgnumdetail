document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("popup-close");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // previne reload
        popup.style.display = "block"; // mostra pop-up

        // aqui podes enviar o form manualmente via fetch ou deixar o formsubmit
        // exemplo com formsubmit
        form.submit();
    });

    closeBtn.addEventListener("click", function() {
        popup.style.display = "none"; // fecha pop-up
    });

    window.addEventListener("click", function(e) {
        if(e.target === popup) {
            popup.style.display = "none";
        }
    });
});
