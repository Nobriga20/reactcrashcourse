
import './App.css';
import Todo from "./components/Todo.jsx"
import Title from './components/Title.jsx'
import counter from "./components/counter.jsx"


//esling-disable-next-line//
function App() {
  let isModalOpen = false
  return (
    <div>
      <Title />
      <Todo title="finish frontend simplified"
      parapgraph="code along with frontend simplified step by step"
      />
      
      <Todo title="finish interview section" 
      paragraph="finish every interview question in the next 6 weeks"
      />\
      <Todo title="land a 100k job" 
      paragraph="apply to 100 jobs"
      />
    </div>
  );
}

export default App;
