import React from 'react';
import ReactDOM from 'react-dom';
import { AppMountParameters, CoreStart } from '../../../src/core/public';
import { AppPluginStartDependencies } from './types';
import { KibanaJupyterApp } from './components/app';

export const renderApp = (
  { notifications, http }: CoreStart,
  { navigation }: AppPluginStartDependencies,
  { appBasePath, element }: AppMountParameters
) => {
  ReactDOM.render(
    <KibanaJupyterApp
      basename={appBasePath}
      notifications={notifications}
      navigation={navigation}
    />,
    element
  );

  return () => ReactDOM.unmountComponentAtNode(element);
};
