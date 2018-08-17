# Repo to spike extensibility for AMA

## Directory structure

This repository contains 2 directories, one for the Community application and one for the Enterprise application. Each of them is an Angular 6 application. The Enterprise application is a extension of the Community application.

### Community application

The folder contains the main AMA "application" **library** wich can be used and rewired in either the Community and the Enterprise application. The whole application is **implemented as an angular 6 library** to be able to reused and to decrease code duplication to minimal level.

Thus the base (Community) application itself only contains one module which wires up and bootstrap the application itself.

#### Build the application library

`npm run package`

#### Run the Community application

`npm start`

### Enterprise application

The enterprise folder uses the AMA application library the same way as the Community, with other extensions. The rewire happens through the DI of Angular.

#### Run the Enterprise application

`npm start`

**After every change in the (base) application library files it needs to be rebuilt & packaged. After that it needs to be reinstalled again, no hot reload at the moment for the enterprise directory**

`npm install ama-lib`
