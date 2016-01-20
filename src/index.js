import isEqual from 'lodash.isEqual';

export default function Pure() {
  return function decorator(Component) {
    return class PureComponent extends Component {
      shouldComponentUpdate(nextProps, nextState) {
        return (!this.props ||isEqual(this.props, nextProps)) || (!this.state || isEqual(this.state, nextState));
      }
    };
  };
}