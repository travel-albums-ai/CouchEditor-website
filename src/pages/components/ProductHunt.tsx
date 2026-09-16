import { Box } from '@mui/material';

export default function ProductHunt() {

  return (
    <a href="https://www.producthunt.com/products/coucheditor" target="_blank" rel="noopener noreferrer">
      <Box sx={{
        height: '300px',
        p: 4,
        backgroundImage: `url('./productHunt.png')`,
        backgroundSize: '800px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start',
        my: 8,
      }}>
      </Box>
    </a>
  )
}
