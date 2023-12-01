const CheckComponent = ({xyz, doSomething}) => {
    doSomething();
    return (
        <div>
            {xyz.map((item) => {
                return item;
            })}
            {/* <ThirdComponent arr={xyz} /> */}
        </div>
    );
};

export default CheckComponent;
