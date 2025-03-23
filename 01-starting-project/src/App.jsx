import { useState } from 'react';

import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx';

import { CORE_CONCEPTS } from './data.js'
import { EXAMPLES } from './data.js';





function App() {

  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelection(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a Topic</p>

  if (selectedTopic) {
    tabContent = (
      <div id='tab-content' >
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>

      </div>

    )
  }

  return (
    <div>
      <Header />

      <main>
        <section id='core-concepts'>
          <h2>Time to get started!</h2>

          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept {...conceptItem} />)}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              image={CORE_CONCEPTS[3].image}
              description={CORE_CONCEPTS[3].description}
            /> */}
          </ul>
        </section>

        <section id='examples'>

          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelection('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelection('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelection('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelection('state')}>State</TabButton>
          </menu>

          {tabContent}

        </section>


      </main>
    </div>
  );
}

export default App;
