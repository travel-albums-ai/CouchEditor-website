import { Box, Button, Divider, Stack } from '@mui/material';
import { ExternalLink, ScrollText, Sparkle, Sparkles } from 'lucide-react';
import Section from '../../Section';
import ChatMockup from '../../generics/ChatMockup';
import FeatureCard from '../../generics/FeatureCard';

export default function MCPEverywhere() {


  return (
    <>
      <Section icon={ <Sparkles />} id="mcpeverywhere" title="MCP & Friends" description={<>Invite your Copilot or your browser <em>via WebMCP</em>.</>}>

        <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />} >
          <a href="https://developer.chrome.com/docs/ai/webmcp" target="_blank" rel="noopener noreferrer">
            <Button variant="outlined" startIcon={<ExternalLink /> }>WebMCP</Button>
          </a>
          <a href="https://developer.chrome.com/blog/webmcp-epp" target="_blank" rel="noopener noreferrer">
            <Button variant="outlined" startIcon={<ExternalLink /> }>WebMCP EPP</Button>
          </a>
          <a href="https://github.com/webmachinelearning/webmcp" target="_blank" rel="noopener noreferrer">
            <Button variant="outlined" startIcon={<ExternalLink /> }>WebMCP GitHub</Button>
          </a>
        </Stack>
        <Box sx={{ display: 'flex', gap: 4, mt: 8, flexWrap: 'nowrap', justifyContent: 'start', alignItems: 'start'  }}>

          <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column', justifyContent: 'start', alignItems: 'start', flex: '0 0 60%' }}>
            <FeatureCard item={{
              icon: <Sparkles size={24} />,
              title: "As your local MCP server",
              desc: "Directly point your MCP-compatible Copilot to your local Trip Gallery instance and let it explore your trips and memories."
            }} />
            <FeatureCard item={{
              icon: <Sparkle size={24} />,
              title: "And WebMCP for your browser",
              desc: "From Chrome 150+ onwards, core functions will be contextually exposed to your web-based Copilot through WebMCP, allowing you to interact with your trips and memories right from your browser."
            }} />
            <FeatureCard item={{
              icon: <ScrollText size={24} />,
              title: "Following standards",
              desc: "Committed to following the MCP and WebMCP standards, ensuring compatibility with a wide range of Copilots and AI assistants."
            }} />
          </Box>

          <ChatMockup />
        </Box>


      </Section>
    </>
  )
}
