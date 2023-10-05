import './App.css';
import ToDo from './components/ToDo'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import ActivityFeed from './components/ActivityFeed'

function App() {
  return (
    <div className="App">
      <ToDo/>
      <SideBar/>
      <NavBar/>
      <ActivityFeed/>      
    </div>
  );
}

export default App;
