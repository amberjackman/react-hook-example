import React from 'react';

export default function withHasMounted(Component){
  class NewComponent extends React.Component {
    
    state = {
      hasMounted: false,
    };

    render () {
      const { hasMounted } = this.state;
      return <Component {...this.porps} hasMounted={hasMounted} />
    }
    componentDidMount() {
      this.setState({hasMounted: true});
    }
  }

  NewComponent.dsiplayName= `withHasMounted(${Component.name})`;

  return NewComponent;
}