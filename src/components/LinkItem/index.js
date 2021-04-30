import React from 'react';

// Class              <====> class Component
// new Class(params)         <Component title=""/>

export default class LinkItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title
        }
    }

    anyFunction = ()=> {
        return this.state.title
    }

    render()  {
        console.log('LinkItem')
        return (
            <a href="/">{this.anyFunction()}</a>
        )
    }
}
