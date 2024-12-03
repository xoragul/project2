import { RouterProvider } from 'react-router-dom';
import './App.css';
import route from './routing';


function App() {
  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
