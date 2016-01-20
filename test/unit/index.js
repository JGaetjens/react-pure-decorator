import Pure from '.../react-pure-decorator';

describe('Pure', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(Pure, 'greet');
      Pure.greet();
    });

    it('should have been run once', () => {
      expect(Pure.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(Pure.greet).to.have.always.returned('hello');
    });
  });
});
