var namespace = {
    _singleton: null,
    get singleton() {
        if (!this._singleton) {
	        this._singleton = {
	            amethod: function() {
                document.getElementById("state").innerHTML = "Connected"
	            console.log("amethod");
	            }
	        }
        }
    return this._singleton;
    }
};

var player = {  
    state: undefined,
    states: {
        playing: {
            initialize: function(target) {
                this.target = target;
            },
            execute: function() {
                console.log('playing!');
                play = 
                document.getElementById("action").innerHTML = 'playing!';
            },
            play: function() {
                console.log('already playing!');
                document.getElementById("action").innerHTML = 'already playing!'; 
            },
            stop: function() {
                this.target.changeState(this.target.states.stopping);
            },
            pause: function() {
                this.target.changeState(this.target.states.pausing);
            },
        },
        stopping: {
            initialize: function(target) {
                this.target = target;
            },
            execute: function() {
                console.log('stopping!');
                document.getElementById("action").innerHTML = 'stopping..' + '\nStopped!';
            },
            play: function() {
                this.target.changeState(this.target.states.playing);
            },
            stop: function() {
                console.log('already stopped!');
                document.getElementById("action").innerHTML = 'already stopped!';
            },
            pause: function() {
                this.target.changeState(this.target.states.pausing);
            }
        },
        pausing: {
            initialize: function(target) {
                this.target = target;
            },            
            execute: function() {
                console.log('pausing!');
                document.getElementById("action").innerHTML = 'pausing..' + '\nPaused';
            },
            play: function() {
                this.target.changeState(this.target.states.playing);
            },
            stop: function() {
                this.target.changeState(this.target.states.stopping);
            },
            pause: function() {
                console.log('already paused!');
                document.getElementById("action").innerHTML = 'already paused!';
            },
        }
    },
    initialize: function() {
        this.states.playing.initialize(this);
        this.states.stopping.initialize(this);
        this.states.pausing.initialize(this);
        this.state = this.states.stopping;
    },
    play: function() {
        this.state.play();
    },
    stop: function() {
        this.state.stop();
    },
    pause: function() {
        this.state.pause();
    },
    changeState: function(state) {
        if (this.state !== state) {
            this.state = state;
            this.state.execute();
        }
    }
};

player.initialize();
