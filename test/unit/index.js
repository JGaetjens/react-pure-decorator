import Pure from '../../src/';

const nextProps = {
  propVal: 1
};
const nextState = {
  stateVal: 2
};
const currState = {
  stateVal: 1
};
const currProps = {
  propVal: 2
};

@Pure()
class MyComponent {
  constructor(){
    this.state = currState;
    this.props = currProps;
  }
}

describe('Pure', () => {
  var mc = new MyComponent();

  it('should attach shouldComponentUpdate to the class', () => {
      expect(MyComponent.prototype.shouldComponentUpdate).to.exist;
    });

  it('should not update when nextState and nextProps are the same as current state and props', () => {
    expect(mc.shouldComponentUpdate(currProps, currState)).to.be.equal(false);
  });

  it('should update when nextState is different than currState but nextProps and currProps are the same', () => {
    expect(mc.shouldComponentUpdate(currProps, nextState)).to.be.equal(true);
  });


});
