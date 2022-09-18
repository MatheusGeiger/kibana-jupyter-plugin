import React, { useState } from 'react';
import { i18n } from '@kbn/i18n';
import { FormattedMessage, I18nProvider } from '@kbn/i18n/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Iframe from 'react-iframe';

import {
  EuiButton,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageHeader,
  EuiTitle,
  EuiForm,
  EuiFormRow,
  EuiFieldText,
} from '@elastic/eui';

import { CoreStart } from '../../../../src/core/public';
import { NavigationPublicPluginStart } from '../../../../src/plugins/navigation/public';

import { PLUGIN_ID, PLUGIN_NAME } from '../../common';

interface KibanaJupyterAppDeps {
  basename: string;
  notifications: CoreStart['notifications'];
  navigation: NavigationPublicPluginStart;
}

export const KibanaJupyterApp = ({
  basename,
  notifications,
  navigation,
}: KibanaJupyterAppDeps) => {
  // Use React hooks to manage state.
  const [jupyterUrl, setjupyterUrl] = useState<string>("");
  const [disableEditUrl, setdisableEditUrl] = useState<boolean>(true);
  const [configuredUrl, setconfiguredUrl] = useState<boolean>(false);
  const [buttonLabel, setbuttonLabel] = useState<string>("Edit Url");
  
  const handleEditUrl = () => {
    setdisableEditUrl(!disableEditUrl)
    setbuttonLabel("Submit")
    setconfiguredUrl(false)
  };

  const submitEditUrl = () => {
    setjupyterUrl(jupyterUrl)
    setdisableEditUrl(!disableEditUrl)
    setbuttonLabel("Edit Url")
    setconfiguredUrl(!configuredUrl)

    // Use the core notifications service to display a success message.
    notifications.toasts.addSuccess(
      i18n.translate('kibanaJupyter.dataUpdated', {
        defaultMessage: 'Url updated',
      }),
      {
        toastLifeTimeMs: 3000,
      }
    );
  };

  const handleButton = () => {
    disableEditUrl ? handleEditUrl() : submitEditUrl() 
  }

  // Render the application DOM.
  // Note that `navigation.ui.TopNavMenu` is a stateful component exported on the `navigation` plugin's start contract.
  return (
    <Router basename={basename}>
      <I18nProvider>
        <>
          <navigation.ui.TopNavMenu
            appName={PLUGIN_ID}
            showSearchBar={false}
            useDefaultBehaviors={true}
          />
          <EuiPage>
            <EuiPageBody>
              <EuiPageHeader>
                <EuiTitle size="l">
                  <h1>
                    <FormattedMessage
                      id="kibanaJupyter.helloWorldText"
                      defaultMessage="{name}"
                      values={{ name: PLUGIN_NAME }}
                    />
                  </h1>
                </EuiTitle>
                <EuiForm data-test-subj="UrlConfiguration">
                  <EuiFormRow label="Enter Jupyter external URL" fullWidth>
                    <EuiFieldText
                      disabled={disableEditUrl}
                      placeholder="http://localhost:888/lab"
                      value={jupyterUrl}
                      onChange={(ev) => setjupyterUrl(ev.target.value)}
                    />
                  </EuiFormRow>
                  <EuiButton onClick={handleButton}>
                    {buttonLabel}
                  </EuiButton>
                </EuiForm>
              </EuiPageHeader>
              <EuiPageContent>
                <EuiPageContentHeader>
                  {/* <EuiTitle>
                    <h2>
                      <FormattedMessage
                        id="kibanaJupyter.congratulationsTitle"
                        defaultMessage="Configure a url do Jupyter"
                      />
                    </h2>
                  </EuiTitle> */}
                </EuiPageContentHeader>
                <EuiPageContentBody>
                  {configuredUrl ?
                  <Iframe url={jupyterUrl}
                    width="100%"
                    height="1000px"
                    id="jupyter-iframe"
                    display="block"
                    position="relative"/>
                    :
                  <FormattedMessage
                      id="kibanaJupyter.congratulationsTitle"
                      defaultMessage="First step configure Jupyter url"
                    />
                    }
                </EuiPageContentBody>
              </EuiPageContent>
            </EuiPageBody>
          </EuiPage>
        </>
      </I18nProvider>
    </Router>
  );
};