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
          3.3
        </div>
        <div class="text-xl font-bold text-indigo-900 py-5">
          Topologías WAN
        </div>
      </div>

      <div class="text-justify">
        <p class="leading-8">
          <b>Punto a punto</b><br />
          En esta topología cada nodo se conecta a otro a través de circuitos
          dedicados, es decir, canales que son arrendados por empresas o
          instituciones a las compañías telefónicas. Dichos canales están
          siempre disponibles para la comunicación entre los dos puntos.
        </p>
        <br />
        <p>
          Esta configuración es solo funcional para pequeñas WANs ya que todos
          los nodos deben participar en el tráfico, es decir que si aumenta la
          cantidad de nodos aumenta la cantidad de tráfico y esto con el
          consiguiente encarecimiento de la red.
        </p>
        <div class="flex align-center justify-center">
          <img
            class="img my-5 rounded"
            src="../assets/punto-punto.jpg"
            alt="punto"
          />
        </div>
        <br />
        <p>
          <b>Anillo</b><br />
          En la topología de anillo cada nodo es conectado a otros dosmás
          formando un patrón de anillo. Esta topología tiene dos ventajas: por
          un lado si existe algún problema en las conexiones en un cable, la
          información le sigue llegando al nodo usando otro recorrido y si algún
          nodo está muy ocupado el tráfico se puede derivar hacia otros nodos.
        </p>
        <br />
        <p>
          Extender este tipo de redes es más caro que extender una red
          punto-a-punto ya que se necesita al menos un enlace más.
        </p>
        <div class="flex align-center justify-center">
          <img
            class="img my-5 rounded"
            src="../assets/anillo.jpg"
            alt="anillo"
          />
        </div>
        <br />
        <p>
          <b>Estrella</b><br />
          En esta configuración un nodo actúa como punto central de conexión
          para todos los demás, permitiendo asíque en caso de que exista un
          fallo en alguno de los cables los demás nodos no pierdan conexión con
          el nodo central. La principal desventaja de esta topología es que
          algún problema que exista en el nodo central se convierte en un
          desastre total para la redya que se pierde la conexión de todos los
          nodos.
        </p>
        <div class="flex align-center justify-center">
          <img
            class="img my-5 rounded"
            src="../assets/estrella.png"
            alt="estrella"
          />
        </div>
        <br />
        <p>
          <b>Malla</b><br />
          En esta topología la esencia es buscar la interconexión de los nodos
          de tal manera que si uno falla los demás puedan redireccionar los
          datos rápida y fácilmente. Esta topología es la que más tolerancia
          tiene a los fallos porque es la que provee más caminos por donde
          puedan viajar los datos que van de un punto a otro.
        </p>
        <br />
        <p>
          La principal desventaja de las redes tipo malla es su costo, es por
          esto que se ha creado una alternativa que es la red de mallaparcial en
          la cual los nodos más críticos se interconectan entre ellos y los
          demás nodos se interconectan a través de otra topología (estrella,
          anillo).
        </p>
        <div class="flex align-center justify-center">
          <img class="img my-5 rounded" src="../assets/malla.png" alt="malla" />
        </div>
        <br />
        <p>
          <b>Árbol</b><br />Topología de red en la que los nodos están colocados
          en forma de árbol. Desde una visión topológica, la conexión en árbol
          es parecida a una serie de redes en estrella interconectadas salvo en
          que no tiene un nodo central.
        </p>
        <br />
        <p>
          En cambio, tiene un nodo de enlace troncal, generalmente ocupado por
          un hub o switch, desde el que se ramifican los demás nodos.
        </p>
        <br />
        <p>
          La topología en árbol puede verse como una combinación de varias
          topologías en estrella. Tanto la de árbol como la de estrella son
          similares a la de bus cuando el nodo de interconexión trabaja en modo
          difusión.
        </p>
        <div class="flex align-center justify-center">
          <img class="img my-5 rounded" src="../assets/arbol.jpg" alt="arbol" />
        </div>
        <br />
        <p>
          <b>Bús</b><br />
          También conocida como topología lineal de bus, es un diseño simple que
          utiliza un solo cable al cual todas las estaciones se conectan. La
          topología usa un medio de transmisión de amplia cobertura (broadcast
          medium), ya que todas las estaciones pueden recibir las transmisiones
          emitidas por cualquier estación. Como es bastante simple la
          configuración, se puede implementar de manera barata.
        </p>
        <div class="flex align-center justify-center">
          <img class="img my-5 rounded" src="../assets/bus.jpg" alt="bus" />
        </div>
        <br />
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
