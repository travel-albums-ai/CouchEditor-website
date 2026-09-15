import { Box, useTheme } from '@mui/material';

export default function Demo() {

  const theme = useTheme();

  return (
    <Box sx={{
      height: '980px',
      p: 4,
      backgroundImage: `url('./demo.png')`,
      backgroundSize: '850px',
      backgroundPosition: '-0px 0px',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Box sx={{
      }}>
        <iframe src="https://couch-editor.com/" style={{
          border: `2px solid ${theme.palette.primary.main}`,
          borderRadius: '8px',
          boxSizing: 'border-box',
          overflow: 'hidden',
          borderColor: theme.palette.divider,
          width: '2000px',
          height: '1000px',
          transformOrigin: 'center',
          transform: 'scale(0.75)',
        }}></iframe>
      </Box>
    </Box>
  )
}
