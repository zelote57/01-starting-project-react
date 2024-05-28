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

function App() {

  const name = myData[0];

  return (
    <div>      
      <Header/>
      <main>
        <h2>Time to get started!</h2>
        <PersonalData nombre={name} apellido={myData[1]} Edad={myData[3]} Profesion={myData[2]}/> 
      </main>
    </div>
  );
}

export default App;
