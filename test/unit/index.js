import Pure from '.../.../.../react-pure-decorator';
import isEqual from 'lodash.isEqual';


describe('Pure', () => {
  describe('shouldComponentUpdate', () => {

    it('should change the state', () => {
      expect(!this.state || isEqual(this.state, nextState));
    });

    it('should have always returned hello', () => {
      expect(Pure.greet).to.have.always.returned('hello');
    });
  });
});
