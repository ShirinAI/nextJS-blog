import Format from '../components/format';
import Section1 from '../components/section1';
import Section2 from '../components/section2'; 
import { useState, useEffect} from 'react'

export default function Home() {
  
const [  firstSection, setFirstSection ] = useState('Loading...');
const [  secondSection, setSecondSection ] = useState('Loading...');

function setData(){
  const newFirstSection = <Section1></Section1>
  const newSecondSection = <Section2></Section2>
  setFirstSection(newFirstSection)
  setSecondSection(newSecondSection)
}

useEffect(() => setData(), [])

  return (
   <div>
      <div>{firstSection}</div>
      <div>{secondSection}</div>
   </div>
  );
}