// Registrando el componente en Collider.js
AFRAME.registerComponent("flying-birds", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      // ID
      var id = `hurdle${i}`;

      // Variables de posición
      var posX = Math.random() * 3000 + -1000;
      var posY = Math.random() * 2 + -1;
      var posZ = Math.random() * 3000 + -1000;

      var position = { x: posX, y: posY, z: posZ };

      // Llamada a la función
      this.flyingBirds(id, position);
    }
  },
  flyingBirds: (id, position) => {
    // Obteniendo el elemento del terreno
    var terrainEl = document.querySelector("#terrain");

    // Creando la entidad del modelo del pájaro
    var birdEl = document.createElement("a-entity");

    // Estableciendo múltiples atributos
    birdEl.setAttribute("id", id);

    birdEl.setAttribute("position", position);
    birdEl.setAttribute("scale", { x: 500, y: 500, z: 500 });

    // Establecer el atributo del modelo gLTF
    birdEl.setAttribute("gltf-model", "./assets/models/flying_bird/scene.gltf");

    // Establecer 'animation mixer' de los modelos con animaciones
    birdEl.setAttribute("animation-mixer", {});

    birdEl.setAttribute("static-body", {
      shape: "sphere",
      sphereRadius: 5,
    });

    birdEl.setAttribute("game-play", {
      elementId: `#${id}`
    });
    // Agregar la entidad del págaro como hija de la entidad del terreno
    terrainEl.appendChild(birdEl);
  },
});
