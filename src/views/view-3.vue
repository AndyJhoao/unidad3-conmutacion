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
              3.3
            </div>
            <div class="text-xl font-bold text-indigo-900 py-5">
              Topologías WAN
            </div>
            <div class="text-justify">
              Punto a PuntoEn esta topología cada nodo se conecta a otro a
              través de circuitos dedicados, es decir, canales que son
              arrendados por empresas o instituciones a las compañías
              telefónicas. Dichos canales están siempre disponibles para la
              comunicación entre los dos puntos.Esta configuración es solo
              funcional para pequeñas WANs ya que todos los nodos deben
              participar en el tráfico, es decir que si aumenta la cantidad de
              nodos aumenta la cantidad de tráfico y esto con el consiguiente
              encarecimiento de la red.AnilloEn la topología de anillo cada
              nodo es conectado a otros dosmás formando un patrón de anillo.
              Esta topología tiene dos ventajas: por un lado si existe algún
              problema en las conexiones en un cable, la información le sigue
              llegando al nodo usando otro recorrido y si algún nodo está muy
              ocupado el tráfico se puede derivar hacia otros nodos.Extender
              este tipo de redes es más caro que extender una red punto-a-punto
              ya que se necesita al menos un enlace más. EstrellaEn esta
              configuración un nodo actúa como punto central de conexión para
              todos los demás, permitiendo asíque en caso de que exista un fallo
              en alguno de los cables los demás nodos no pierdan conexión con el
              nodo central. La principal desventaja de esta topología es que
              algún problema que exista en el nodo central se convierte en un
              desastre total para la redya que se pierde la conexión de todos
              los nodos.MallaEn esta topología la esencia es buscar la
              interconexión de los nodos de tal manera que si uno falla los
              demás puedan redireccionar los datos rápida y fácilmente. Esta
              topología es la que más tolerancia tiene a los fallos porque es la
              que provee más caminos por donde puedan viajar los datos que van
              de un punto a otro.La principal desventaja de las redes tipo malla
              es su costo, es por esto que se ha creado una alternativa que es
              la red de mallaparcial en la cual los nodos más críticos se
              interconectan entre ellos y los demás nodos se interconectan a
              través de otra topología (estrella, anillo).ÁrbolTopología de red
              en la que los nodos están colocados en forma de árbol. Desde una
              visión topológica, la conexión en árbol es parecida a una serie de
              redes en estrella interconectadas salvo en que no tiene un nodo
              central.En cambio, tiene un nodo de enlace troncal, generalmente
              ocupado por un hub o switch, desde el que se ramifican los demás
              nodos.La topología en árbol puede verse como una combinación de
              varias topologías en estrella. Tanto la de árbol como la de
              estrella son similares a la de bus cuando el nodo de interconexión
              trabaja en modo difusión. BusTambién conocida como topología
              lineal de bus, es un diseño simple que utiliza un solo cable al
              cual todas las estaciones se conectan. La topología usa un medio
              de transmisión de amplia cobertura (broadcast medium), ya que
              todas las estaciones pueden recibir las transmisiones emitidas por
              cualquier estación. Como es bastante simple la configuración, se
              puede implementar de manera barata.
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
