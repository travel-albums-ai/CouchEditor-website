import { Typography } from '@mui/material';
import { LanguagesIcon, MailQuestionMark } from 'lucide-react';
import Section from '../../Section';
import DetailsBar from '../../generics/DetailsBar';

const items = [
  {
    icon: <LanguagesIcon size={32} />,
    num: "Hello",
    label: "English greeting"
  },
  {
    icon: <LanguagesIcon size={32} />,
    num: "Salut",
    label: "French greeting"
  },
  {
    icon: <LanguagesIcon size={32} />,
    num: "Hola",
    label: "Spanish greeting"
  },
  {
    icon: <LanguagesIcon size={32} />,
    num: "Ciao",
    label: "Italian greeting"
  },
  {
    icon: <MailQuestionMark size={32} />,
    num: "...others",
    label: "Just ask us!"
  }
]

export default function Languages() {
  return (
    <Section icon={ <LanguagesIcon />} id="languages" title="Languages" description={<>Use it in your <em>language</em></>}>
      <DetailsBar items={items} />
      <Typography variant="caption" color="textDisabled" sx={{ mt: 2, display: 'block', textAlign: 'center' }}>
          There is support for multiple languages, and more are being added all the time. If you want a language added, please let us know! NOTE: Translations are AI generated and may contain errors. If you see a mistake, raise a ticket on Github!
      </Typography>
    </Section>
  )
}
