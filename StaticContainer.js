import { Component, Children } from 'react';

class StaticContainer extends Component {

  shouldComponentUpdate(nextProps: Object): boolean {
    return !!nextProps.shouldUpdate;
  }

  render(): ?ReactElement {
    var child = this.props.children;
    if (child === null || child === false) {
      return null;
    }
    return Children.only(child);
  }

}

export default StaticContainer;
