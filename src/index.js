import _ from 'lodash';

function createSetter(component, key, action) {
  // Partial state is allocated outside of the function closure so it can be
  // reused with every call, avoiding memory allocation when this function
  // is called.
  return function stateKeySetter(value) {
    let setit = function () {
      // BUG: Potential bug here
      var partialState = _.merge({}, component.state);
      _.set(partialState, key, value);
      component.setState(partialState);
    };
    if (action) {
      if (action.length > 1) {

        action(value, setit);
      } else {
        action(value);
        setit();
      }
    } else {
      setit();
    }
  };
}

const Setters = {
  createSetter: function (component, key, action) {
    // Memoize the setters.
    var cache = component.__keySetters || (component.__keySetters = {});
    return cache[key] || (cache[key] = createSetter(component, key, action));
  }
};

const createlinkState = function (key, action) {
  return {
    value: _.get(this.state, key),
    requestChange: Setters.createSetter(this, key, action)
  };
};

export default function LinkState(Component) {
  Component.prototype.linkState = createlinkState;
}
