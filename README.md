### Time Doctor App
#### Author: Daniel Carlson

#### Technology Used
- ReactJS w/ES6
- Electron + Electron Builder
- Styled Components
- Redux
- LocalStorage
- Extras
  - Foreman - handle running react and electron
  - HTML 
  - CSS
  - JavaScript
  - Redux Thunk
  - React Redux

##### Fonts
- [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono)
- [Roboto](https://fonts.google.com/specimen/Roboto)
- [Lato](https://fonts.google.com/specimen/Lato)

##### Development

* Development Time: _12hrs 5mins_

###### Running the application
* `git clone https://github.com/DanCarl857/time-doctor-app`
* Checkout the develop branch: `git checkout develop`
* Install dependencies: `yarn` or `npm install`
* Run application: `npm run dev`

##### Production

###### Running the application

##### Difficulties
* For some reason styling for svg files wasn't working so I had to manually style them from their code and had to design a time doctor icon myself.
* Real time communication between main window and widget window
* Was ill during the test period

##### Future work
* Add real time communication between the main window and widget window
* Add real time update of worked time(right now it updates on every start of the application)
* Add functionality to control timer from widget
* Add unit and e2e tests
* Add Docker
* Use redux actions to control timer for easier control
* Add widget window using view managers. Concept can be found [here](https://github.com/chentsulin/electron-react-boilerplate/issues/623)

###### References
* [Electron Tutorials](https://electronjs.org/docs)
* [Pausable Timer](https://www.youtube.com/watch?v=pD_T02kcLWI)
* [Project Setup & Workaround to accessing Electron from React](https://medium.freecodecamp.org/building-an-electron-application-with-create-react-app-97945861647c)