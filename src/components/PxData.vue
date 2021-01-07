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
          <div class="w-1/4 mx-10 ">
            <div class="text-6xl font-black text-indigo-900">
              3.1
            </div>
            <div class="text-xl font-bold text-indigo-900 py-5">
              Estándares
            </div>
            <div class="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem voluptatum adipisci excepturi eligendi veritatis,
              possimus, ad maiores beatae distinctio nemo, iusto quod. Hic,
              voluptatem?
            </div>
            <div class="py-5">
              <router-link :to="{ name: 'view-1' }">
                Leer más...
              </router-link>
            </div>
          </div>
          <div class="w-1/4 mx-10 ">
            <div class="text-6xl font-black text-indigo-900">
              3.2
            </div>
            <div class="text-xl font-bold text-indigo-900 py-5">
              Tipos de enlaces: conmutados, dedicados
            </div>
            <div class="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem voluptatum adipisci excepturi eligendi veritatis,
              possimus, ad maiores beatae distinctio nemo, iusto quod. Hic,
              voluptatem?
            </div>
            <div class="py-5">
              <router-link :to="{ name: 'view-2' }">
                Leer más...
              </router-link>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <div class="w-1/4 mx-10 ">
            <div class="text-6xl font-black text-indigo-900">
              3.3
            </div>
            <div class="text-xl font-bold text-indigo-900 py-5">
              Topologías WAN
            </div>
            <div class="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem voluptatum adipisci excepturi eligendi veritatis,
              possimus, ad maiores beatae distinctio nemo, iusto quod. Hic,
              voluptatem?
            </div>
            <div class="py-5">
              <router-link :to="{ name: 'view-3' }">
                Leer más...
              </router-link>
            </div>
          </div>
          <div class="w-1/4 mx-10 ">
            <div class="text-6xl font-black text-indigo-900">
              3.4
            </div>
            <div class="text-xl font-bold text-indigo-900 py-5">
              Tecnologías actuales:PPP, XDSL, Frame Relay, ISDN, ATM
            </div>
            <div class="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem voluptatum adipisci excepturi eligendi veritatis,
              possimus, ad maiores beatae distinctio nemo, iusto quod. Hic,
              voluptatem?
            </div>
            <div class="py-5">
              <router-link :to="{ name: 'view-4' }">
                Leer más...
              </router-link>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <div class="w-1/4 mx-10 ">
            <div class="text-6xl font-black text-indigo-900">
              3.5
            </div>
            <div class="text-xl font-bold text-indigo-900 py-5">
              Configuración de dispositivos WAN
            </div>
            <div class="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem voluptatum adipisci excepturi eligendi veritatis,
              possimus, ad maiores beatae distinctio nemo, iusto quod. Hic,
              voluptatem?
            </div>
            <div class="py-5">
              <router-link :to="{ name: 'view-5' }">
                Leer más...
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
