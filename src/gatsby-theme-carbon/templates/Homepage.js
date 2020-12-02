import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/cloud-data.jpg';

const FirstLeftText = () => <p>This DemoHub is designed to be a single point of access for all assets related to IBM Edge Application Manager Trial</p>;

const FirstRightText = () => (
  <p>
    Are you aware that you can have a IBM Edge Application Manager instance running in IBM Cloud only for you? Here you will see how to request your environment and explore other assets to support you with your sales opportunity. Enjoy it!
  </p>
);

const SecondLeftText = () => <p>IBM Cloud Paks</p>;

const SecondRightText = () => (
  <p>
    IBM Cloud™ Paks are enterprise-ready, containerized software solutions that give clients an open, faster and more secure way to move core business applications to any cloud.
    <a
      className={calloutLink}
      href="https://www.ibm.com/cloud/paks/"
    >
      IBM Cloud Paks →
    </a>
  </p>
);

const BannerText = () => <h1>IBM Edge Application Manager</h1>;

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
