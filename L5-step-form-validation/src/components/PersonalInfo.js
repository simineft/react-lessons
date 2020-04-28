import React, { Component } from 'react';
import DatePicker from 'react-datepicker2';
import momentJalaali from 'moment-jalaali';
import { connect } from "react-redux"
import { nextStep, addPerson, updateInput } from '../redux/action';


class PersonalInfo extends Component {
    state = {
        value: momentJalaali(),
        isGregorian: true,
        errors: {},
        firstName: "",
        lastName: "",
        nationalCode: "",


    }

    continue = e => {
        e.preventDefault();
        let { errors, firstName, lastName, nationalCode } = this.props.person
        this.props.addPerson({ firstName, lastName, nationalCode });
        this.props.nextStep();

    }

    validateField = ({ target: { value, name } }) => {
        // let { value, name } = target
        this.setState({
            errors: {
                ...this.state.errors,
                [name]: value.length > 3 ? null : `${name} must be longer than 3 characters`

            }

        });

    }

    //code dovome be sarti ejra
    validIranianNationalCode = ({ target: { value, name } }) => {
        if (value.length >= 10) return;
        let errors = {};

        !this.isValidIranianNationalCode(value) && (errors = { [name]: "this is not vaild naionalCode" });
        (value.length < 11) && (errors = { [name]: "must be 10 digit" });

        this.setState({
            errors: { ...this.state.errors, ...errors }
        })

    }
    

    isValidIranianNationalCode = (value) => {
        if (!/^\d{10}$/.test(value))
            return false;
        var check = +value[9];
        var sum = Array(9).fill().map((_, i) => +value[i] * (10 - i)).reduce((x, y) => x + y) % 11;
        return (sum < 2 && check == sum) || (sum >= 2 && check + sum == 11);
    }

 



    switchLanguage = (e) => {
        e.preventDefault();
        this.setState({
            isGregorian: !this.state.isGregorian
        })

    }


    handleChange = input => e => {
        let { updateInput } = this.props
        updateInput({ [input]: e.target.value })

    }


    handleDateChange = (date) => {
        let { updateInput } = this.props
        updateInput({ birthDay: date })

    }



    render() {
        const { firstName, lastName, nationalCode } = this.props.person;
        console.log(this.props.person, "personalInfo")


        return (
            <>
                <form  >
                    <div className="settingForm" >
                        <label> نام: </label>
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            placeholder="نام"
                            onChange={this.handleChange('firstName')}
                            onKeyPress={this.validateField}

                        />
                    </div>
                    {
                        this.state.errors.firstName &&
                        <div className="error" >
                            {this.state.errors.firstName}
                        </div>
                    }
                    <div className="settingForm" >
                        <label>  نام خانوادگی: </label>
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            placeholder="نام خانوادگی"
                            onChange={this.handleChange('lastName')}
                            onKeyPress={this.validateField}

                        />


                    </div>
                    {
                        this.state.errors.lastName &&
                        <div className="error" >
                            {this.state.errors.lastName}
                        </div>
                    }


                    <div className="settingForm" >
                        <label>  کدملی: </label>
                        <input
                            type="text"
                             maxLength="10"
                            name="nationalCode"
                            value={nationalCode}
                            placeholder="کد ملی"
                            onChange={this.handleChange('nationalCode')}
                            onKeyPress={this.validIranianNationalCode}

                        />

                    </div>
                    {
                        this.state.errors.nationalCode &&
                        <div className="error" >
                            {this.state.errors.nationalCode}
                        </div>
                    }

                    <div className="settingForm  calender" >
                        <label>تاریخ تولد: </label>
                        <DatePicker
                            value={this.state.value}
                            isGregorian={this.state.isGregorian}
                            onChange={value => this.handleDateChange(value.toJSON())}

                        />
                        <br />
                        <div className="settingButton"  >
                            <button onClick={this.switchLanguage}>
                                {this.state.isGregorian ? 'میلادی' : 'شمسی'}
                            </button>
                        </div>
                    </div>

                    <button className="Next" onClick={this.continue}>
                        بعدی »
                </button>
                </form>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        person: state
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        nextStep: () => dispatch(nextStep()),
        addPerson: (person) => dispatch(addPerson(person)),
        updateInput: (input) => dispatch(updateInput(input)),


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);