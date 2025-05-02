const input = document.getElementById('inputText');
const convertedText = document.getElementById('convertedText');

input.addEventListener('keyup', () => {
    let cinvirtidTixt = input.value.replace(/[aeiouáéíóúäëïöüàèìòùâêîôûæøµ]/g, 'i');
    cinvirtidTixt = cinvirtidTixt.replace(/[AEIOUÁÉÍÓÚÄËÏÓÜÀÈÌÒÙÂÊÎÔÛÆØµ]/g, 'I');
    convertedText.textContent = cinvirtidTixt;
})