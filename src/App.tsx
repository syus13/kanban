import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Login from "./Pages/login/login";
import Register from './Pages/register/register';
import Kanban from './Pages/kanban/kanban';


const App: React.FC = () =>{ 

  return (
    <>
      <BrowserRouter>          

        <Routes>
          <Route element={<Login/>} path="/" />
          <Route element={<Register/>} path="/register"  />
          <Route element={<Kanban/>} path="/kanban" />
        </Routes>

      </BrowserRouter>
          
    </>
  )
}
export default App
