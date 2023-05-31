import { Routes, Route, Navigate } from 'react-router-dom';

import { Donate } from './components/donate/Donate';
import { Gallery } from './components/gallery/Gallery';
import { Home } from './components/home/Home';
import { Memories } from './components/memories/Memories';

export const App = () => {
    return (
        <>
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/donate'
                    element={<Donate />}
                />
                <Route
                    path='/gallery'
                    element={<Gallery />}
                />
                <Route
                    path='/home'
                    element={<Home />}
                />
                <Route
                    path='/memories'
                    element={<Memories />}
                />
                <Route
                    path='*'
                    element={<Navigate to='/' replace />}
                />
            </Routes>
        </>
    );
}