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
          3.1
        </div>
        <div class="text-xl font-bold text-indigo-900 py-5">
          Estándares
        </div>
      </div>

      <div class="text-justify">
        <p class="leading-8">
          Los protocolos de capa física WAN describen cómo proporcionar
          conexiones eléctricas, mecánicas, operacionales, y funcionales para
          los servicios de una red de área amplia. Estos servicios se obtienen
          en la mayoría de los casos de proveedores de servicio WAN tales como
          las compañías telefónicas, portadoras alternas, y agencias de Correo,
          Teléfono, y Telégrafo (PTT: Post, Telephone and Telegraph).<br />Los
          protocolos de enlace de datos WAN describen cómo los marcos se llevan
          entre los sistemas en un único enlace de datos. Incluyen los
          protocolos diseñados para operar sobre recursos punto a punto
          dedicados, recursos multipunto basados en recursos dedicados, y los
          servicios conmutados multiacceso tales como Frame Relay.<br />Los
          estándares WAN son definidos y manejados por un número de autoridades
          reconocidas incluyendo las siguientes agencias:<br />
        </p>

        <ul class="leading-8 my-5">
          <li>
            <b>
              Telecommunication Union-Telecommunication Standardization Sector (
              ITU-T ), antes el Consultative Committee for Intemational
              Telegraph and Telephone ( CCITT ).
            </b>
          </li>
          <div class="flex align-center justify-center">
            <img class="img my-5" src="../assets/itu-c.png" alt="ituc" />
          </div>

          <li>
            <b>
              Intemational Organization for Standardization ( ISO )
            </b>
          </li>
          <div class="flex align-center justify-center">
            <img class="img rounded my-5" src="../assets/iso.svg" alt="iso" />
          </div>
          <li>
            <b>
              Intemet Engineering Task Force ( IETF ).
            </b>
          </li>
          <div class="flex align-center justify-center">
            <img class="img my-5" src="../assets/ietf.png" alt="ietf" />
          </div>
          <li>
            <b>
              Electronic Industries Association (ETA).
            </b>
          </li>
          <div class="flex align-center justify-center">
            <img class="img my-5" src="../assets/eta.png" alt="eta" />
          </div>
        </ul>
        <p class="leading-8">
          <b>Capa Física:</b> WAN La capa física WAN describe la interfaz entre
          el equipo terminal de datos (DTE) y el equipo de conexión de los datos
          (DCE). Típicamente, el DCE es el proveedor de servicio, y el DTE es el
          dispositivo asociado. En este modelo, los servicios ofrecidos al DTE
          se hacen disponibles a través de un módem o unidad de servicio del
          canal/unidad de servicios de datos (CSU / DSU). Algunos estándares de
          la capa física que especifican esta interfaz son:
        </p>
        <div class="flex align-center justify-center">
          <img class="img my-5" src="../assets/ethe.jpg" alt="ethe" />
        </div>
        <ul class="leading-8 my-5">
          <li>
            <b> EIA/TIA-232D: </b>Esta norma fue definida como una interfaz
            estándar para conectar un DTE a un DCE.
          </li>
          <li>
            <b>
              EIA/TIA-449:
            </b>
            Junto a la 422 y 423 forman la norma para transmisión en serie que
            extienden las distancias y velocidades de transmisión más allá de la
            norma 232.
          </li>
          <li>
            <b> V.35: </b>Según su definición original, serviría para conectar
            un DTE a un DCE síncrono de banda ancha (analógico) que operara en
            el intervalo de 48 a 168 kbps.
          </li>
          <li>
            <b> X.21: </b>Estándar CCITT para redes de conmutación de circuitos.
            Conecta un DTE al DCE de una red de datos pública.
          </li>
          <li>
            <b>
              G.703:
            </b>
            Recomendaciones del ITU-T, antiguamente CCITT, relativas a los
            aspectos generales de una interfaz.
          </li>
          <li>
            <b>
              EIA-530:
            </b>
            Presenta el mismo conjunto de señales que la EIA-232D.
          </li>
          <li>
            <b>
              High-Speed Serial Interface (HSSI):
            </b>
            Estándar de red para las conexiones seriales de alta velocidad
            (hasta 52 Mbps) sobre conexiones WAN.
          </li>
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
  width: 200px;
}
</style>
