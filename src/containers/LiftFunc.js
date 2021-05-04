import { useState } from 'react';
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

const LiftFunc = () => {

    const [ state, setState ] = useState({
        counter:0,
        ...fields,
        loading: false,
        formFields,
        fieldName: '',
        fieldLabel:'',
        fieldType:''
    });

    const onTextInputChange = (name, value) => {
        
        setState({
            ...state,
            [name]: value
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        setState({
            ...state,
            loading: true
        });

        console.log(state);

        setTimeout(() => {
            setState({
                ...state,
                ...fields,
                loading: false
            });
        }, 2000);
    }

    const addField = (e) => {
        e.preventDefault();
        setState({
            ...state,
            formFields: [ 
                ...state.formFields,
                {
                    name: state.fieldName,
                    label: state.fieldLabel,
                    type: state.fieldType,
                }
            ],
            fieldName: '',
            fieldLabel: '',
            fieldType: '',
        })
    }

    const renderFormFields = () => {
        return state.formFields.map((v,i) => {
            let jsx = '';
            switch (v.type) {
                case 'text':
                case 'number':
                    jsx=<TextInput
                            type={v.type}
                            key={i}
                            name={v.name}
                            changeHandler={onTextInputChange}
                            value={state[v.name] || ''}
                            label={v.label}
                            isSubmitting={state.loading}
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

    return (
        <>
            <form onSubmit={addField}>
                <TextInput
                    name="fieldLabel"
                    changeHandler={onTextInputChange}
                    value={state.fieldLabel}
                    label="Field Label"
                    isSubmitting={state.loading}
                />
                <TextInput
                    name="fieldName"
                    changeHandler={onTextInputChange}
                    value={state.fieldName}
                    label="Field Name"
                    isSubmitting={state.loading}
                />
                <TextInput
                    name="fieldType"
                    changeHandler={onTextInputChange}
                    value={state.fieldType}
                    label="Field Type"
                    isSubmitting={state.loading}
                />
                <button type="submit">Add Field</button>
            </form>
            <h1>Lifting Up Of States</h1>
            <Profile
                firstName={state.firstName}
                lastName={state.lastName}
            />
            {
                // !state.loading &&
                <form onSubmit={onFormSubmit}>
                    {renderFormFields()}
                    {
                        state.firstName.trim() ?
                        <TextInput
                            name="askInstructor"
                            changeHandler={onTextInputChange}
                            value={state.askInstructor}
                            label="Ask Instructor"
                            isSubmitting={state.loading}
                        /> :
                        null
                    }
                    <Button isSubmitting={state.loading} cls="btn-primary" type="submit" title="Submit" />
                </form>
            }
            {
                state.loading &&
                <div>
                    <h1>Loading .......</h1>
                </div>
            }
        </>
    )
}

export default LiftFunc;
