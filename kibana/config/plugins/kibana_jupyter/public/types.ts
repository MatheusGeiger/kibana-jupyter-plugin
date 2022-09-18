import { NavigationPublicPluginStart } from '../../../src/plugins/navigation/public';

export interface KibanaJupyterPluginSetup {
  getGreeting: () => string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface KibanaJupyterPluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
}
