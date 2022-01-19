
import './App.css';

import {FormInput} from './components/FormInput.jsx'

//handles

const handleSubmit = (e) =>{
  console.log(e)
  e.preventDefault();
  const subData = new FormData(e.target)
  console.log(subData)
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
