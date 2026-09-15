import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './header/Header';
import Landing from './pages/Landing';

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", bgcolor: "background.paper" }}>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Box>
  )
}

export default App
