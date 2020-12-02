import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

const CustomHeader = props => (
  <Header {...props}>
    DemoHub -&nbsp;<span>IBM Edge Application Manager</span>
  </Header>
);

export default CustomHeader;
