import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS } from './data.js'

function App() {
  return (
    <div>      
      <Header/>
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
          <CoreConcept 
            image= {CORE_CONCEPTS[0].image}
            title = {CORE_CONCEPTS[0].title}
            description = {CORE_CONCEPTS[0].description}
            />
            <CoreConcept 
            {... CORE_CONCEPTS[1]}
            />
            <CoreConcept 
            {... CORE_CONCEPTS[2]}
            />
            <CoreConcept 
            {... CORE_CONCEPTS[3]}
            />             
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;