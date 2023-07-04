import { useContext } from 'react';
import { translate } from '../utils/translate';
import { LangContext } from './LangContext';

export const HomePage = () => (
  <div className="HomePage">
    <HomePageTitle />
    <HomePageContent />
  </div>
);

const HomePageTitle = () => {
  const { lang } = useContext(LangContext);
  
  return (
    <h1>{translate('homePage.title', lang)}</h1>
  );
};

const HomePageContent = () => {
  const { lang } = useContext(LangContext);
  
  return (
    <section>
      {translate('homePage.content', lang)}
    </section>
  );
};
