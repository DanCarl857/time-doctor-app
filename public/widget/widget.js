const {ipcRenderer} = require('electron')
const React = require('react');
const ReactDOM = require('react-dom');

let working = false;

let span = document.getElementById("timer");
ipcRenderer.on("timer-start", (event, args)=>{
    let time=args.timer.hours+":"+args.timer.minutes;
    // let time = "00:00:00";
    ReactDOM.render(
       time ,span
    );
    working = args.working;
    renderImgSrc(working);
});

document.getElementById('hide').addEventListener('click' , _=>{
    ipcRenderer.send('hide');
});

document.getElementById('startStop').addEventListener('click' , _=>{
    working = !working;
    renderImgSrc(working);
    ipcRenderer.send('timer-state-change' , {working});
})

function renderImgSrc(working){
    let src;
    let statusLight = document.getElementById('statusLight');
    if(working){
        src="./assets/stop.svg";
        statusLight.className = 'shine';
    }else{
        src="./assets/play.svg";
        statusLight.className = 'dim';
    }

    ReactDOM.render(
        React.createElement(
            "img",
            {src , id:'playStop'}
        )
        ,document.getElementById('startStop')
    )
}

function onClick(evt){
    working = !working;
    playPause(working);
    ipcRenderer.send("timer-state-change" , {working})
}
// playPause(working);

function playPause(work){
    let img = document.getElementById('startStop');
    if(work){
        img.src="./assets/stop.svg"
    }else{
        img.src="./assets/play.svg"
    }
}



require('./../electron-starter');