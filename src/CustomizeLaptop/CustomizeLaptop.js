import React, { Component } from 'react';
import CustomizeItem from '../CustomizeItem/CustomizeItem'




class CustomizeLaptop extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      return <CustomizeItem feature={feature} idx={idx}
      key={idx}
      features={this.props.features}
      {...this.props}
      />

    });
    return (
      <form className="main__form">
        <h3>Customize Your Laptop</h3>
        {features}
      </form>
    );

  }
}

export default CustomizeLaptop;