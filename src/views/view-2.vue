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
              3.2
            </div>
            <div class="text-xl font-bold text-indigo-900 py-5">
              Tipos de enlaces: conmutados, dedicados
            </div>
            <div class="text-justify">
              ENLACES COMUTADOSLos enlaces conmutados se dividen en dos tipos:
              Analógicos: llegan hasta velocidades de 53 kbpspara el downlink y
              hasta de 48 kbps para el uplink.Digitales: transmiten a 64 kbps o
              128 kbps. Estos últimos son conocidos como enlaces RDSI (Red
              Digital de Servicios Integrados).ENLACES DEDICADOSFueron la
              primera tecnología WAN que se adoptó usando la infraestructura de
              voz de los distintos operadores de telefonía. Se necesitaban
              conexiones físicas reales necesitando de un proveedor en cada
              sitio resultando en una solo línea de comunicación entre dos
              partes.Son enlaces donde solo interviene la red de transporte del
              proveedor de servicios.Para el mercado corporativo comúnmente van
              desde los 64 kbit/s hasta los.Son enlaces donde solo interviene
              la red de transporte del proveedor de servicios.Vandesde los 64
              kbps a 2048 kbps.Elevada eficiencia en las transmisiones.Tarifas
              planas (sin influencia del tráfico cursado) en función del ancho
              de banda contratado.
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
