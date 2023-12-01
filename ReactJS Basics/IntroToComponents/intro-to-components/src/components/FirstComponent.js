// We are goingt o make a function based component.

const FirstComponent = () => {
    // A component can do many things inside it. We CAN write normal javascript inside it too.
    // The main part to be rendered on the page is finally HTML.
    // That link is basically : Whatever we return from this function (in our case FirstComponent) is rendered on the page. This means that we will return the HTML from this JS function.
    return (
        <div>
            <h1>I am from the FirstComponent</h1>
            <p>I am a para from asdghasdhkgadsoh0iu FirstComponent</p>
            <p>I am another para from FirstComponent</p>
        </div>
    );
};

export default FirstComponent;
