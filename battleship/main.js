'use strict';

const IMGS_SHIPS = 17;
const IMGS_MISS = 8;
const FIELD_SIZE = 10;

let randShip = Math.floor(Math.random() * IMGS_SHIPS);

const control = {
  shots: [],

  parse(str) {
    if (!str || str.length !== 2) {
      view.showMsg('Enter a letter and a number.');
      return;

    } else {
      str = str.toLowerCase();

      let chars = ['a','b','c','d','e','f','g','h','i','j'];
      let row = chars.indexOf( str.charAt(0) );
      let col = str.charAt(1);

      if (isNaN(row) || isNaN(col) || row < 0 || row >= model.boardSize || col < 0 || col >= model.boardSize) {
        view.showMsg('Outside the board.');

      } else { return row + col; }
    }
  },

  processing(str) {
    let target = this.parse(str);

    if (target) {
      if ( this.shots.indexOf(target) >= 0 ) {
        view.showMsg('You already shot this cell.');
        return;
      }

      this.shots.push(target);

      let hit = model.fire(target);

      if ( hit && model.shipsSunk === model.ships.length ) view.showMsg(`You win the game in ${ this.shots.length } shots!`);
    }
  }
};

const model = {
  boardSize: FIELD_SIZE,

  ships4Deck: {
    length: 4,
    amount: 1
  },
  ships3Deck: {
    length: 3,
    amount: 2
  },
  ships2Deck: {
    length: 2,
    amount: 3
  },
  ships1Deck: {
    length: 1,
    amount: 4
  },

  shipsSunk: 0,

  ships: [],

  getNumShips() {
    // return this.ships4Deck.amount + this.ships3Deck.amount + this.ships2Deck.amount + this.ships1Deck.amount;
    return this.ships.length;
  },

  generateShipsLocs() {
    let locations = [];

    const randDirect = () => Math.round( Math.random() );

    const genShip = length => {
      let row;
      let col;
      let direction = randDirect();
      let shipLocations = [];

      if (direction) {
        // start horizontal
        row = Math.floor( Math.random() * model.boardSize );
        col = Math.floor( Math.random() * (model.boardSize - length + 1) );
      } else {
        // start vertical
        row = Math.floor( Math.random() * (model.boardSize - length + 1) );
        col = Math.floor( Math.random() * model.boardSize );
      }

      for (let i = 0; i < length; i++) {
        if (direction) {
          // horizontal shipLocations
          shipLocations.push( '' + row + (col + i) );
        } else {
          // vertical shipLocations
          shipLocations.push( '' + (row + i) + col );
        }
      }

      return shipLocations;
    };

    const collision = (locations) => {
      if (!model.ships.length) return false;

      for (let ship of model.ships) {
        for (let location of locations) {
          if ( ship.locations.indexOf(location) >= 0 ) return true;
        }
      }

      return false;
    };

    const generateShips = (start, amount, length) => {
      for (let i = start; i < (start + amount); i++) {
        do {
          locations = genShip(length);
        } while ( collision(locations) );

      let ship = {};
      ship.locations = locations;

      let hits = new Array(locations.length);
      ship.hits = hits;

      model.ships.push(ship);
      }
    };

    generateShips(model.ships.length, model.ships4Deck.amount, model.ships4Deck.length);
    generateShips(model.ships.length, model.ships3Deck.amount, model.ships3Deck.length);
    generateShips(model.ships.length, model.ships2Deck.amount, model.ships2Deck.length);
    generateShips(model.ships.length, model.ships1Deck.amount, model.ships1Deck.length);
  },

  isSunk(ship) {
    for (let hit of ship.hits) if (hit !== 'hit') return false;

    return true;
  },

  fire(target) {
    for (let ship of this.ships) {
      let index = ship.locations.indexOf(target);

      if (index >= 0) {
        ship.hits[index] = 'hit';

        view.showHit(target);
        
        if ( this.isSunk(ship) ) {
          view.showMsg('You hit and sunk the battleship!');
          this.shipsSunk++;

        } else { view.showMsg('Hit! :)'); }

        return true;
      }
    }
    view.showMiss(target);
    view.showMsg('You missed :(');
    
    return false;
  }
};

const view = {
  showMsg(msg) {
    let msgArea = document.querySelector('.message');
    msgArea.textContent = msg || 'Start game';
  },

  showHit(position) {
    let cell = document.getElementById(position);
    cell.style.backgroundColor = '#6cf';
    cell.style.backgroundImage = `url(img/ships/s${randShip}.png)`;
    cell.style.backgroundPosition = '50% 50%';
    cell.style.backgroundRepeat = 'no-repeat';
    cell.style.backgroundSize = 'contain';
  },

  showMiss(position) {
    let cell = document.getElementById(position);
    cell.style.background = `url(img/miss/m${ Math.floor(Math.random() * IMGS_MISS) }.jpg) no-repeat 50% 50%`;
    cell.style.backgroundSize = 'contain';
  }
};

const init = () => {
  model.generateShipsLocs();

  const btn = document.forms[0].fire;
  const input = document.forms[0].target;

  const getVal = e => {
    control.processing(input.value);
    input.value = '';
  };

  const pressEnter = e => {
    if (e.keyCode === 13) {
      btn.click();
      e.preventDefault();
    }
  };

  btn.addEventListener('click', getVal);
  document.addEventListener('keypress', pressEnter);
};

init();

console.log(model.ships);
