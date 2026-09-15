import { Copyright, Eye, Footprints, Import, Zap } from 'lucide-react';
import FeatureCard from '../../generics/FeatureCard';
import SidesDynamic from '../../generics/SidesDynamic';
import Section from '../../Section';

export default function BatchProcessing() {

  return  <>
    <Section id="batchProcessing" title="Batch Processing" description={<>Process multiple items at once <br /><em>efficiently and effectively.</em></>} icon={<Footprints />}>

      <SidesDynamic image="batchProcessing.png">
        <FeatureCard compact item={{
          icon: <Zap size={24} />,
          title: "Quick and easy flow design",
          desc: "Design and execute batch processes quickly and easily. Dynamic caches ensure smooth performance."
        }} />
        <FeatureCard compact item={{
          icon: <Copyright size={24} />,
          title: "React-Flow",
          desc: "Leverage the power of React-Flow to create and manage complex batch processing workflows with ease."
        }} />
      </SidesDynamic>

      <SidesDynamic image="lutProfiles.png" reversed>
        <FeatureCard item={{
          icon: <Eye size={24} />,
          title: "LUT Profiles",
          desc: "Explore LUT profiles and their impact on your batch processing workflows."
        }} />
        <FeatureCard item={{
          icon: <Import size={24} />,
          title: "Bring your favorite tools",
          desc: "Integrate and utilize your preferred tools seamlessly within your batch processing workflows."
        }} />
      </SidesDynamic>

    </Section>
  </>
}
