<template>
  <header id="header-id" class="shadow flex flex-col bg-image h-screen fondo">
    <div
      class="shadow-xl fixed flex justify-end py-5 w-screen bg-blue-200 z-10"
    >
      <nav class="flex justify-between w-70 px-10">
        <div>
          <a
            class="w-24 mx-5 hover:text-gray-500 transition duration-500"
            href="#header-id"
            >Inicio</a
          >
        </div>
        <div>
          <a
            class="w-24 mx-5 hover:text-gray-500 transition duration-500"
            href="#info"
            >Colaborador</a
          >
        </div>
        <div>
          <a
            class="w-24 mx-5 hover:text-gray-500 transition duration-500"
            href="#data"
            >Temas</a
          >
        </div>
      </nav>
    </div>
    <div class="flex flex-col h-screen py-16 px-10 content-start">
      <div>
        <p class="sm:text-6xl font-black text-indigo-900 text-5xl">Unidad 3</p>
      </div>
      <div class="flex flex-col justify-center h-72 w-72 px-3">
        <div class="py-5 text-xl font-medium text-indigo-900">
          <p>Tecnologías WAN</p>
          <br />
          <p>
            Una WAN (Wide Area Network o Red de Cobertura Amplia) es una red de
            comunicación de datos que opera más allá del alcance geográfico de
            una LAN. Una de las diferencias primordiales entre una WAN.
          </p>
        </div>
        <div class="py-5 my-3">
          <a
            class="w-24 hover:text-yellow-700 hover:bg-gray-300 transition duration-500 rounded-md border border-gray-600 shadow-sm px-4 py-3"
            href="#data"
            >Leer Más...</a
          >
        </div>
      </div>
      <div class="flex h-20 xl:flex-row flex-col align-center">
        <nav class="flex xl:justify-center xl:h-64 align-center">
          <div
            class="px-3 w-16 h-16 hover:text-gray-500 transition duration-500 transform hover:-translate-y-1 hover:scale-110"
          >
            <a href="https://www.facebook.com/"
              ><img src="../assets/facebook-brands.svg" alt="facebook"
            /></a>
          </div>
          <div
            class="px-3 w-16 h-16 hover:text-gray-500 transition duration-500 transform hover:-translate-y-1 hover:scale-110"
          >
            <a href="https://www.instagram.com/"
              ><img src="../assets/instagram-brands.svg" alt="instagram"
            /></a>
          </div>
          <div
            class="px-3 w-16 h-16 hover:text-gray-500 transition duration-500 transform hover:-translate-y-1 hover:scale-110"
          >
            <a href="https://twitter.com/home?lang=es"
              ><img src="../assets/twitter-brands.svg" alt="twitter"
            /></a>
          </div>
        </nav>
        <div class="w-full h-full flex align-center justify-center">
          <img
            class="fondo-2 xl:bottom-100 xl:left-50 bottom-0 left-0 "
            src="../assets/wan-header.png"
            alt="wan"
          />
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
.fondo {
  background-image: url("../assets/fondo3.jpg");
  width: 100%;
}
.fondo-2 {
  width: 800px;
  height: 330px;
}
@media only screen and (max-height: 744px) {
  .h-screen {
    height: 830px !important;
  }
}
</style>
