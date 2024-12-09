import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { ProfileIcon, ProjectIcon } from './Icons';
const icons = {
  "share": (size: number, color: string) => <AntDesign name="sharealt" size={size} color={color} />,
  "project": (size: number, color: string) => <ProjectIcon size={size} color={color} />,
  "home": (size: number, color: string) => <AntDesign name="home" size={size} color={color} />,
  "profile": (size: number, color: string) => <ProfileIcon size={size} color={color} />,

}
type iconnames = keyof typeof icons;

type IconSymbolProps = {
  name: iconnames,
  color: string,
  size: number
}

const IconSymbol: React.FC<IconSymbolProps> = ({ name, size, color }) => {

  return (
    icons[name](size, color)
  )
}

export default IconSymbol

