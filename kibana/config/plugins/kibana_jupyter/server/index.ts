import { PluginInitializerContext } from '../../../src/core/server';
import { KibanaJupyterPlugin } from './plugin';

//  This exports static code and TypeScript types,
//  as well as, Kibana Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  return new KibanaJupyterPlugin(initializerContext);
}

export { KibanaJupyterPluginSetup, KibanaJupyterPluginStart } from './types';
