import pluginJson from './plugin.json';

export const PLUGIN_BASE_URL = `/a/${pluginJson.id}`;

export enum ROUTES {
  Home = '',
  Demos = 'demos',
  WithTabs = 'page-with-tabs',
  WithDrilldown = 'page-with-drilldown',
}

export const DATASOURCE_REF = {
  uid: 'gdev-testdata',
  type: 'testdata',
};

export const DATASOURCE_Observability = {
  uid: 'observability-metrics',
  type: 'prometheus',
}; // added

export const DATASOURCE_Meta = {
  uid: 'meta-metrics',
  type: 'prometheus',
}; // added
