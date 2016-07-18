/**
*Singleton Pattern which generate a unique connection
**/
var namespace = {
    _singleton: null,
    get singleton() {
        if (!this._singleton) {
	        this._singleton = {
	            amethod: function() {
                document.getElementById("state").innerHTML = "Connected"
	            }
	        }
        }
    return this._singleton;
    }
};

/**
*Indicate the state of the player through buttons with State Pattern
**/
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

/**
* Count that jump 3 places if the condition is OK with iterator pattern
**/
var iterator = (function() {

    var index = 0,
        data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        length = data.length;

    return {
        next: function() {
            var element;
            if (!this.hasNext()) {
                return null;
            }
            element = data[index];
            index += 3;
            return element;
        },
        hasNext: function() {
            return index < length;
        },
        rewind: function() {
            index = 0;
            return data[index];
        },
        current: function() {
            return data[index];
        }
    }

}());

var iterate = (function(){
	while(iterator.hasNext()) {  
        console.log(iterator.next());
    }

    iterator.rewind();  
    console.log(iterator.current());
});

/**
*
**/
var Movement = function(func) {  
    this.move = func;
};

Movement.prototype.execute = function() {  
    this.move();
};

var running = new Movement(function() {  
    console.log("Hey I'm running!");
});

var walking = new Movement(function() {  
    console.log("Just walking along...");
});

function changeMovementType(movement) {  
    this.movement = movement;
}

function move() {  
    this.movement.execute();
}
var running = new Movement(function() {  
    console.log("Hey I'm running!");
});

var walking = new Movement(function() {  
    console.log("Just walking along...");
});



var hero = new Character();  
// hero.changeMovementType(walking);  
// hero.move();

// ... OH NO MOTHERFUCKIN' DINOSAURS!!!

// hero.changeMovementType(running);  
// hero.move(); 
