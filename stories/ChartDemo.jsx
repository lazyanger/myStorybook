import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';

class Chart extends React.Component {
  // static defaultProps = {
  //   handleClick: () => {
  //     console.log('click');
  //   }
  // }

  // static propTypes = {
  //   handleClick: PropTypes.func
  // }

  componentDidMount() {
    this.chart = new Highcharts[this.props.type || 'Chart'](
      this.chartEl,
      this.props.options
    );
  }

  shouldComponentUpdate(nextProps) {
    return nextProps !== this.props;
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