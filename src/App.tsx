import { Box } from '@mui/material';
import './App.css';
import Header from './header/Header';
import Landing from './pages/Landing';

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", bgcolor: "background.paper", gap: 12 }}>
      <Header />
      <Landing />
    </Box>
  )
}

export default App
