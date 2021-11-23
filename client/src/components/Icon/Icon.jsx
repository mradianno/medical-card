import React from 'react';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import './Icon.scss';

const Icon = (props) => {
  const Icon = props.src || BlurOnIcon;

  return (
    <>
      <Icon {...props} />
    </>
  );
};

export default Icon;
