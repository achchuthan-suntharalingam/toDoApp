import './App.css';
import ToDo from './components/ToDo'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <ToDo/>
      <SideBar/>
      <NavBar/>
      
    </div>
  );
}

export default App;
