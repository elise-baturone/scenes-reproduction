# scenes-reproduction
To share a reproduction of the issue I encounter in Grafana scenes


Yes this is a repo with scenes in its entirety but the demo is in pakages/scenes-app. I have made sure to have an "//added" comment on every single line I have changed from the original demo but here is a summary: 

In the "provisioning/datasources/default.yaml" file, I have added the actual datasources I am using in the app I'm developping (my company said yes).

In the "src/constants.ts" file I have again added those datasources.

In the "src/pages/DemoListPage.tsx" I have added the variables and their controls.

An dlast but not least the actual "src/pages/Added_Filters.tsx" file where I defined the variables is entirely added.
