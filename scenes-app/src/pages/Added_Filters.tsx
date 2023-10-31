// added the entire file
import {QueryVariable} from "@grafana/scenes";
//import {VariableHide} from "@grafana/schema";
import {DATASOURCE_Meta, DATASOURCE_Observability,} from "../constants";

export const appFilter = new QueryVariable({
    name: 'app',
    datasource: DATASOURCE_Meta,
    query: 'label_values(job:datasource{perimeter=~"paas.*"},job)',
});

export const dcFilter = new QueryVariable({
    name: 'dc',
    datasource: DATASOURCE_Meta,
    query: 'label_values(job:datasource{job="$app"},dc)',
    isMulti: true,
    includeAll: true,
    defaultToAll: true,
});

export const serviceVariable = new QueryVariable({
    name: 'service',
    datasource: DATASOURCE_Observability,
    query: 'label_values(app_meta_service_names{job_name="$app"},consul_name)',
    //hide: VariableHide.hideVariable,
});

export const marathon_app_idVariable = new QueryVariable({
    name: 'marathon_app_id',
    datasource: DATASOURCE_Observability,
    query: 'label_values(app_meta_marathon_app_ids{consul_name="$service"},marathon_app_id_mesos_tasks)',
    //hide: VariableHide.hideVariable,
});
