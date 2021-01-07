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
    <div class="flex h-full">
      <div class="flex flex-col h-full px-10 content-start">
        <div class="flex items-center justify-center">
          <div class="w-3/4 mx-10 ">
            <div class="text-6xl font-black text-indigo-900">
              3.1
            </div>
            <div class="text-xl font-bold text-indigo-900 py-5">
              Estándares
            </div>
            <div class="text-justify">
              Los protocolos de capa física WAN describen cómo proporcionar
              conexiones eléctricas, mecánicas, operacionales, y funcionales
              para los servicios de una red de área amplia. Estos servicios se
              obtienen en la mayoría de los casos de proveedores de servicio
              WANtales como las compañías telefónicas, portadoras alternas, y
              agencias de Correo, Teléfono, y Telégrafo (PTT: Post, Telephone
              and Telegraph).Los protocolos de enlace de datos WAN describen
              cómo los marcos se llevan entre los sistemas en un único enlace de
              datos. Incluyen los protocolos diseñados para operar sobre
              recursos punto a punto dedicados, recursos multipunto basados en
              recursos dedicados, y los servicios conmutados multiacceso tales
              como Frame Relay.Los estándares WAN son definidos y manejados por
              un número de autoridades reconocidas incluyendo las siguientes
              agencias:International Telecommunication Union-Telecommunication
              Standardization Sector ( ITU-T ), antes el Consultative Committee
              for Intemational Telegraph and Telephone ( CCITT ).Intemational
              Organization for Standardization ( ISO )Intemet Engineering Task
              Force ( IETF ).Electronic Industries Association (ETA).Capa
              Física: WANLa capa física WAN describe la interfaz entre el equipo
              terminal de datos (DTE) y el equipo de conexión de los datos
              (DCE). Típicamente, el DCE es el proveedor de servicio, y el DTE
              es el dispositivo asociado. En este modelo, los servicios
              ofrecidos al DTE se hacen disponibles a través de un módem o
              unidad de servicio del canal/unidad de servicios de datos (CSU /
              DSU). Algunos estándares de la capa física que especifican esta
              interfaz son:EIA/TIA-232D: Esta norma fue definida como una
              interfaz estándar para conectar un DTE a un DCE.EIA/TIA-449:
              Junto a la 422 y 423 forman la norma para transmisión en serie que
              extienden las distancias y velocidades de transmisión más allá de
              la norma 232.V.35: Según su definición original, serviría para
              conectar un DTE a un DCE síncrono de banda ancha (analógico) que
              operara en el intervalo de 48 a 168 kbps.X.21: Estándar CCITT
              para redes de conmutación de circuitos. Conecta un DTE al DCE de
              una red de datos pública.G.703: Recomendaciones del ITU-T,
              antiguamente CCITT, relativas a los aspectos generales de una
              interfaz.EIA-530: Presenta el mismo conjunto de señales que la
              EIA-232D.High-Speed Serial Interface (HSSI): Estándar de red para
              las conexiones seriales de alta velocidad (hasta 52 Mbps) sobre
              conexiones WAN.
            </div>
            <div class="py-5">
              <router-link :to="{ name: 'home' }">
                Regresar
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
