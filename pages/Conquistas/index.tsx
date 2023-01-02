import Head from "next/head";
import { useEffect, useState } from "react";
import {
  IndexContainer,
  IndexMain,
  RomanticText,
  HourContainer,
  YearsContainer,
  Footer,
  RomanticoText,
  IndexConquistas,
} from "../../styles/_styled";
import { lifeCounter } from "../../utils/home";

interface InitialVariablesProps {
  initialVariables: {
    years: string;
    months: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
}

export default function Conquistas({ initialVariables }: InitialVariablesProps) {
  const [years, setYears] = useState<any>(initialVariables.years);
  const [months, setMonths] = useState<any>(initialVariables.months);
  const [days, setDays] = useState<any>(initialVariables.days);
  const [hours, setHours] = useState<any>(initialVariables.hours);
  const [minutes, setMinutes] = useState<any>(initialVariables.minutes);
  const [seconds, setSeconds] = useState<any>(initialVariables.seconds);

  useEffect(() => {
    setTimeout(() => {
      setYears(lifeCounter.years());
      setMonths(lifeCounter.months());
      setDays(lifeCounter.days());
      setHours(lifeCounter.hours());
      setMinutes(lifeCounter.minutes());
      setSeconds(lifeCounter.seconds());
    }, 1000);
  }, [seconds]);

  return (
    
    <IndexConquistas>
      <RomanticoText>❤️ Conquistas para 2023 ❤️</RomanticoText>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <input type="checkbox" id= "designillustration"/><span>Design & Illustration</span>
            <input type="checkbox" id="digitalart"/><span>Digital Art</span>
            <input type="checkbox" id="drawing"/><span>Drawing</span>
            <input type="checkbox" id="paintingmixedmedia"/><span>Painting & Mixed Media</span>
            <input type="checkbox" id="photography"/><span>Photography</span>
      </div>  
    </IndexConquistas>
    
  );
}
export function getServerSideProps() {
  return {
    props: {
      initialVariables: {
        years: lifeCounter.years(),
        months: lifeCounter.months(),
        days: lifeCounter.days(),
        hours: lifeCounter.hours(),
        minutes: lifeCounter.minutes(),
        seconds: lifeCounter.seconds(),
      },
    },
  };
}
