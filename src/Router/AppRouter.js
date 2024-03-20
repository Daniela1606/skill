import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
    return (
         <BrowserRouter>

         <Routes>

             <Route
                 path='*'
                 element={<PublicRoute />}
             />

             <Route
                 path='/dashboard/*'
                 element={<PrivateRoute />}
             />
            
         </Routes>

     </BrowserRouter>
    )
}

export default AppRouter;