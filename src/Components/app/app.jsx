import { Route, Routes } from 'react-router-dom';
import { Navbar, HomePage, Rates, News, Reviews, Help, Login, Footer } from '..';
const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/'  element={<HomePage />}></Route>
                <Route path='/Rates' element={<Rates />}></Route>
                <Route path='/News/:slug' element={<News />}></Route>
                <Route path='/Reviews' element={<Reviews />}></Route>
                <Route path='/Help' element={<Help />}></Route>
                <Route path='/Login' element={<Login />}></Route>
                
                {/* <Route path='/register' element={<Register />}></Route> */}
                {/* <Route path='/articles/:slug' element={<ArticlesDetails />}></Route> */}
            </Routes>
            <Footer />
        </>
    );
}

export default App;
