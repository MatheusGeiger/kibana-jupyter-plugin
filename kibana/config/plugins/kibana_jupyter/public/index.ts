import './index.scss';

import { KibanaJupyterPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, Kibana Platform `plugin()` initializer.
export function plugin() {
  return new KibanaJupyterPlugin();
}
export { KibanaJupyterPluginSetup, KibanaJupyterPluginStart } from './types';
