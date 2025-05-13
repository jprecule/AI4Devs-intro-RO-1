
document.addEventListener('DOMContentLoaded', () => {
    const input = prompt("Introduce una cadena de texto:");
    if (input !== null) {
        const reversed = input.split('').reverse().join('');
        alert("Cadena invertida: " + reversed);
    }
});
