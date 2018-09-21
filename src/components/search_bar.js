// same thing as saying const Component = React.Component
// the curly braces here just means 'import React and pull off the property 'Component' as a variable called Component
import React, { Component } from 'react'; 

// define a new class called SearchBar, and give it access to all of the functionality that React.Component has
// in other words, it gives our SearchBar a bunch of functionality from the React.Component class
class SearchBar extends Component {
    constructor(props) {
        super(props);

        // as the user types stuff into the input, we want to update the property 'term' to whatever is in the input
        // ONLY inside the constructor function, do we ever manipulate state like this
        this.state = { term: '' };
    }
    // this is the syntax we used for defining methods on a class
    // whenever we create a class component, we must always define a render method, and return some JSX (otherwise you get an error)
    render() {
        // hook into the 'onChange' event (this is a React property) and tell it to run this method whenever the input is changed
        // we ALWAYS manipulate our state with setState
        // NEVER do this: this.state.term = event.target.value - BAD
        // using setState allows us to have some kind of continuity - behind the scenes, React is doing a lot of stuff with the state object,
        // and so if we just change the value, react does not know that the value changed, so we use setState to inform React that the state
        // is changing, and here what the new state is

        // whenever we have a variable in JSX, you need to wrap it in curly braces
        return (
            <div>
                <input 
                    value={this.state.term}
                    onChange={(event) => this.setState({ term: event.target.value }) } />                 
            </div>
        );
    }

    // onInputChange(e) {
    //     console.log(e.target.value);
    // }
}

export default SearchBar;