import Data from './Data.js'
import './App.css';
import { useState } from 'react';
import Question from './Question.js';

function App() {
  const [state,setState] = useState(Data);
  const [isExpanded, setIsExpanded] = useState(false);
  
  function handleToggle(){

  }
  return (
    
   <main>
       <h1 className='heading'>Questions</h1>
       <section className='container'>
        {
           state.map((value) =>
            <Question value = {value} />
            
           )
        }
       </section>
    
    

            
    </main>
  );
}

export default App;
