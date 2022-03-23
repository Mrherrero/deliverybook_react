import './App.css';
import ResponsiveAppBar from './components/NavBar'
import ListProducts from './components/ItemListContainer'


function App() {
  return (
    <div className="App">
        <ResponsiveAppBar /> 
        <ListProducts />
    </div>
  );
}

export default App;
