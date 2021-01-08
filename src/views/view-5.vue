<template>
  <main
    id="data"
    class="shadow flex flex-col items-center justify-center bg-gray-200 h-full"
  >
    <div class="flex flex-col items-center justify-center py-10">
      <div class="text-6xl items-center font-black text-indigo-900">
        Unidad 3
      </div>
      <div class="text-xl font-medium text-indigo-900">
        <p>Tecnologías WAN!</p>
      </div>
    </div>
    <div class="flex h-full px-10 items-center justify-center flex-col w-3/4">
      <div class="text-left w-full">
        <div class="text-6xl font-black text-indigo-900 ">
          3.5
        </div>
        <div class="text-xl font-bold text-indigo-900 py-5">
          Configuración de dispositivos WAN
        </div>
      </div>

      <div class="text-justify">
        <p class="leading-8">
          Las tecnologías WAN en su mayoría utilizan transmisiones seriales. Al
          seleccionar una implementación WAN, se debe hacer coincidir la
          tecnología WAN con el tipo de dispositivos requeridos.
        </p>
        <ul class="leading-8 my-5">
          <li>
            <b>
              Dispositivo de traducción y control: módem, CSU/DSU y Router.
            </b>
          </li>
          <div class="flex align-center justify-center">
            <img
              class="img my-5 rounded"
              src="../assets/modem.png"
              alt="modem"
            />
          </div>
          <li>
            <b>
              Oficina central y equipo local del cliente.
            </b>
          </li>
          <div class="flex align-center justify-center">
            <img
              class="img my-5 rounded"
              src="../assets/empresa.png"
              alt="empresa"
            />
          </div>
          <li>
            <b>
              Estándares de la capa física: HSSI, V.35, RS232.
            </b>
          </li>
          <div class="flex align-center justify-center">
            <img class="img my-5 rounded" src="../assets/hsi.jpg" alt="hsi" />
          </div>
          <li>
            <b>
              Señalización o codificación, velocidad de enlace
            </b>
          </li>
          <div class="flex align-center justify-center">
            <img
              class="img-2 my-5 rounded"
              src="../assets/señal.jpg"
              alt="señal"
            />
          </div>
        </ul>
      </div>
      <div class="py-5">
        <router-link
          class="hover:text-yellow-700 hover:bg-gray-300 transition duration-500 rounded-md border border-gray-600 shadow-sm px-4 py-3"
          :to="{ name: 'home' }"
        >
          Regresar
        </router-link>
      </div>
    </div>
  </main>
</template>

<style scoped>
ul {
  list-style: inside !important;
}
.img {
  width: 500px;
}
.img-2 {
  width: 700px;
}
</style>
