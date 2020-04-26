import React, { FC, useEffect } from 'react';
import {connect} from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ListProps } from '../../interfaces/appInterfaces';
import {State} from '../../interfaces/appInterfaces';

const List: FC<ListProps> = () => {
  const [t] = useTranslation();
  useEffect(() => {},[]);

  return (
    <div>
      {t('Welcome to React')}
    </div>
	)
}

const mapStateToProps = (state: State) => ({})

export default connect(mapStateToProps, null)(List);