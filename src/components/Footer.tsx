import { useContext } from 'react';
import { StateContext } from '../Store';
import { translate } from '../utils/translate';

export const Footer = () => {
  const { lang } = useContext(StateContext);

  return (
    <footer>
      {translate('footer.greating', lang)}
    </footer>
  );
}
