import React from 'react';
import '../stylesheets/Testimonio.css';


// Props nos permite modifcar el contenido dentro de jsx y hacer cotenido dinamico. Para eso ponemos props.loquesea y esto nos permite invocarlo en el componente que invoquemos en App.js por ejemplo. Esto permite conservar la estructura del componente y modificar la informacion. Como resultado tenemos un componente totalemnte reutilizable
function Testimonio(props){
  return(
    // Contenedor principal
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        // require hace que se pueda importar la imagen en src, no hay que olvidarse de poner antes {} para asi introducir codigo .js 
        // (plantillas literales) `` las comillas invertidas permiten introducir parametros de JS dentro de strings y enlaces. Asi se puede modificar el contenido de forma dinamica
        src={require(`../img/imagen-${props.imagen}.png`)}
        alt={props.altFoto}
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> in {props.pais}
          </p>
        <p className='cargo-testimonio'>
          {props.cargo} at <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
};

// Como exportar el componente por defecto, siempre hay que hacerlo para que se pueda importar en otro archivo. Sino va a dar error
export default Testimonio;