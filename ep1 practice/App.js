/*
->) intialize the git, adding remote file to origin main from remote react-practice repozitory
->) intialize the npm init so further package.json set up and further dependencies also.
->) bundler-> this is bundle app for app.js,css,html .it bundle so that ship to production.
->) webpack,parcel,vite - these are bundler.
->) as use parel bundler 
->) install npm install -D parcel
->) two type of dependencies - dev and normal dependencies.so it -D  install as devdependencies.
->"^2.8.3"  version as new minor version for "^2.8.4" ,, "~2.8.4" major version
->package.json => it keep dependencies or configuration,approx dependencies , but in package-lock.json there is exact version as keep track of versions.and same tell for in development and in production there versions differences not come.
->node_modules => it actall data 
-> transcitive dependencies-as dependencies dependent on some other dependencies.
-> in .gitignore there put file which not push to github.there pack.json and package-lock.json put in github as there in all used dependencies.

-- install 
-> npx parcel index.html ,,,, in npx is for executing the package 
-> as download node_module from data and it package are fetched otherwise from server it get costier.
-> there in package.json there versions are also mentained 
->install react as in normal dependencies
npm install react
->npm install react-dom

->)) parcel is help in 
=> dev build
=> local server
=> HMR = hot module replacement.(whenever the changing then in module then change in help module.)
=> file watching alogrithm - written in c++
=>caching - faster builds
=>Image optimization.
=> minification
=> building
=> compress
=> consistent hashing
=> code splitting
=> differential bundling - (open in variation of browser so it support older browser)
=> Diagnostic
=> error handling 
=> host in HTTPs/SSL
=> Tree shaking - remove unused code.
=> different dev and production bundles

// read documentation of parcel. 

// for production level  build of parcel as do--> npx parcel build index.html

// for parcel module in dist,index.html,index these code for production level.

->)) for setting the which browser should i supported are listed in browserList in node_module.
so in package.json of this package browserlist there add dependencies as 
"browserList":{"last 2 chrome version","last 2 firefox version"}
so it mean might be work be on other browser but in these definitely work.

*/