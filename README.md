# scenes-reproduction
To share a reproduction of the issue I encounter in Grafana scenes


This is a repo with just the modified "pakages/scenes-app". I ran it by replacing "pakages/scenes-app" in the scenes repo to mine then runing the scripts as explained in the grafana scenes readme.
I have made sure to have an "//added" comment on every single line I have changed from the original demo but here is a summary: 

In the "provisioning/datasources/default.yaml" file, I have added the actual datasources I am using in the app I'm developping (my company said yes).

In the "src/constants.ts" file I have again added those datasources.

In the "src/pages/DemoListPage.tsx" I have added the variables and their controls.

And last but not least the actual "src/pages/Added_Filters.tsx" file where I defined the variables is entirely added.


## The issue and where to find it
On the very first page of the demo you will find the filters as they are in my own application. you will see that the variables "app", "service", and "marathon_app_id" look more or less the same as they should. The variable dependency is as follows: "app" required for "service" and "dc", "service" required for "marathon_app_id". The "service" and "marathon_app_id" variables both only have very few choices per app (most often just one) but you only need to change the app to see the issue. When the app is changed the service will change to something that looks like it will match but the marathon_app_id will remain the same. ONly if you remove the var definition in the url and reload will you get the correct service.

Here is my initial slack message:

"I'm having an issue with variables that depend on other variables. It updates accordingly in the second but not third level.
For example: I have a continent, a country, and a city variable. My country query uses the $continent variable and my city query uses the $country variable.
At loading time, the variables have no problem starting out correctly. However, if I change the continent, the country will update to one in that continent as expected, but the city will not change at all, resulting in obviously wrong data that breaks everything.
Example: starting with Europe-France-Paris. changing Europe to Asia and getting Asia-India-Paris.
I have to manually remove the city variable value from the url and reload so it updates accordingly. Is this a bug in scenes or am I supposed to do something particular for the cascading updates to happen ?"
