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
          3.2
        </div>
        <div class="text-xl font-bold text-indigo-900 py-5">
          Tipos de enlaces: conmutados, dedicados
        </div>
      </div>

      <div class="text-justify">
        <p class="leading-8">
          <b>ENLACES COMUTADOS</b><br />
          Los enlaces conmutados se dividen en dos tipos:
        </p>

        <ul>
          <li>
            <b>Analógicos:</b> llegan hasta velocidades de 53 kbpspara el
            downlink y hasta de 48 kbps para el uplink.
          </li>
          <li>
            <b>Digitales:</b> transmiten a 64 kbps o 128 kbps. Estos últimos son
            conocidos como enlaces RDSI (Red Digital de Servicios Integrados).
          </li>
        </ul>
        <div class="flex align-center justify-center">
          <img class="img my-5" src="../assets/conmited.jpg" alt="conmuted" />
        </div>
        <br />
        <b>ENLACES DEDICADOS</b>
        <br /><br />
        Fueron la primera tecnología WAN que se adoptó usando la infraestructura
        de voz de los distintos operadores de telefonía. Se necesitaban
        conexiones físicas reales necesitando de un proveedor en cada sitio
        resultando en una solo línea de comunicación entre dos partes.
        <ul>
          <li>
            Son enlaces donde solo interviene la red de transporte del proveedor
            de servicios.
          </li>
          <li>
            Para el mercado corporativo comúnmente van desde los 64 kbit/s hasta
            los.
          </li>
          <li>
            Son enlaces donde solo interviene la red de transporte del proveedor
            de servicios.
          </li>
          <li>Vandesde los 64 kbps a 2048 kbps.</li>
          <li>Elevada eficiencia en las transmisiones.</li>
          <li>
            Tarifas planas (sin influencia del tráfico cursado) en función del
            ancho de banda contratado.
          </li>
        </ul>
        <div class="flex align-center justify-center">
          <img
            class="img my-5 rounded"
            src="../assets/dedicated.jpg"
            alt="dedicated"
          />
        </div>
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
</style>
