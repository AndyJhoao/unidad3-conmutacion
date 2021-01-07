<template>
  <header id="header-id" class="shadow flex flex-col bg-image h-screen">
    <div class="shadow-xl fixed flex justify-end py-5 w-screen bg-blue-200">
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
            >Acerca de</a
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
        <p class="text-6xl font-black text-indigo-900">Unidad 4</p>
      </div>
      <div class="flex flex-col justify-center h-40 px-3">
        <div class="py-5 text-xl font-medium text-indigo-900">
          <p>Tecnologías WAN</p>
        </div>
        <div class="py-5 ">
          <a
            class="w-24 mx-5 hover:text-gray-500 transition duration-500"
            href="#data"
            >Leer Más...</a
          >
        </div>
      </div>
      <div class="flex h-20 ">
        <nav class="flex justify-center items-center">
          <div
            class="px-3 w-16 hover:text-gray-500 transition duration-500 transform hover:-translate-y-1 hover:scale-110"
          >
            <a href="https://www.facebook.com/"
              ><img src="../assets/facebook-brands.svg" alt="facebook"
            /></a>
          </div>
          <div
            class="px-3 w-16 hover:text-gray-500 transition duration-500 transform hover:-translate-y-1 hover:scale-110"
          >
            <a href="https://www.instagram.com/"
              ><img src="../assets/instagram-brands.svg" alt="instagram"
            /></a>
          </div>
          <div
            class="px-3 w-16 hover:text-gray-500 transition duration-500 transform hover:-translate-y-1 hover:scale-110"
          >
            <a href="https://twitter.com/home?lang=es"
              ><img src="../assets/twitter-brands.svg" alt="twitter"
            /></a>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
