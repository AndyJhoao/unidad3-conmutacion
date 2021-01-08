<template>
  <main
    id="data"
    class="shadow flex flex-col items-center justify-center bg-gray-200 h-full py-2"
  >
    <!-- <div class="fondo"></div> -->
    <div class="flex flex-col items-center justify-center py-10">
      <div class="sm:text-6xl items-center font-black text-indigo-900 text-5xl">
        Unidad 3
      </div>
      <div class="text-xl font-medium text-indigo-900">
        <p>Tecnologías WAN!</p>
      </div>
    </div>
    <div class="flex h-full">
      <div class="flex flex-col h-full content-start">
        <div
          class="xl:flex md:flex md:flex-row items-center align-center justify-center flex-col"
        >
          <div
            class="xl:w-1/4 md:w-2/4 w-screen xl:px-0 md:px-10 px-16 xl:mx-20 md:mx-0 mx-0 "
          >
            <div class="sm:text-6xl font-black text-indigo-900 text-5xl">
              3.1
            </div>
            <div class="text-xl font-bold text-indigo-900 py-5 title-header">
              Estándares
            </div>
            <div class="text-justify parrafo">
              Los protocolos de capa física WAN describen cómo proporcionar
              conexiones eléctricas, mecánicas, operacionales, y funcionales
              para los servicios de una red de área amplia...
            </div>
            <img class="fondo-2" src="../assets/wan-header.png" alt="wan" />
            <div class="py-5 text-center">
              <router-link
                class="hover:text-yellow-700 hover:bg-gray-300 transition duration-500 rounded-md border border-gray-600 shadow-sm px-4 py-3"
                :to="{ name: 'view-1' }"
              >
                Leer más...
              </router-link>
            </div>
            <hr class="my-10" />
          </div>
          <div
            class="xl:w-1/4 md:w-2/4 w-screen xl:px-0 md:px-10 px-16 xl:mx-20 md:mx-0 mx-0"
          >
            <div class="sm:text-6xl font-black text-indigo-900 text-5xl">
              3.2
            </div>
            <div class="text-xl font-bold text-indigo-900 py-5 title-header">
              Tipos de enlaces: conmutados, dedicados
            </div>
            <div class="text-justify parrafo">
              Los enlaces conmutados se dividen en dos tipos: Analógicos: llegan
              hasta velocidades de 53 kbpspara el downlink y hasta de 48 kbps
              para el uplink.
            </div>
            <img class="fondo-2" src="../assets/wan-header.png" alt="wan" />
            <div class="py-5 text-center">
              <router-link
                class="hover:text-yellow-700 hover:bg-gray-300 transition duration-500 rounded-md border border-gray-600 shadow-sm px-4 py-3"
                :to="{ name: 'view-2' }"
              >
                Leer más...
              </router-link>
            </div>
            <hr class="my-10" />
          </div>
        </div>
        <div
          class="xl:flex md:flex md:flex-row items-center justify-center flex-col"
        >
          <div
            class="xl:w-1/4 md:w-2/4 w-screen xl:px-0 md:px-10 px-16 xl:mx-20 md:mx-0 mx-0"
          >
            <div class="sm:text-6xl font-black text-indigo-900 text-5xl">
              3.3
            </div>
            <div class="text-xl font-bold text-indigo-900 py-5 title-header">
              Topologías WAN
            </div>
            <div class="text-justify parrafo">
              En esta topología cada nodo se conecta a otro a través de
              circuitos dedicados, es decir, canales que son arrendados por
              empresas o instituciones a las compañías telefónicas.
            </div>
            <img class="fondo-2" src="../assets/wan-header.png" alt="wan" />
            <div class="py-5 text-center">
              <router-link
                class="hover:text-yellow-700 hover:bg-gray-300 transition duration-500 rounded-md border border-gray-600 shadow-sm px-4 py-3"
                :to="{ name: 'view-3' }"
              >
                Leer más...
              </router-link>
            </div>
            <hr class="my-10" />
          </div>
          <div
            class="xl:w-1/4 md:w-2/4 w-screen xl:px-0 md:px-10 px-16 xl:mx-20 md:mx-0 mx-0"
          >
            <div class="sm:text-6xl font-black text-indigo-900 text-5xl">
              3.4
            </div>
            <div class="text-xl font-bold text-indigo-900 py-5 title-header">
              Tecnologías actuales:PPP, XDSL, Frame Relay, ISDN, ATM
            </div>
            <div class="text-justify parrafo">
              Tecnología PPP: Point-to-point Protocol(en español Protocolo punto
              a punto), también conocido por su acrónimo PPP, es un protocolo de
              nivel de enlace estandarizado en el documento RFC1661.
            </div>
            <img class="fondo-2" src="../assets/wan-header.png" alt="wan" />
            <div class="py-5 text-center">
              <router-link
                class="hover:text-yellow-700 hover:bg-gray-300 transition duration-500 rounded-md border border-gray-600 shadow-sm px-4 py-3"
                :to="{ name: 'view-4' }"
              >
                Leer más...
              </router-link>
            </div>
            <hr class="my-10" />
          </div>
        </div>
        <div class="flex items-center justify-center">
          <div
            class="xl:w-1/4 md:w-2/4 w-screen xl:px-0 md:px-10 px-16 xl:mx-20 md:mx-0 mx-0"
          >
            <div class="sm:text-6xl font-black text-indigo-900 text-5xl">
              3.5
            </div>
            <div class="text-xl font-bold text-indigo-900 py-5 title-header">
              Configuración de dispositivos WAN
            </div>
            <div class="text-justify parrafo">
              Las tecnologías WAN en su mayoría utilizan transmisiones seriales.
              Al seleccionar una implementación WAN, se debe hacer coincidir la
              tecnología WAN con el tipo de dispositivos requeridos.
            </div>
            <img class="fondo-2" src="../assets/wan-header.png" alt="wan" />
            <div class="py-5 text-center ">
              <router-link
                class="hover:text-yellow-700 hover:bg-gray-300 transition duration-500 rounded-md border border-gray-600 shadow-sm px-4 py-3"
                :to="{ name: 'view-5' }"
              >
                Leer más...
              </router-link>
            </div>
            <hr class="my-10" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
/* .image-size {
} */
.title-header {
  height: 100px;
}
.parrafo {
  height: 140px;
}

@media only screen and (max-width: 470px) {
  .title-header {
    height: 130px;
  }
  .parrafo {
    height: 180px;
  }
}
</style>
