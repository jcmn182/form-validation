
import './App.css';

import {FormInput} from './components/FormInput.jsx'

//handles

const handleSubmit = (e) =>{
  e.preventDefault();
  const subData = new FormData(e.target)
  const data = Object.fromEntries(subData.entries())
  console.log(data)
}

function App() {
  return (
    <div className="App">
     <form onSubmit={handleSubmit}>
        <FormInput name="Username" placeholder="Username"/>
        <FormInput name="Email" placeholder="Email"/>
        <FormInput name="Full Name" placeholder="Full Name"/>
        <FormInput name="Sth else" placeholder="Sth else"/>
        <button>Submit</button>
     </form>
    </div>
  );
}

export default App;
