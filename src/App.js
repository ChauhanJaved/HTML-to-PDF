import './App.css';
import Header from './Header';
function App() {
  const handleAddURLClick = () => {
    // Handle Add URL button click logic here
  };

  const handleConvertClick = () => {
    // Handle Convert button click logic here
  };
  return (
    <div className="container" >
      <Header onAddURLClick={handleAddURLClick} onConvertClick={handleConvertClick} />
    </div>
  );
}
export default App;
