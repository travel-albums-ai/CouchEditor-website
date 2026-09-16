import { Box } from '@mui/material';

export default function Banner() {

  return (
    <Box sx={{
      height: '150px',
      p: 4,
      backgroundImage: `url('./logoBanner.png')`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    }} />
  )
}
