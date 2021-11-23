import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getLink } from '../../redux/link/Actions';
import './ExternalActions.scss';
import ExaminationDate from '../UserContainer/ExaminationDates/ExaminationDate';
import Diagnostic from '../Diagnostics/Diagnostic';
import Evidence from '../Evidences/Evidence';

const ExternalActions = (props) => {
  const {
    params: { id },
  } = useRouteMatch();
  const dispatch = useDispatch();
  const [link, setLink] = useState(null);

  useEffect(() => {
    dispatch(getLink(id)).then((res) => {
      setLink(res);
    });
  }, []);

  const Component = () => {
    const { action } = link;

    switch (action) {
      case 'examinationDate':
        return <ExaminationDate inAction={true} />;
      case 'diagnostic':
        return <Diagnostic inAction={true} />;
      case 'evidence':
        return <Evidence inAction={true} />;

      default:
        return <div>Error</div>;
    }
  };

  if (!link) return <div className="loading-actions">Loading...</div>;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>
        {link.User.firstName} {link.User.lastName}
      </h1>
      <Component />
    </div>
  );
};

export default ExternalActions;
