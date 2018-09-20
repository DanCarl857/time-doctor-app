### Time Doctor App
#### Author: Daniel Carlson

#### Technology
- ReactJS w/ES6
- Electron + Electron Builder
- Styled Components
- Redux
- Extras
  - Foreman - handle running react and electron

##### Fonts
- [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono)
- [Roboto](https://fonts.google.com/specimen/Roboto)
- [Lato](https://fonts.google.com/specimen/Lato)

##### Development

* Development Time: _3hrs 30mins_

###### Running the application
* `git clone https://github.com/DanCarl857/time-doctor-app`
* Checkout the develop branch: `git checkout develop`
* Install dependencies: `yarn` or `npm install`
* Run application: `npm run dev`

###### Logic
* We have start and stop timer events
* For each stop event, get the start time and stop time and calculate the elapsed time: `elapsedTime` function
* After getting elapsed time, get it in terms of `H:mm:ss` using the `formatElapsedTime` function

##### Production


###### References
* [Electron Tutorials](https://electronjs.org/docs)
* [Pausable Timer](https://www.youtube.com/watch?v=pD_T02kcLWI)
* [Project Setup](https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c)