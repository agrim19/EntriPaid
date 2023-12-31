import {useParams, useSearchParams} from "react-router-dom";

const MyComponent = () => {
    const {message} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div>
            Hello!
            <div>The message from the route is : {message}</div>
            <div>
                The message from query param is :{" "}
                {searchParams.get("messageFromQuery")}
            </div>
            <div>
                The second message from query param is :{" "}
                {searchParams.get("secondMessageFromQuery")}
            </div>
        </div>
    );
};

export default MyComponent;
