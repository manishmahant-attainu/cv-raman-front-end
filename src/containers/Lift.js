import { Component } from 'react';
import Button from '../components/Button';
import Profile from '../components/Profile';
import TextInput from '../components/TextInput';

const fields = {
    firstName: '',
    lastName: '',
    askInstructor: '',
}

const formFields = [
    {
        name: 'firstName',
        label: 'First Name',
        type: 'text'
    },
    {
        name: 'lastName',
        label: 'Last Name',
        type: 'text'
    },
];

// const secret = {
//     passKey: 'saddkadkasdb'
// }

export default class Lift extends Component {
    state = {
        ...fields,
        loading: false,
        formFields,
        fieldName: '',
        fieldLabel:'',
        fieldType:''
    }

    onTextInputChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        });

        console.log(this.state);

        setTimeout(() => {
            this.setState({
                ...fields,
                loading: false
            });
        }, 2000);
    }

    addPhoneNumberField = () => {
        // this.state.formFields.push({
        //     name: 'phoneNumber',
        //     label: 'Phone Number'  
        // })
        this.setState({
            formFields: [ 
                ...this.state.formFields,
                {
                    name: 'phoneNumber',
                    label: 'Phone Number'  
                }
            ]
        })
    }


    addField = (e) => {
        e.preventDefault();
        this.setState({
            formFields: [ 
                ...this.state.formFields,
                {
                    name: this.state.fieldName,
                    label: this.state.fieldLabel,
                    type: this.state.fieldType,
                }
            ],
            fieldName: '',
            fieldLabel: '',
            fieldType: '',
        })
    }

    renderFormFields = () => {
        return this.state.formFields.map((v,i) => {
            let jsx = '';
            switch (v.type) {
                case 'text':
                case 'number':
                    jsx=<TextInput
                            type={v.type}
                            key={i}
                            name={v.name}
                            changeHandler={this.onTextInputChange}
                            value={this.state[v.name] || ''}
                            label={v.label}
                            isSubmitting={this.state.loading}
                        />
                    break;
                case v.type:
                    jsx= v.type
                    break;
            
                default:
                    jsx=v.type
                    break;
            }

            return jsx;
        })
    }

    render() {

        return (
            <>
                <form onSubmit={this.addField}>
                    <TextInput
                        name="fieldLabel"
                        changeHandler={this.onTextInputChange}
                        value={this.state.fieldLabel}
                        label="Field Label"
                        isSubmitting={this.state.loading}
                    />
                    <TextInput
                        name="fieldName"
                        changeHandler={this.onTextInputChange}
                        value={this.state.fieldName}
                        label="Field Name"
                        isSubmitting={this.state.loading}
                    />
                    <TextInput
                        name="fieldType"
                        changeHandler={this.onTextInputChange}
                        value={this.state.fieldType}
                        label="Field Type"
                        isSubmitting={this.state.loading}
                    />
                    <button type="submit">Add Field</button>
                </form>
                <h1>Lifting Up Of States</h1>
                <Profile
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                />
                {
                    // !this.state.loading &&
                    <form onSubmit={this.onFormSubmit}>
                        {this.renderFormFields()}
                        {
                            this.state.firstName.trim() ?
                            <TextInput
                                name="askInstructor"
                                changeHandler={this.onTextInputChange}
                                value={this.state.askInstructor}
                                label="Ask Instructor"
                                isSubmitting={this.state.loading}
                            /> :
                            null
                        }
                        <Button isSubmitting={this.state.loading} cls="btn-primary" type="submit" title="Submit" />
                    </form>
                }
                {
                    this.state.loading &&
                    <div>
                        <h1>Loading .......</h1>
                    </div>
                }
            </>
        )
    }
}
