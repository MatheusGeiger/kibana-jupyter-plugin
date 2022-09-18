# Kibana plugin to use Jupyter

![exemplo](./docs/example.gif)

:warning: NOT PRODUCTION READY ONLY FOR STUDY

Study plugin to "integrate" kibana with jupyter.

The idea is to be able to provide through jupyter an integration that makes it possible to create relationships, searches, processes and perform other complex activities with elasticsearch queries with python.

Made this mechanic through a kibana plugin generated through the [cli](https://github.com/elastic/kibana/blob/6693ef371f887eca639b09c4c9b15701b4ebabd4/packages/kbn-plugin-generator/README.md) inserting an iframe where the url is a jupyter running in another environment (container)

As it's just a study the security mechanics are off.


## To run locally

Using docker: `docker compose up --build`


OBS: node_modules is committed to ease plugin build