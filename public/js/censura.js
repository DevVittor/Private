var seletorPadrao = document.querySelectorAll(".img_post img");

// Itera sobre cada elemento img e aplica o filtro de desfoque
seletorPadrao.forEach(img => {
    img.style.filter = "blur(12px)";
});