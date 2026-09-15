import { Cpu, File, ServerCog, Spool } from 'lucide-react';
import DetailsBar from '../../generics/DetailsBar';

export default function IndexerStats() {


  const items = [
    {
      icon: <Cpu size={32} />,
      num: "JPG",
      label: "Sharp/libvips core"
    },
    {
      icon: <Spool size={32} />,
      num: "Multi-threaded",
      label: "Use all cores"
    },
    {
      icon: <File size={32} />,
      num: "Extensible",
      label: "Png, gif and avif support"
    },
    {
      icon: <ServerCog size={32} />,
      num: "Standards & Exif",
      label: "Supplemental data aware"
    },
  ]

  return <>
    <DetailsBar items={items} />
  </>
}
