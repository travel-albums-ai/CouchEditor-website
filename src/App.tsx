import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", bgcolor: "background.paper" }}>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Box>
  )
}

export default App
