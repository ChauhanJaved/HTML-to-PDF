import './App.css';
import Header from './components/Header';
import TabsComponent from './components/TabsComponent';
function App() {
  const handleAddURLClick = () => {
    // Handle Add URL button click logic here
  };

  const handleConvertClick = () => {
    // Handle Convert button click logic here
  };
  return (
    <div className="container" >
        <TabsComponent />
    </div>
  );
}
export default App;
