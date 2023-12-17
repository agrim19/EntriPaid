import "./styles.css";

function App() {
    return (
        <div className="App">
            {/* My whole aim of this video is to give padding to this h1. */}
            {/* The difference between the style attribute in HTML vs the style attribute in React is that the one in react takes the css in JSON format. */}
            {/* In this JSON, the keys will be css properties and the values will be their values */}
            {/* Second VERY important point about React style attribute is that the JSON it takes has keys in camelCase */}
            {/* // cases:
              background-color in camelcase would be backgroundColor
              and similarly for anything else.
              Basically, camel case is the case where there is NO space, NO -, NO _, nothing between any of the words. The only separator is that except the first word, all words have their first letter capital
            */}
            <h1
                style={{
                    padding: 50,
                    backgroundColor: "blue",
                }}
                // The attribute for giving a classin React is className
                className="heading"
            >
                This is a heading
            </h1>
        </div>
    );
}

export default App;
