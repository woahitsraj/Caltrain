# Caltrain
Public transportation, Second Project for the Udacity Senior Web Developer Nanodegree. Uses service worker through SW-Precache to provide an offline first experience once the timetables and stops have been cached. 

## Setup
- Installing dependencies:
```{r, engine='bash', count_lines}
$ npm install
```

## Loading Data

### Make sure mongo is running

```{r, engine='bash', count_lines}
$ mongod
```

### Run the download script
```{r, engine='bash', count_lines}
$ gulp init-gtfs
```

##Running
```{r, engine='bash', count_lines}
$ npm run dev
```
Client files will be served from ./dist

##Built using:
* Javascript
* HTML5
* CSS3
* Gulp
* BootStrap 3 
* AngularJS
* SW-precache