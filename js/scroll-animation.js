const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            console.log(entrada.target);
            entrada.target.classList.add("visualizar")
        } else {
            entrada.target.classList.remove("visualizar")
        }
    })
}, {});

const divElementos = document.querySelectorAll(".cuadros")
divElementos.forEach(elemento => observador.observe(elemento))
