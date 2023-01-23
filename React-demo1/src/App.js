import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Accordionex from './accordion';
import Modalex from './Modalex';

function App() {
  const arr = [{id:101,name:"Jhon",email:"jhon@gmail.com"},{id:102,name:"Jack",email:"jack@gmail.com"},{id:103,name:"Foo"},{id:104,name:"Bar"},{id:105,name:"Tom"},]
  return (
    <div className="App">
      <Modalex myarr={arr}/>
    </div>
  );
}

export default App;
