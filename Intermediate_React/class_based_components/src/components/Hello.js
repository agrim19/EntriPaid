import React from "react";

// Function based had useState() and props worked out of the box.
// class <ComponentName> extends React.Component
class Hello extends React.Component {
    // render() function in Class based components can contain all the js code that a function based component generallycontains

    // As a class based component is basically a class, it can have a constructor.
    constructor(props) {
        super(props);
        // anything
        // To use props we can just receive them in the constructor and call super(props)
        // If in function based I was doing const [date, setDate] = useState(new Date());
        this.state = {date: new Date(), name: "Agrim"};
    }

    componentDidMount() {
        // I can perform any mounting steps
        // Instantiate my db connection
    }

    componentDidUpdate() {
        // I can perform any update steps
        // Verify it the db connection is still running, if not, I want to restart it.
    }

    // When my component is unmounting, I want to stop the db connection.
    componentWillUnmount() {
        // This is called during unmounting.
        // Stop the db connection.
    }

    render() {
        // this.setState({...this.state, name: "AgrimNew"});
        // Function based component code can go here.
        // The render function returns the layout we want to show on th page.
        return <div>Hello</div>;
    }
}

export default Hello;
