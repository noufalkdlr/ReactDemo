import { useState } from 'react';

import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx';

import { CORE_CONCEPTS } from './data.js'





function App() {

  const [selectedTopic, setSelectedTopic] = useState('please select a button');

  function handleSelection(selectedButton) {
    setSelectedTopic(selectedButton);
  }


  return (
    <div>
      <Header />

      <main>
        <section id='core-concepts'>
          <h2>Time to get started!</h2>

          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              image={CORE_CONCEPTS[3].image}
              description={CORE_CONCEPTS[3].description}
            />
          </ul>
        </section>

        <section id='examples'>

          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={()=> handleSelection('Components')}>Components</TabButton>
            <TabButton onSelect={()=> handleSelection('JSX')}>JSX</TabButton>
            <TabButton onSelect={()=> handleSelection('Props')}>Props</TabButton>
            <TabButton onSelect={()=> handleSelection('State')}>State</TabButton>
          </menu>
            {selectedTopic}

        </section>

      </main>
    </div>
  );
}

export default App;
