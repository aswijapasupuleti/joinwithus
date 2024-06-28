import React from 'react';
import '../styles/PartnerWithUs.css'; // Ensure this path is correct
import googleLogo from '../assets/images/google-logo.png';
import microsoftLogo from '../assets/images/microsoft-logo.png';
import awsLogo from '../assets/images/aws-logo.png';
import ciscoLogo from '../assets/images/cisco-logo.png';
import intelLogo from '../assets/images/intel-logo.png';

const PartnerWithUs = () => {
  return (
    <div className="partner-with-us">
      <h1>We are partnered with</h1>
      <div className="partners">
        <div className="partner">
          <div className="partner-inner">
            <img src={googleLogo} alt="Google Workspace" className="partner-logo" />
            <h2>Google Workspace</h2>
            <p>Migrate to Google Workspace</p>
            <p>Migrate mail, file and archive data to Google Workspace from over 20 modern and legacy source platforms.</p>
            <a href="https://workspace.google.com/" target="_blank" rel="noopener noreferrer">Learn more &rarr;</a>
          </div>
        </div>
        <div className="partner">
          <div className="partner-inner">
            <img src={microsoftLogo} alt="Microsoft 365" className="partner-logo" />
            <h2>Microsoft 365</h2>
            <p>Migrate to Microsoft 365</p>
            <p>Migrate mail, file and archive data to Microsoft 365 from over 20 modern and legacy source platforms.</p>
            <a href="https://www.microsoft.com/microsoft-365" target="_blank" rel="noopener noreferrer">Learn more &rarr;</a>
          </div>
        </div>
        <div className="partner">
          <div className="partner-inner">
            <img src={awsLogo} alt="AWS Cloud Security" className="partner-logo" />
            <h2>Security built in</h2>
            <p>Security is built into your AWS cloud environment as standard, with highly qualified security analysts on hand for threat detection and mitigation, if needed.</p>
            <a href="https://aws.amazon.com/security/" target="_blank" rel="noopener noreferrer">Learn more &rarr;</a>
          </div>
        </div>
        <div className="partner">
          <div className="partner-inner">
            <img src={ciscoLogo} alt="Cisco" className="partner-logo" />
            <h2>Cisco</h2>
            <p>We are a Gold Level Cisco Partner with Cisco UCS and MDS solutions underpinning our Public and Private cloud offerings.</p>
            <a href="https://www.cisco.com/" target="_blank" rel="noopener noreferrer">Learn more &rarr;</a>
          </div>
        </div>
        <div className="partner">
          <div className="partner-inner">
            <img src={intelLogo} alt="Intel" className="partner-logo" />
            <h2>Intel</h2>
            <p>As a Titanium partner of Intel, we ensure our customers have access to the latest CPU technologies for their solutions.</p>
            <a href="https://www.intel.com/" target="_blank" rel="noopener noreferrer">Learn more &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;