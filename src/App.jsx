import componentImg from './assets/components.png';

import { CORE_CONCEPTS } from './data.js'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
const myData = [
  'David', 
  'Sánchez', 
  'Sofware Developer',
  '21 years old almost 22 :('
];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header () {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

function PersonalData (props) {
  

  return(
    <div>
      <h2>Nombre: {props.nombre}</h2>
      <h2>Apellido: {props.apellido}</h2>
      <h2>Edad: {props.Edad}</h2>
      <h2>Título: {props.Profesion}</h2>      
    </div>
  );
}

function CoreConcept(props){
  return (
    <li>
      <img src={props.image} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>      
    </li>
  );
}

function App() {
  const name = myData[0];
  return (
    <div>      
      <Header/>
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
            image={componentImg}
            title='Components'
            description = 'The core UI building block - compose the user interface by combining multiple components.'
            />
            <CoreConcept 
            image= {CORE_CONCEPTS[1].image}
            title = {CORE_CONCEPTS[1].title}
            description = {CORE_CONCEPTS[1].description}
            />
            <CoreConcept 
            image= {CORE_CONCEPTS[2].image}
            title = {CORE_CONCEPTS[2].title}
            description = {CORE_CONCEPTS[2].description}
            />
             <CoreConcept 
            image= {CORE_CONCEPTS[3].image}
            title = {CORE_CONCEPTS[3].title}
            description = {CORE_CONCEPTS[3].description}
            />
             {/* <CoreConcept 
            image= {CORE_CONCEPTS[0].image}
            title = {CORE_CONCEPTS[0].title}
            description = {CORE_CONCEPTS[0].description}
            /> */}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;