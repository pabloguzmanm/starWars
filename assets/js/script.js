async function obtenerPersonaje(id) {
  const respuesta = await fetch(`https://swapi.dev/api/people/${id}/`);
  const data = await respuesta.json();
  console.log(data.name);
  return data;
}

let cardSeccion1 = document.getElementById("seccion1");
cardSeccion1.addEventListener("click", function () {
  obtenerPersonaje(1);
  console.log("evento click seccion 1");
});

let cardSeccion2 = document.getElementById("seccion2");
cardSeccion2.addEventListener("click", function () {
  console.log("evento click seccion 2");
});

let cardSeccion3 = document.getElementById("seccion3");
cardSeccion3.addEventListener("click", function () {
  console.log("evento click seccion 3");
});

/* Lo que se sebe pintar al hacer click en la card 1 */
let cardInsert1 = `<div class="col-12 col-md-6 col-lg-4">
                    <div
                      id="seccion1"
                      class="single-timeline-content d-flex wow fadeInLeft"
                      data-wow-delay="0.3s"
                      style="
                        visibility: visible;
                        animation-delay: 0.3s;
                        animation-name: fadeInLeft;
                      "
                    >
                      <div class="timeline-icon-seccion1">
                        <i class="fa" aria-hidden="true"></i>
                      </div>
                      <div class="timeline-text">
                      <h4>Nombre:${data.name} </h4>
                        <h6>Estatura:${data.height} </h6>
                        <h6>Peso:${data.mass} </h6>
                      </div>
                    </div>
                  </div>
                </div>`;
