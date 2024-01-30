import './App.css';
import { Outlet } from 'react-router-dom';
function App() {
  return (
 <>
 <div style={{background:''}} className='home'>
<Outlet/>
 </div>
 </>
  );
}

export default App;
