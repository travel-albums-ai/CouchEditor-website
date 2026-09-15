import { Copyright, Eye, Footprints, Zap } from 'lucide-react';
import FeatureCard from '../../generics/FeatureCard';
import SidesDynamic from '../../generics/SidesDynamic';
import Section from '../../Section';

export default function MapSteps() {

  return  <>
    <Section id="steps" title="Your Steps" description={<>Trace step by step <br /><em>your journey.</em></>} icon={<Footprints />}>

      <SidesDynamic image="globe2.png">
        <FeatureCard compact item={{
          icon: <Zap size={24} />,
          title: "Quick and easy mapping",
          desc: "Follow and trip at any zoom level. Dynamic caches ensure smooth performance."
        }} />
        <FeatureCard compact item={{
          icon: <Copyright size={24} />,
          title: "Leaflet & OpenStreetMap",
          desc: "Using the power of Leaflet and OpenStreetMap, we create a beautiful and interactive map that you can explore"
        }} />
      </SidesDynamic>

      <SidesDynamic image="previews.png" reversed>
        <FeatureCard item={{
          icon: <Eye size={24} />,
          title: "Quick Preview",
          desc: "Explore from that point/location what happened that day. Quick EXIF, maps, metadata and more."
        }} />
      </SidesDynamic>

    </Section>
  </>
}
