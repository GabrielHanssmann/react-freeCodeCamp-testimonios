import './App.css';
// importar componente Testimonio
import Testimonio from './components/Testimonio.jsx';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Here is what our alumni say about freeCodeCamp:</h1>
      {/* Pasando los props definidos en Testimonio dentro del componente para que modifique la informacion y se pueda reciclar el componente */}
      <Testimonio
        nombre='Shawn Wang'
        pais='Singapore'
        imagen='1'
        altFoto='hola foto 1'
        cargo='Software Engineer'
        empresa='Amazon'
        testimonio="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
      />

      <Testimonio
        nombre='Sarah Chima'
        pais='Nigeria'
        imagen='2'
        altFoto='hola foto 2'
        cargo='Software Engineer'
        empresa='ChatDesk'
        testimonio="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
      />

      <Testimonio
        nombre='Emma Bostian'
        pais='Sweden'
        imagen='3'
        altFoto='hola foto 3'
        cargo='Software Engineer'
        empresa='Spotify'
        testimonio="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
      />
      </div>
    </div>
  );
}

export default App;
