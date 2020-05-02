import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Main: FC<any> = () => {
  const [t] = useTranslation();

  return (
    <div>
      {t('TouchToSeePerson')}
    </div>
  )
}
export default Main;
