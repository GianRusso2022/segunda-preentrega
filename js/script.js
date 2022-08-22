class Dato {
    constructor(servicio, perros, paseos) {
        this.servicio = servicio
        this.perros = perros
        this.paseos = paseos
    }
}

let datos = []

if (localStorage.getItem('datos')) {
    tareas = JSON.parse(localStorage.getItem('datos'))
} else {
    localStorage.setItem('datos', JSON.stringify(datos))
}

const form = document.getElementById("formId")
const calcular = document.getElementById("botonCalcular")
const resultado = document.getElementById("resultado")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const datForm = new FormData(e.target)
    console.log(datForm.get("servicio"), datForm.get("cantidadPerros"), datForm.get("cantidadPaseos"))
    const dato = new Dato(datForm.get("servicio"), datForm.get("cantidadPerros"), datForm.get("cantidadPaseos"))
    datos.push(dato)
    localStorage.setItem('datos', JSON.stringify(datos))
    form.reset()
})
botonMostrar.addEventListener('click', () => {
    const datosStorage = JSON.parse(localStorage.getItem('datos'))

    resultado.innerHTML = ""

    datosStorage.forEach((dato, indice) => {

        resultado.innerHTML += `

        <div class="container">
            <div class="card w-50">
                <div class="card-header">
                    Total
                </div>
                <div class="card-body">
                    <h5 class="card-title">Paseo</h5>
                    <p class="card-text">${(dato.perros)} perros</p>
                    <p class="card-text">${dato.paseos} paseos semanales</p>
                    <p class="card-text">Valor total mensual $${((dato.perros * dato.paseos) * dato.servicio) * 4} </p>
                    <a href="#" class="btn btn-primary">Consultar</a>
                </div>
            </div>
        </div>
        `
    })
})

