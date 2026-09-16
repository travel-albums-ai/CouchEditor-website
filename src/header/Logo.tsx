import { Box, Typography } from '@mui/material';

export default function Logo() {

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}>
        <img src="couch-editor-purple-128x128.png" className="hero-logo" style={{ height: 64 }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 0 }}>
            <Typography variant="h6" color="textPrimary" sx={{ lineHeight: 1 }}>
            Couch
            </Typography>
            <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold', lineHeight: 1 }}>
            Editor
            </Typography>
          </Box>
          <Typography variant="caption" color="textDisabled">
            Drag • Slide • See the difference
          </Typography>
        </Box>
      </Box>
    </>
  )
}
