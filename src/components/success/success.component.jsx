/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import './success.styles.scss';

import ggImage from '../../assets/google.png';

import { CopyToClipboard } from 'react-copy-to-clipboard';

class Success extends Component {
  state = {
    testimonial: '',
    copied: false,
  };

  componentDidMount() {
    const testimonial = localStorage.getItem('testimonial');
    this.setState({ testimonial });
  }
  copy = () => {
    this.props.handleCopy();
  };

  render() {
    return (
      <div className="container">
        <div className="layer6">
          <div className="digital-name"></div>
          <div className="white-box6">
            <div className="success-container-text">
              <div className="success-left">
                <div className="content">
                  <h1>Thank you!</h1>
                  <h2 className="h2-success">We appreciate your feedback!</h2>
                  <p>
                    Want to help other businesses future-proof their online
                    presence? Please click below to copy your testimonial and
                    share it to Google!
                  </p>
                  <p className="p-step">
                    <span className="p-strong">Step 1: </span> Click to Copy
                  </p>
                  <CopyToClipboard
                    className="copy-testimonial"
                    text={this.state.testimonial}
                    onCopy={() => this.setState({ copied: true })}
                  >
                    <p>Copy</p>
                  </CopyToClipboard>
                  {this.state.copied ? (
                    <span style={{ color: 'red' }}>Copied.</span>
                  ) : null}
                </div>
                <div className="social-media-container">
                  <p className="p-step">
                    <span className="p-strong">Step 2: </span> Click to Share
                  </p>
                  <a
                    href="https://g.page/digitalresource/review?gm"
                    className="social-media-link"
                    target="_blank"
                  >
                    <div className="sm-logo-gg">
                      <img src={ggImage} alt="Google" />
                    </div>
                    <p className="p-share">Share to Google</p>
                  </a>
                </div>
              </div>
              <div className="success-right">
                <h2 className="h2-white">A huge thanks from the whole team!</h2>
                <div className="logo6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Success;
