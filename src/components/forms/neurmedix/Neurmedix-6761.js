import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import States from '../../helpers/states';
import RefferalMethods from '../../helpers/refferals';
import InvestmentAmounts from '../../helpers/investmentAmounts';
import Header from '../../partials/Header';
import AgentNotes from '../../templates/AgentNotes';
import { createLead, createTestLead } from '../../../actions/';
import { connect } from 'react-redux';

const agentNotes = [
  {
    name: 'If the caller wants to speak with a NeurMedix Rep.',
    body: ['A Neurmedix investor relations executive will follow up with you once you reserve your shares.', 'All of the information is available via www.NeurmedixIPO.com']
  }
];

class Neurmedix6761 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formCompleted: false,
      testMode: false,
      loading: false,
      offerName: 'NeurMedix',
      intakeNumber: '800-817-6761',
      issuerId: '5abd21a402e65a005a0cf033',
      campaignId: '5abd22cb02e65a005a0cf034'
    }
    this.yesOrNo = ['Please Select', 'Yes', 'No'];
  } 

  renderTextField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-control ${touched && error ? 'form-control-error' : 'form-control'}`;
    const showLabelError = `${touched && error ? 'form-error' : ''}`;
    return (
      <div className="form-group">
        <label className={showLabelError}>{field.question}</label>
        <input 
          type="text" 
          className={className}
          placeholder={field.placeholder}
          {...field.input}
        />
        <small className="form-error">{touched ? error : ''}</small>
      </div>
    );
  }

  renderSelectField(field) {
    const { meta: { touched, error } } = field;
    const showLabelError = `${touched && error ? 'form-error' : ''}`;

    return (
      <div className="form-group">
        <label className={showLabelError}>{field.question}</label>
        <select
          {...field.input}
          className="form-control"
        >
          {field.options}
        </select>
      </div>
    );
  }

  renderTextArea(field) {
    return (
      <div className="form-group">
        <label>{field.question}</label>
        <textarea
          className="form-control"
          {...field.input}
        >
        </textarea>
      </div>
    );
  }

  onSuccessBtnClick() {
    window.location.reload();
  }
  
  onFormSubmit(values) {

    const meta = {
      offerName: this.state.offerName,
      intakeNumber: this.state.intakeNumber,
      issuerId: this.state.issuerId
    };

    if (values.firstName === 'vcmp-test') {
      this.props.createTestLead({
        issuerId: this.state.issuerId,
        campaignId: this.state.campaignId,
        data: values
      },() => {
        this.form.classList.add('hide-form');
        this.setState({formCompleted: true});
      }, meta);
      return false;
    }

    this.setState({loading: true});
    this.props.createLead({
      issuerId: this.state.issuerId,
      campaignId: this.state.campaignId,
      data: values
    }, () => {
      this.form.classList.add('hide-form');
      this.setState({formCompleted: true});
    }, meta);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        {/* Header and Form Title */}
        <Header 
          name={`${this.state.offerName} Intake Script`}
          number={this.state.intakeNumber}
          />
        {/* Container */}
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <AgentNotes data={agentNotes}/>
            </div>
            <div className="col-md-8" ref={(form) => { this.form = form} }>
            <p className="lead">{`Hi, and thank you for calling about the ${this.state.offerName} investment opportunity. A ${this.state.offerName} representative will answer all of your questions. I just have a few questions to ask you first.`}</p>
              <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                <Field
                  name="firstName"
                  question="What is your first name?"
                  placeholder="First Name"
                  component={this.renderTextField}
                />
                <Field
                  name="lastName"
                  question="What is your last name?"
                  placeholder="Last Name"
                  component={this.renderTextField}
                />
                <Field
                  question="What is your phone number?"
                  component={this.renderTextField}
                  name="phone"
                  placeholder="Phone"
                />
                <Field
                  question="What is your email address"
                  component={this.renderTextField}
                  name="email"
                  placeholder="Email"
                />
                <Field 
                  question="What state do you live in?"
                  component={this.renderSelectField}
                  options={States.map(state => <option key={state} value={state}>{state}</option>)}
                  name="state"
                />
                <Field
                  question="How much are you planning to invest?"
                  component={this.renderSelectField}
                  name="investmentAmt"
                  options={InvestmentAmounts.map(amount => <option key={amount} value={amount}>{amount}</option>)}
                />
                <Field
                  question="Is your annual income over $200,000 and/or have a net worth of over $1,000,000?"
                  component={this.renderSelectField}
                  name="accreditedInvestor"
                  options={this.yesOrNo.map(a => <option key={a} value={a}>{a}</option>)}
                />
                <Field
                  question="How did you hear about us?"
                  component={this.renderSelectField}
                  options={RefferalMethods.map(method => <option key={method} value={method}>{method}</option>)}
                  name="refferalSource"
                />
                <Field
                  question="Notes"
                  name="notes"
                  component={this.renderTextArea}
                />
                <button disabled={this.state.loading} type="submit" className="btn btn-success float-right">Submit</button>
              </form>
            </div>
            { this.state.formCompleted ? 
            <div className="col-md-8" ref={(success) => { this.success = success}}>
              <p className="lead">{`Thanks for calling ${this.state.offerName} a Representative will contact you shortly.`}</p>
              <button className="btn btn-success float-right" onClick={this.onSuccessBtnClick}>Go Back</button>
              <div className="clearfix"></div>
            </div>
            : null }
          </div>
        </div>

      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Please enter a valid First Name";
  }

  if (!values.lastName) {
    errors.lastName = "Please enter a valid Last Name";
  }

  if (!values.phone) {
    errors.phone = "Please enter a valid phone number"
  }

  if (!values.email) {
    errors.email = "Please enter a valid email address";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'Neurmedix6761'
})(
  connect(null, { createLead, createTestLead })(Neurmedix6761)
);