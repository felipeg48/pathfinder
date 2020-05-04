# Pathfinder

A workload assessment tool used to determine an applications suitability for running on OpenShift/Kubernetes

[![Build Status](https://travis-ci.org/redhat-cop/pathfinder.svg?branch=master)](https://travis-ci.org/redhat-cop/pathfinder) [![Docker Repository on Quay](https://quay.io/repository/pathfinder/pathfinder-server/status "Docker Repository on Quay")](https://quay.io/repository/pathfinder/pathfinder-server)


# Setup environment on OpenShift (incl. minishift)

The following commands will create a new project and deploy a mongo, pathfinder-server and pathfinder-ui instance into your environment
```
wget https://raw.githubusercontent.com/redhat-cop/pathfinder/master/pathfinder-full-template.yaml

oc new-project <your-new-project-name>
oc new-app --template=mongodb-persistent --param=MONGODB_DATABASE=pathfinder
oc process -f pathfinder-full-template.yaml|oc create -f-
```
# License
The code is made available under the Apache License, Version 2.0

The questions are made available under a Creative Commons Attribution-ShareAlike 4.0 International License.

# How to contribute code

* In Github, fork the [https://github.com/redhat-cop/pathfinder project into your github account.
* Clone your forked project to your local machine
* Make changes, commit and push to your forked Github repository
* In Github, click the "Create Pull Request" and select your changes you want to contribute to the core pathfinder/pathfinder-ui project
* A member of the core project will review the contribution and include it


# Development

* **pathfinder-ui**. This project is based in a [ProxyServlet](https://github.com/mitre/HTTP-Proxy-Servlet). When running locally is necessary to change:
   * **web.xml**. Take a look at the `targetUri` parameter value, it shpouod modify in Development either point to `localhost` or add the `pathfinder-server` to the `/etc/hosts` 
   in your machine pointing to `127.0.0.1`.

* **push-server.sh**. This script will compile and push the server image as `latest` in the [Quay.io](https://quay.io) repositories. You need to login in your account to have them pushed.
* **push-ui.sh**. This script will compile and push the ui image as `latest` in the [Quay.io](https://quay.io) repositories. You need to login in your account to have them pushed.
* **gas-path-template.yaml**. This is an OpenShit Template: `pathfinder` that can be used to create new apps. In order to setup your environment you will required to do:
   ```shell
   oc create -f gas-path-template.yaml -n pathfinder  ## Change your Project or you cadd add -n openshift
   oc new-app --template=mongodb-persistent --param=MONGODB_DATABASE=pathfinder
   oc wait --for=condition=Ready pod -l name=mongodb --timeout=180s
   oc new-app --template=pathfinder
   ```
   You can use the parameters `oc process pathfinder --parameters`:
   ```shell
   oc process pathfinder --parameters
   NAME                      DESCRIPTION                   GENERATOR           VALUE
   PATHFINDER_UI_IMAGE       PathFinder UI (Web App)                           quay.io/felipeg/pathfinder-ui
   PATHFINDER_SERVER_IMAGE   PAthFinder Server (Backend)                       quay.io/felipeg/pathfinder-server
   ```
   Example:
   ```shell
   oc new-app --template=pathfinder -p PATHFINDER_UI_IMAGE=myui:v1.1 -p PATHFINDER_SERVER_IMAGE=myserver:v1.1
   ```
## Remove from OpenShift

* Removing PathFinder
   ```shell script
   oc delete all -l app=pathfinder-server 
   oc delete all -l app=pathfinder-ui
   ```
* Removing Mongo
   ```shell script
   oc delete all -l app=mongodb-persistent
   ```
* Removing Template
   ```shell
   oc delete -f gas-path-template.yaml -n pathfinder
   ```