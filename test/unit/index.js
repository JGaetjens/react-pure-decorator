import isEqual from 'lodash.isequal';
import Pure from '../src/';

@Pure()
class MyComponent {}
describe('Pure', () => {
    it('should attach shouldComponentUpdate to the class', () => {
      expect(MyComponent.prototype.shouldComponentUpdate).to.exist;
    });
});
