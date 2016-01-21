import isequal from 'lodash.isequal';

export default function Pure() {
  return function decorator(Component) {
    return class PureComponent extends Component {
      shouldComponentUpdate(nextProps, nextState) {
        return (!this.props ||isequal(this.props, nextProps)) || (!this.state || isequal(this.state, nextState));
      }
    };
  };
}