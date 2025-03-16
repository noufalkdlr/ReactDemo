import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept/CoreConcept.jsx'

import { CORE_CONCEPTS } from './data.js'





function App() {
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

      </main>
    </div>
  );
}

export default App;
