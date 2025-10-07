import React from 'react';
import Tarjeta from './tarjeta.jsx';
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Sobre nosotros</li>
          <li>Contacto</li>
        </ul>
      </nav>
      <h1 class="titulo">El paty Loco</h1>
      <div className="tarjeta-contenedor">
        <Tarjeta
          Titulo="Swift"
          Descripción="Ofrece hamburguesas de carne en distintos formatos y tamaños."
          Imagen="/imagenes/Swift.png"
        />
        <Tarjeta
          Titulo="Paty"
          Descripción="La más emblemática del país, con variedades como Clásico, Finitas, Línea Especial, etc."
          Imagen=""
        />
        <Tarjeta
          Titulo="Cuisine & Co"
          Descripción="Marca propia de Jumbo, con opciones de carne y veggie."
          Imagen=""
        />
        <Tarjeta
          Titulo="Granja del sol"
          Descripción="Con hamburguesas de carne, pollo y vegetales."
          Imagen=""
        />
        <Tarjeta
          Titulo="La Salteña"
          Descripción="Aunque más conocida por sus tapas, también ofrece hamburguesas."
          Imagen=""
        />
        <Tarjeta
          Titulo="Paladini"
          Descripción="Marca tradicional con hamburguesas de carne y pollo."
          Imagen=""
        />
        <Tarjeta
          Titulo="Veggie Burgers (The Food Truck Store)"
          Descripción="- Opciones gourmet y vegetarianas."
          Imagen=""
        />
      </div>
    </>
  );
}

export default App;
