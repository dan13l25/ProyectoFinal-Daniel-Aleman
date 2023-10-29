function Medicina (nombre, precio, funcion){
  this.nombre = nombre;
  this.precio = precio;
  this.funcion = funcion;
}
const medicina1 = new Medicina ("Ibupofreno", 850, "Ayuda a bajar la fiebre y baja la fiebre");
const medicina2 = new Medicina ("Aerotina",975, "Sirve para las alergias");
const medicina3 = new Medicina ("Sertal Perlas",1120, "Para aliviar dolores digestivos");
const medicina4 = new Medicina ("Geniol",1050, "Para dolores de cabeza, musculares y articulares");


const doctores = [
  {
    genero: 'Hombre',
    nombre: 'Cristian Ochoa',
    especialidad: 'Pediatria',
    duracion: 'Tiene 9 años ejerciendo la carrera',
    recibido: 'Graduado de la Universidad de Buenos Aires',
    foto: './img/pediatra.jpg',
  },
  {
    genero: 'Mujer',
    nombre: 'Martina Luna',
    especialidad: 'Pediatria',
    duracion: 'Tiene 12 años ejerciendo la carrera',
    recibido: 'Graduado de la Universidad del Salvador',
    foto: './img/pediatra 2.jpg',
  },
  {
    genero: 'Hombre',
    nombre: 'Alejandro Gutierrez',
    especialidad: 'Dermatologia',
    duracion: 'Tiene 1 año ejerciendo la carrera',
    recibido: 'Graduado de la Fundación Barcelona',
    foto: './img/dermatologo.jpg',
  },
  {
    genero: 'Mujer',
    nombre: 'Emilce Dominguez',
    especialidad: 'Dermatologia',
    duracion: 'Tiene 5 años ejerciendo la carrera',
    recibido: 'Graduado de la Universidad Católica Argentina',
    foto: './img/dermatologa.jpg',
  },
  {
    genero: 'Hombre',
    nombre: 'Ivan Gonzales',
    especialidad: 'Cardiologia',
    duracion: 'Tiene 11 años ejerciendo la carrera',
    recibido: 'Graduado de la Universidad Nacional de Rosario',
    foto: './img/cardiologo.jpg',
  },
  {
    genero: 'Mujer',
    nombre: 'Sofia Perez',
    especialidad: 'Cardiologia',
    duracion: 'Tiene 6 años ejerciendo la carrera',
    recibido: 'Graduado de la Universidad Nacional de Tucumán',
    foto: './img/cardiologa.jpg',
  },
  {
    genero: 'Hombre',
    nombre: 'Lucas Torres',
    especialidad: 'Fisioterapia',
    duracion: 'Tiene 7 años ejerciendo la carrera',
    recibido: 'Graduado de la Universidad de Ciencias Empresariales y Sociales',
    foto: './img/fisioterapia.jpg',
  },
  {
    genero: 'Mujer',
    nombre: 'Daniela Guzman',
    especialidad: 'Fisioterapia',
    duracion: 'Tiene 3 años ejerciendo la carrera',
    recibido: 'Graduado de la Universidad Austral',
    foto: './img/Fisioterapia 2.jpg',
  },
]

const turnoNumero = document.querySelector (".turnoNumero")
function sistemaDeTurnos(primerTurno, ultimoTurno) {
  let numeroDeTurno = Math.ceil(Math.random() * 70)
  while (primerTurno >= 1 && ultimoTurno <= 60) {
    if (numeroDeTurno <= ultimoTurno) {
      turnoNumero.innerHTML = `
      <h3>Su número de turno es ${numeroDeTurno}</h3>
      `
      localStorage.setItem('numeroDeTurno', numeroDeTurno)
    } else {
      turnoNumero.innerHTML = `
      <h3>Ya no hay turnos para ese día</h3>
      `
    }
    break
  }
}

const horaElegida = document.querySelector(".horaEscogida")
let botonesCreados = false

function imprimirHora(hora) {
  horaElegida.innerHTML = `
    <h3>Seleccionaste la hora ${hora}</h3>
  `
  localStorage.setItem('horaElegida', hora)
}

const horasMañana = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"];
const horasMañanaDiv = document.querySelector(".horasMañana");

function crearBotonesHorario() {
  if (!botonesCreados) {
    horasMañana.forEach(function(hora) {
      const boton = document.createElement("button")
      boton.textContent = hora
      boton.addEventListener("click", function() {
        imprimirHora(hora)
      })
      horasMañanaDiv.appendChild(boton)
    })
    botonesCreados = true
  }
}

function precioDeMercado(){
  letrero.innerHTML = `
  <h3>Precios de medicamento</h3>
  <p>Aqui te detallamos los precios de los medicamentos de libre venta</p>
  <p>Los precios pueden variar dependiendo de la farmacia que los vendan</p>
  `
}

const reinicio = document.querySelector(".reinicio")

function confirmarTurno() {
  const confirmar = document.querySelector(".confirmar");
  confirmar.innerHTML = `
  <form > 
    <input type="submit" value="Confirmar" class="confirmarBtn">
  `

  const confirmarBtn = document.querySelector(".confirmarBtn");

  confirmarBtn.addEventListener("click", (evt) => {
    confirmar.reset()
  })
}








