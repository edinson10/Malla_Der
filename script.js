// ----- Definición de la Malla -----
const malla = {
  "Primer Año - Primer Semestre": [
    { nombre: "Instituciones Políticas y Derecho Constitucional Orgánico", abre: ["Teoría de los Derechos y Acciones Constitucionales"] },
    { nombre: "Derecho Romano", abre: ["Fundamentos del Derecho Privado"] },
    { nombre: "Introducción al Derecho", abre: ["Interpretación y Argumentación"] },
    { nombre: "Historia del Derecho", abre: ["Interpretación y Argumentación"] },
    { nombre: "Habilidades Comunicativas", abre: ["Pensamiento Crítico"] }
  ],
  "Primer Año - Segundo Semestre": [
    { nombre: "Teoría de los Derechos y Acciones Constitucionales", abre: ["Derechos Fundamentales"] },
    { nombre: "Fundamentos del Derecho Privado", abre: ["Negocio Jurídico y Teoría General de las Obligaciones"] },
    { nombre: "Interpretación y Argumentación", abre: ["Ética Profesional"] },
    { nombre: "Nociones de Economía", abre: ["Fundamentos del Derecho Comercial y Títulos de Crédito"] },
    { nombre: "Inglés I", abre: ["Inglés II"] }
  ],
  "Segundo Año - Tercer Semestre": [
    { nombre: "Derechos Fundamentales", abre: ["Derecho Internacional Público"] },
    { nombre: "Negocio Jurídico y Teoría General de las Obligaciones", abre: ["Derecho de los Bienes"] },
    { nombre: "Derecho Procesal Parte General", abre: ["Normas Comunes a Todo Procedimiento"] },
    { nombre: "Pensamiento Crítico", abre: [] },
    { nombre: "Inglés II", abre: ["Inglés III"] }
  ],
  "Segundo Año - Cuarto Semestre": [
    { nombre: "Derecho Internacional Público", abre: ["Derecho Administrativo I"] },
    { nombre: "Derecho de los Bienes", abre: ["Cumplimiento e Incumplimiento de las Obligaciones Contractuales"] },
    { nombre: "Normas Comunes a Todo Procedimiento", abre: ["Procedimientos Declarativos"] },
    { nombre: "Fundamentos del Derecho Comercial y Títulos de Crédito", abre: ["Principios Fundamentales del Derecho Penal y de la Pena"] },
    { nombre: "Inglés III", abre: ["Inglés IV"] }
  ],
  "Tercer Año - Quinto Semestre": [
    { nombre: "Derecho Administrativo I", abre: ["Derecho Administrativo II"] },
    { nombre: "Cumplimiento e Incumplimiento de las Obligaciones Contractuales", abre: ["Responsabilidad Extracontractual"] },
    { nombre: "Procedimientos Declarativos", abre: ["Ejecución y Recursos"] },
    { nombre: "Principios Fundamentales del Derecho Penal y de la Pena", abre: ["Parte General del Derecho Penal"] },
    { nombre: "Seminario de Integración", abre: ["Consultorio Jurídico II"] },
    { nombre: "Inglés IV", abre: [] }
  ],
  "Tercer Año - Sexto Semestre": [
    { nombre: "Derecho Administrativo II", abre: [] },
    { nombre: "Responsabilidad Extracontractual", abre: ["Contratos"] },
    { nombre: "Ejecución y Recursos", abre: ["Derecho Procesal Penal"] },
    { nombre: "Parte General del Derecho Penal", abre: ["Parte Especial del Derecho Penal"] },
    { nombre: "Derecho Societario", abre: ["Derecho, Innovación y Tecnología"] },
    { nombre: "Derecho Laboral", abre: ["Derecho, Innovación y Tecnología"] }
  ],
  "Cuarto Año - Séptimo Semestre": [
    { nombre: "Derecho Tributario", abre: [] },
    { nombre: "Contratos", abre: ["Derecho de Familia"] },
    { nombre: "Derecho Procesal Penal", abre: [] },
    { nombre: "Parte Especial del Derecho Penal", abre: [] },
    { nombre: "Derecho, Innovación y Tecnología", abre: [] },
    { nombre: "Destrezas de Asesoría Legal", abre: ["Redacción Forense", "Negociación y Mediación", "Litigación Oral"] }
  ],
  "Cuarto Año - Octavo Semestre": [
    { nombre: "Ética Profesional", abre: ["Seminario de Investigación", "Derecho, Género e Inclusión"] },
    { nombre: "Derecho de Familia", abre: ["Derecho Sucesorio"] },
    { nombre: "Redacción Forense", abre: ["Consultorio Jurídico I"] },
    { nombre: "Negociación y Mediación", abre: ["Consultorio Jurídico I"] },
    { nombre: "Litigación Oral", abre: ["Consultorio Jurídico I"] }
  ],
  "Quinto Año - Noveno Semestre": [
    { nombre: "Electivo I", abre: ["Electivo II", "Electivo III", "Electivo IV"] },
    { nombre: "Derecho Sucesorio", abre: [] },
    { nombre: "Seminario de Investigación", abre: [] },
    { nombre: "Derecho, Género e Inclusión", abre: [] },
    { nombre: "Consultorio Jurídico I", abre: [] }
  ],
  "Quinto Año - Décimo Semestre": [
    { nombre: "Electivo II", abre: [] },
    { nombre: "Electivo III", abre: [] },
    { nombre: "Electivo IV", abre: [] },
    { nombre: "Consultorio Jurídico II", abre: [] },
    { nombre: "Actividad Final de Graduación", abre: [] }
  ]
};

