import { Box, Button } from '@mui/material';
import { ExternalLink, GitGraph } from 'lucide-react';

export default function Header() {

  return (
    <>
      <Box>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "space-between", flexWrap: 'wrap', py: 2, px: 4, width: '1280px', mx: 'auto' }}>
          <a className="nav-logo" href="#">
            <img src="logo_new_240.png" className="hero-logo" style={{ height: 24 }} />
          Couch Editor
          </a>
          <ul className="nav-links">
            {/* <li><a href="./#features">Features</a></li>
            <li><a href="./#steps">Steps</a></li>
            <li><a href="./#languages">i18n</a></li>
            <li><a href="./#themes">Themes</a></li>
            <li><a href="./#mcpeverywhere">MCP</a></li>
            <li><a href="./#settings">Settings</a></li> */}
            {/* <li><a href="./#how">Indexer</a></li> */}
            {/* <li><a href="./#connect">Connect</a></li> */}
          </ul>


          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              startIcon={<ExternalLink size={16} />} component="a" href="https://web-app-travel-albums.vercel.app/#/allPhotos"  target="_blank" variant="contained" color="primary" size="large">Get Started Free
            </Button>
            <Button
              startIcon={<GitGraph size={16} />} component="a" href="https://github.com/travel-albums-ai/travel-albums"  target="_blank" variant="outlined" color="primary" size="large">Repo
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}
