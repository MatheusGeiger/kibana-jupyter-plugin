import {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
} from '../../../src/core/server';

import { KibanaJupyterPluginSetup, KibanaJupyterPluginStart } from './types';
import { defineRoutes } from './routes';

export class KibanaJupyterPlugin
  implements Plugin<KibanaJupyterPluginSetup, KibanaJupyterPluginStart>
{
  private readonly logger: Logger;

  constructor(initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
  }

  public setup(core: CoreSetup) {
    this.logger.debug('kibana_jupyter: Setup');
    const router = core.http.createRouter();

    // Register server side APIs
    defineRoutes(router);

    return {};
  }

  public start(core: CoreStart) {
    this.logger.debug('kibana_jupyter: Started');
    return {};
  }

  public stop() {}
}
