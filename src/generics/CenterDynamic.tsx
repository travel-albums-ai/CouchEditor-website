import { Box } from '@mui/material';

export default function CenterDynamic({ image, children, reversed, width = 1100 }: { image: string, children: React.ReactNode, reversed?: boolean, width?: number }) {

  return  <>
    <Box sx={{
      display: 'flex', gap: 8,
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'center',
      pb: 6, pt: 4,
      mb: 2, position: 'relative'
    }}>

      <Box sx={{
        opacity: 0.7,
        '&:hover': {
          opacity: 1,
        },
        transition: 'opacity 0.3s',
        boxShadow: 8,
        borderRadius: 6,
        overflow: 'hidden'
      }}>
        <img src={image} title="Globe Page" style={{
          margin: 0,
          width: `${width}px`,
          maxWidth: '85vw',
        }} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4, position: 'absolute', bottom: -64, right: '0', left: '0' }}>
        {children}
      </Box>
    </Box>
  </>
}
