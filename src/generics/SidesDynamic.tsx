import { Box } from '@mui/material';

export default function SidesDynamic({ image, children, reversed }: { image: string, children: React.ReactNode, reversed?: boolean }) {

  return  <>
    <Box sx={{
      display: 'flex', gap: 8,
      flexWrap: 'nowrap',
      justifyContent: reversed ? 'right' : 'left',
      alignItems: 'center',
      pb: 6, pt: 4,
      borderBottom: '1px dotted', borderColor: 'divider',
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
          width: '1100px',
        }} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, position: 'absolute', right: reversed ? 'auto' : 0, left: reversed ? 0 : 'auto' }}>
        {children}
      </Box>
    </Box>
  </>
}
