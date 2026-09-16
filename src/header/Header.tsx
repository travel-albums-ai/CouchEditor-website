import { Box, Button } from '@mui/material';
import { ExternalLink, GitGraph } from 'lucide-react';
import Logo from './Logo';

export default function Header() {

  return (
    <>
      <Box>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "space-between", flexWrap: 'wrap', py: 1, px: 4, flex: 1 }}>
          <Logo />
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
              startIcon={<ExternalLink size={16} />} component="a" href="https://couch-editor.com/"  target="_blank" variant="contained" color="primary" size="large">Get Started Free
            </Button>
            <Button
              startIcon={<GitGraph size={16} />} component="a" href="https://github.com/travel-albums-ai/CouchEditor"  target="_blank" variant="outlined" color="primary" size="large">Github
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}
