import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { cloneElement } from 'react';
import './App.css';

export default function Section({ index, children, icon, title, description, id }: { index: number, children: React.ReactNode, icon?: React.ReactNode, title?: string, description?: string, id: string }) {

  return  <>
    <Box sx={{
      // overflow: 'hidden',

      padding: '140px 0',
      px: 2,
      // borderTop: '1px solid var(--border)',
      background: theme => `linear-gradient(180deg, transparent 0%, ${theme.palette.background.default} 50%, ${theme.palette.background.paper} 100%)`,
    }}>
      <Box
        id={id}
        sx={{ maxWidth: 1280, margin: "0 auto", padding: "0px", position: 'relative', }}
      >
        {(title || icon) && <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
          {icon && <>{cloneElement(icon, { size: 16 })}</> }
          {title && <Typography color="primary" variant="subtitle2" sx={ { textTransform: "uppercase" } }>{title}</Typography>}
        </Box>}
        {description && <h2 className="section-title">{description}</h2>}
        { children}
      </Box>
    </Box>
  </>
}
