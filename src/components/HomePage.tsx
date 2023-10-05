import React, {useContext} from 'react';
import { translate } from '../utils/translate';
import { LangContext } from './LangContext';

type Props = {};

export const HomePage: React.FC<Props> = () => (
  <div className="HomePage">
    <HomePageTitle />
    <HomePageContent />
  </div>
);

const HomePageTitle: React.FC<Props> = () => {
  const {lang} = useContext(LangContext);

  return (
    <h1>
      {translate('homePage.title', lang)}
    </h1>
  )
};

const HomePageContent: React.FC<Props> = () => {
  const {lang} = useContext(LangContext);

  return (
    <section>
      {translate('homePage.content', lang)}
    </section>
  );
}
