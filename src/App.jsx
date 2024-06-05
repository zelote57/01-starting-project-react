import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';

import { CORE_CONCEPTS } from './data.js'
import { EXAMPLES } from './data.js'

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton){
    setSelectedTopic(selectedButton);
    //console.log(selectedButton);
  }
  
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

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => {handleClick('components')}}>Components</TabButton>
            <TabButton onClick={() => {handleClick('jsx')}} >JSX</TabButton>
            <TabButton onClick={() => {handleClick('props')}} >Props</TabButton>
            <TabButton onClick={() => {handleClick('state')}}>State</TabButton>
          </menu>

          {selectedTopic === undefined ? (
          <p>Please select a topic.</p>
          ) :(
            (
              <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
            )
          )}
          
        </section>
      </main>
    </div>
  );
}

export default App;