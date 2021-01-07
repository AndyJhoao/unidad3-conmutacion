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
              3.5
            </div>
            <div class="text-xl font-bold text-indigo-900 py-5">
              Configuración de dispositivos WAN
            </div>
            <div class="text-justify">
              Las tecnologías WAN en su mayoría utilizan transmisiones seriales.
              Al seleccionar una implementación WAN, se debe hacer coincidir la
              tecnología WAN con el tipo de dispositivos requeridos.Dispositivo
              de traducción y control: módem, CSU/DSU y Router.Oficina central y
              equipo local del cliente.Estándares de la capa física: HSSI, V.35,
              RS232.Señalización o codificación, velocidad de enlace
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
