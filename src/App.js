import Start from './pages/Start';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
