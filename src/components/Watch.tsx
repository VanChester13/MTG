import React from "react";

interface State {
  time: string;
  interval: NodeJS.Timeout | null;
}

class Watch extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      time: "",
      interval: null,
    };
    this.tick = this.tick.bind(this);
    this.format = this.format.bind(this);
  }

  tick() {
    const date = new Date();
    const hour = this.format(date.getHours());
    const min = this.format(date.getMinutes());
    const sec = this.format(date.getSeconds());
    const endDate = `${hour} : ${min} : ${sec}`;
    this.setState({ time: endDate });
  }

  format(time: number) {
    const str = String(time);
    return str.length > 1 ? str : `0${str}`;
  }

  componentDidMount(): void {
    this.setState({
      interval: setInterval(this.tick, 1000),
    });
  }

  componentWillUnmount() {
    if (this.state.interval) {
      clearInterval(this.state.interval);
    }
  }

  render() {
    return (
      <div className="watch">
        <div className="time">{`${this.state.time}`}</div>
      </div>
    );
  }
}

export default Watch;
