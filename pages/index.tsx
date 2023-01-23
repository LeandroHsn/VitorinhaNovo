import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import {
  IndexContainer,
  IndexMain,
  RomanticText,
  HourContainer,
  YearsContainer,
  Footer,
  LinkContainer,
} from "../styles/_styled";
import { lifeCounter } from "../utils/home";

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

export default function Home({ initialVariables }: InitialVariablesProps) {
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
    <IndexContainer>
      <Head>
          <title>Pessoa incrível</title>
          <meta
            name="description"
            content="The time that I feel I'm in the right place."
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap"
            rel="stylesheet"
          />
        </Head>
      <IndexMain>        
        <LinkContainer>
        <Link href="/Conquistas">Conquistas</Link>
        </LinkContainer>        

        <RomanticText>
          Tempo que realmente conheci{" "}
          <a
            href="https://www.instagram.com/vitoriasre/"
            rel="noreferrer"
            target="_blank"
          >
            uma pessoa incrível.
          </a>
        </RomanticText>
        <HourContainer>
          {hours}:{minutes}:{seconds}
        </HourContainer>
        <YearsContainer>
          {days}/{months}/{years}
        </YearsContainer>
      </IndexMain>

      <Footer>
        <a
          target="_blank"
          rel="noreferrer"
        >
          Developed by Leandro Henrick 
        </a>
      </Footer>
    </IndexContainer>
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
