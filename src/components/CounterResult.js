import { connect } from "react-redux";

function CounterResult({counter}) {
    return (
        <>
            <h3>Counter Result</h3>
            <p>{`[count]:[${counter}]`}</p>
        </>
    )
}

const mapStateToProps = (state) => ({
    counter: state.counter
})

export default connect(mapStateToProps, null)(CounterResult);
