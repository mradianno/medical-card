import React, { useContext, useEffect, useState } from 'react';
import './MainLayout.scss';
import { Box } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CreateIcon from '@mui/icons-material/Create';
import SubjectIcon from '@mui/icons-material/Subject';
import Icon from '../Icon';
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../../redux/auth/Actions';
import { authContext } from '../../services/contexts';
import { NavLink, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import UserContainer from '../../modules/UserContainer';
import Diagnostics from '../../modules/Diagnostics';
import Evidences from '../../modules/Evidences';

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(true);
  const dispatch = useDispatch();
  const { logOut } = useContext(authContext);
  const { user } = useSelector((state) => state.authReducer);
  const { path } = useRouteMatch();

  const collapseButtonHandler = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    dispatch(authActions.getLoggedUser());
  }, []);

  return (
    <div className="main-layout">
      <Box
        className={`layout-menu ${collapsed ? 'layout-menu-expanded' : ''}`}
        sx={{ backgroundColor: 'primary.dark' }}
      >
        <div className="collapse-icon-box" onClick={collapseButtonHandler}>
          <Icon src={ChevronLeftIcon} />
        </div>
        <div className="menu-list-container">
          <ul>
            <li>
              <NavLink to={`${path}/user`} exac className="list-item-NavLink">
                <Icon src={AccountBoxIcon} />
                {user?.firstName} {user?.lastName}
              </NavLink>
            </li>
            <li>
              <NavLink to={`${path}/diagnostics`} exac className="list-item-NavLink">
                <Icon src={CreateIcon} />
                <span className="list-item-span">Diagnosticile</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={`${path}/evidences`} exac className="list-item-NavLink">
                <Icon src={SubjectIcon} />
                <span className="list-item-span">Evidenta efectelor si complicatiilor</span>
              </NavLink>
            </li>
          </ul>
          <ul>
            <li onClick={logOut}>
              <Icon src={LogoutIcon} />
              <span>Deconectare</span>
            </li>
          </ul>
        </div>
      </Box>
      <Box className="layout-content">
        <Switch>
          <Route exact path={`${path}/user`}>
            <UserContainer />
          </Route>
          <Route exact path={`${path}/diagnostics`}>
            <Diagnostics />
          </Route>
          <Route exact path={`${path}/evidences`}>
            <Evidences />
          </Route>
          <Redirect to={`${path}/user`} />
        </Switch>
      </Box>
    </div>
  );
};

export default MainLayout;
