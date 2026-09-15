import { Cpu, Map, Rocket, Unlink } from 'lucide-react';
import DetailsBar from '../../generics/DetailsBar';

export default function StatsBar() {


  const items = [
    {
      icon: <Rocket size={32} />,
      num: "< 1.5s",
      label: "Fast start times"
    },
    {
      icon: <Map size={32} />,
      num: "190 +",
      label: "Countries mapped"
    },
    {
      icon: <Unlink size={32} />,
      num: "100 %",
      label: "Local & private"
    },
    {
      icon: <Cpu size={32} />,
      num: "ARM & x64",
      label: "Architecture support"
    },
  ]

  return <>
    <DetailsBar items={items} />
  </>
}
