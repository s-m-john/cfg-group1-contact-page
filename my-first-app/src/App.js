import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <header className="App-header">
        {/* Deleted the text that automatically appears here to add my own*/}
        <h1>All about us!</h1>        
        <h2>Anne</h2>              
        
      </header>

      <ul className="App-ordered_list">
          <li>My favourite cuisine is Vietnamese but for desserts always head to Italy</li>
          <li>Outside the kitchen I like to run and cross-stitch.</li>
          
        </ul>
      
      <h2>Georgia</h2>
      <ul className="G-App_ordered_list"> 
        <li>My favourite food is Chinese but I do love a pizza!</li>
        <li>My hobbies include rock climbing, snowboarding and playing with my rabbits.</li>
      </ul>

    </div>
  );
}

export default App;