// ----- Variables Globales -----
const contenedor = document.getElementById("malla");
let estados = {};

// ----- Cargar progreso guardado -----
if (localStorage.getItem("mallaEstados")) {
  estados = JSON.parse(localStorage.getItem("mallaEstados"));
}

// ----- Guardar progreso -----
function guardarProgreso() {
  localStorage.setItem("mallaEstados", JSON.stringify(estados));
}

// ----- Renderizado Visual -----
for (let semestre in malla) {
  const divSemestre = document.createElement("div");
  divSemestre.className = "semestre";
  divSemestre.innerHTML = `<h2>${semestre}</h2>`;

  malla[semestre].forEach(ramo => {
    if (!(ramo.nombre in estados)) estados[ramo.nombre] = false;
    const divRamo = document.createElement("div");
    divRamo.className = "ramo bloqueado";
    divRamo.dataset.nombre = ramo.nombre;
    divRamo.textContent = ramo.nombre;
    divSemestre.appendChild(divRamo);
  });

  contenedor.appendChild(divSemestre);
}

// ----- Verificar si cumple requisitos -----
function requisitosCumplidos(ramoNombre) {
  const requisitos = [];
  for (let semestre in malla) {
    malla[semestre].forEach(ramo => {
      if (ramo.abre.includes(ramoNombre)) requisitos.push(ramo.nombre);
    });
  }
  return requisitos.every(req => estados[req] === true);
}

// ----- Bloquear en cascada -----
function bloquearCascada(ramoNombre) {
  for (let semestre in malla) {
    malla[semestre].forEach(ramo => {
      if (ramo.abre.includes(ramoNombre)) {
        if (estados[ramo.nombre]) {
          estados[ramo.nombre] = false;
          const div = document.querySelector(`.ramo[data-nombre="${ramo.nombre}"]`);
          div.classList.add("bloqueado");
          div.classList.remove("aprobado");
          bloquearCascada(ramo.nombre);
        }
      }
    });
  }
}

// ----- Actualizar visualmente en tiempo real -----
function actualizarVisual() {
  document.querySelectorAll(".ramo").forEach(div => {
    const nombre = div.dataset.nombre;
    div.classList.remove("aprobado", "bloqueado");

    if (estados[nombre]) {
      div.classList.add("aprobado");
    } else if (!requisitosCumplidos(nombre) && !esInicial(nombre)) {
      div.classList.add("bloqueado");
    }
  });
}

// ----- Desbloquear ramos si cumplen requisitos -----
function actualizarDesbloqueos() {
  document.querySelectorAll(".ramo").forEach(div => {
    const nombre = div.dataset.nombre;
    if (requisitosCumplidos(nombre) && !estados[nombre]) {
      div.classList.remove("bloqueado");
    }
  });
}

// ----- Es un ramo inicial (sin requisitos) -----
function esInicial(nombre) {
  return !Object.values(malla).flat().some(r => r.abre.includes(nombre));
}

// ----- Eventos en tiempo real -----
function agregarEventos() {
  document.querySelectorAll(".ramo").forEach(div => {
    const nombre = div.dataset.nombre;

    // Restaurar estados al cargar
    if (estados[nombre]) {
      div.classList.add("aprobado");
      div.classList.remove("bloqueado");
    }

    div.addEventListener("click", () => {
      if (div.classList.contains("bloqueado")) return;

      estados[nombre] = !estados[nombre];

      if (estados[nombre]) {
        div.classList.add("aprobado");
      } else {
        div.classList.remove("aprobado");
        bloquearCascada(nombre);
      }

      actualizarDesbloqueos();
      actualizarVisual();
      guardarProgreso();
    });
  });
}

// ----- Desbloquear iniciales -----
function desbloquearIniciales() {
  document.querySelectorAll(".ramo").forEach(div => {
    const nombre = div.dataset.nombre;
    if (esInicial(nombre) && !estados[nombre]) {
      div.classList.remove("bloqueado");
    }
  });
}

// ----- Inicialización -----
desbloquearIniciales();
actualizarVisual();
agregarEventos();

