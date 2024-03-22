import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from "./pages/home/home";
import MonthlyBalance from "./pages/monthly_balance/monthly_balance";
import YearlyBalance from "./pages/yearly_balance/yearly_balance";

const Main = () => {
   return(
    <BrowserRouter>
       <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path='/monthly-balance' element={<MonthlyBalance/>}/>
           <Route path='/yearly-balance' element={<YearlyBalance/>}/>
       </Routes>
    </BrowserRouter>
   )
}

export default Main;