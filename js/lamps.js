'use strict';

var scheme1 = {
  name: 'gate',
  type: 'XOR',
  children: [{
    name: 'gate',
    type: 'AND',
    children: [{
      name: 'switch',
      type: 'ON',
      state: 1
    }, {
      name: 'switch',
      type: 'OFF',
      state: 0
    }]
  }, {
    name: 'gate',
    type: 'NOT',
    children: [{
      name: 'switch',
      type: 'ON',
      state: 1
    }]
  }]
};

var scheme2 = {
  name: 'gate',
  type: 'AND',
  children: [{
    name: 'gate',
    type: 'OR',
    children: [{
      name: 'switch',
      type: 'ON',
      state: 1
    }, {
      name: 'gate',
      type: 'XOR',
      children: [{
        name: 'switch',
        type: 'OFF',
        state: 0
      }, {
        name: 'gate',
        type: 'NOT',
        children: [{
          name: 'switch',
          type: 'ON',
          state: 1
        }]
      }]
    }]
  }, {
    name: 'gate',
    type: 'NOT',
    children: [{
      name: 'switch',
      type: 'ON',
      state: 1
    }]
  }]
};

var scheme3 = {
  name: 'gate',
  type: 'XOR',
  children: [{
    name: 'gate',
    type: 'NOT',
    children: [{
      name: 'switch',
      type: 'OFF',
      state: 0
    }]
  }, {
    name: 'gate',
    type: 'OR',
    children: [{
      name: 'gate',
      type: 'OR',
      children: [{
        name: 'switch',
        type: 'OFF',
        state: 0
      }, {
        name: 'gate',
        type: 'AND',
        children: [{
          name: 'switch',
          type: 'OFF',
          state: 0
        }, {
          name: 'switch',
          type: 'ON',
          state: 1
        }]
      }]
    }, {
      name: 'switch',
      type: 'OFF',
      state: 0
    }]
  }]
};

var actions = {
  OR: function(a, b) {
    return a || b;
  },
  AND: function(a, b) {
    return a && b;
  },
  XOR: function(a, b) {
    return a ^ b;
  },
  NOT: function(a) {
    return !a;
  },
  ON: function() {
    return true;
  },
  OFF: function() {
    return false;
  }
};

function lamp(obj) {
  for (var key in obj) {
    if (key === 'type') {
      if (obj.type === 'OR') return actions.OR(lamp(obj.type), lamp(obj.type));
      if (obj.type === 'AND') return actions.AND(lamp(obj.type), lamp(obj.type));
      if (obj.type === 'XOR') return actions.XOR(lamp(obj.type), lamp(obj.type));
      if (obj.type === 'NOT') return actions.NOT(lamp(obj.type));
      if (obj.type === 'ON') return actions.ON();
      if (obj.type === 'OFF') return actions.OFF();
    
    } else if (obj.children && obj.children.length) {
      for (var i = 0; i < obj.children.length; i++) {
        lamp(obj.children[i]);
      }
    }
  }
}

lamp(scheme1);
