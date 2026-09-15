import { Code, Hamburger, Laptop, ServerCog } from 'lucide-react';
import DetailsBar from '../../generics/DetailsBar';

export default function TechBar() {


  const items = [
    {
      icon: <Code size={32} />,
      num: "Typescript",
      label: "React + Vite + TypeSafety"
    },
    {
      icon: <Hamburger size={32} />,
      num: "Bun",
      label: "Bundler and runtime"
    },
    {
      icon: <Laptop size={32} />,
      num: "All Desktop OS",
      label: "Windows 11, MacOS, Linux"
    },
    {
      icon: <ServerCog size={32} />,
      num: "Takeout",
      label: "Google Takeout format compatible"
    },
  ]

  return <>
    <DetailsBar items={items} />
  </>
}
