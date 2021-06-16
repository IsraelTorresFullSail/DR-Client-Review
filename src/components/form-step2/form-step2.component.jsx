import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import CustomButton from '../custom-button/custom-button.component';
import Checkbox from '../checkbox/checkbox.component';

import './form-step2.styles.scss';

export class FormStep2 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  errorClass(error) {
    return error.length === 0 ? '' : 'has-error';
  }

  render() {
    const { values, handleCheckboxChange, handleChange } = this.props;
    return (
      <div className="layer2">
        <div className="digital-name"></div>
        <div className="white-box">
          <div className="logo"></div>
          <div className="form-container">
            <h1>Client Feedback</h1>
            <h2>Your continued success is very important to us!</h2>
            <div className="box">
              <p className="p">
                What services are you receiving/have you received? (Click all
                that apply)
              </p>
              <div className="checkbox-wrapper">
                <Checkbox
                  name="Responsive Web Design"
                  value={values.services['Responsive Web Design']}
                  onChange={handleCheckboxChange}
                />
                <p>Responsive Web Design</p>
              </div>
              <div className="checkbox-wrapper">
                <Checkbox
                  name="Social Media Marketing"
                  value={values.services['Social Media Marketing']}
                  onChange={handleCheckboxChange}
                />
                <p>Social Media Marketing</p>
              </div>
              <div className="checkbox-wrapper">
                <Checkbox
                  name="Facebook Ads"
                  value={values.services['Facebook Ads']}
                  onChange={handleCheckboxChange}
                />
                <p>Facebook Ads</p>
              </div>
              <div className="checkbox-wrapper">
                <Checkbox
                  name="Local Search Optimization"
                  value={values.services['Local Search Optimization']}
                  onChange={handleCheckboxChange}
                />
                <p>Local Search Optimization</p>
              </div>
              <div className="checkbox-wrapper">
                <Checkbox
                  name="Link Building And Content"
                  value={values.services['Link Building And Content']}
                  onChange={handleCheckboxChange}
                />
                <p>Link Building And Content</p>
              </div>
              <div className="checkbox-wrapper">
                <Checkbox
                  name="Photography"
                  value={values.services['Photography']}
                  onChange={handleCheckboxChange}
                />
                <p>Photography</p>
              </div>
              <div className="checkbox-wrapper">
                <Checkbox
                  name="Content Marketing"
                  value={values.services['Content Marketing']}
                  onChange={handleCheckboxChange}
                />
                <p>Content Marketing</p>
              </div>
              <div className="checkbox-wrapper">
                <Checkbox
                  name="Search Engine Optimization"
                  value={values.services['Search Engine Optimization']}
                  onChange={handleCheckboxChange}
                />
                <p>Search Engine Optimization</p>
              </div>
              <div className="checkbox-wrapper">
                <Checkbox
                  name="Google Ads"
                  value={values.services['Google Ads']}
                  onChange={handleCheckboxChange}
                />
                <p>Google Ads</p>
              </div>
              <div className="checkbox-wrapper">
                <Checkbox
                  name="Managed LiveChat"
                  value={values.services['Managed LiveChat']}
                  onChange={handleCheckboxChange}
                />
                <p>Managed LiveChat</p>
              </div>
              <div className="checkbox-wrapper">
                <Checkbox
                  name="Map Optimization"
                  value={values.services['Map Optimization']}
                  onChange={handleCheckboxChange}
                />
                <p>Map Optimization</p>
              </div>
              <div className="checkbox-wrapper">
                <Checkbox
                  name="Email Marketing"
                  value={values.services['Email Marketing']}
                  onChange={handleCheckboxChange}
                />
                <p>Email Marketing</p>
              </div>
              <div className="checkbox-wrapper">
                <Checkbox
                  name="Videography"
                  value={values.services['Videography']}
                  onChange={handleCheckboxChange}
                />
                <p>Videography</p>
              </div>
            </div>
            <TextField
              type="text"
              name="otherService"
              defaultValue={values.otherService}
              className="form__input_2"
              id="otherService"
              label="Other"
              required
              onChange={handleChange('otherService')}
            />
            <div className="buttons-container">
              <CustomButton onClick={this.back}>Back</CustomButton>
              <CustomButton onClick={this.continue}>Next</CustomButton>
            </div>
            <div className="dots-wrapper">
              <div className="dot"></div>
              <div className="dot active"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormStep2;
