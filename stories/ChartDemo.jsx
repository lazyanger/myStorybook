import React from 'react';
import Highcharts from 'highcharts';

class Chart extends React.Component {
  componentDidMount() {
    this.chart = new Highcharts[this.props.type || 'Chart'](
      this.chartEl,
      this.props.options
    );
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return <div ref={el => (this.chartEl = el)} />;
  }
}

class ChartDemo extends React.Component {
  render() {
    return (
        <Chart options={this.props.options} />
    );
  }
}

export default ChartDemo;