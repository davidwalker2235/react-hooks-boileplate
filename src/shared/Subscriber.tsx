import React from "react";
import {SubscriberProps} from '../interfaces/appInterfaces'

export class Subscriber extends React.Component<SubscriberProps, {}> {
  componentDidMount() {
    this.props.subscribe();
  }

  componentWillUnmount() {
    if (this.props.unsubscribe) {
      this.props.unsubscribe();
    }
  }

  render() {
    return (<div style={{width: "100%", height: "100%"}}>{this.props.children || null}</div>);
  }
}
