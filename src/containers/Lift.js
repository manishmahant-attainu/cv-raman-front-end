import { Component } from 'react';
import Button from '../components/Button';
import Profile from '../components/Profile';
import TextInput from '../components/TextInput';


//Basic React below topics remains:
    //learn 1 react hook useState
    //Loops
    //Key
    //Life Cycle Methods
const fields = {
    firstName: '',
    lastName: '',
    askInstructor: '',
}

export default class Lift extends Component {
    state = {
        ...fields,
        loading: false
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

    render() {

        return (
            <>
                <h1>Lifting Up Of States</h1>
                <Profile
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                />
                {
                    // !this.state.loading &&
                    <form onSubmit={this.onFormSubmit}>
                        <TextInput
                            name="firstName"
                            changeHandler={this.onTextInputChange}
                            value={this.state.firstName}
                            label="First Name"
                            isSubmitting={this.state.loading}
                        />
                        <TextInput
                            name="lastName"
                            changeHandler={this.onTextInputChange}
                            value={this.state.lastName}
                            label="Last Name"
                            isSubmitting={this.state.loading}
                        />
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
