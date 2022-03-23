import { connect } from 'react-redux';
import { increaseCounter } from '../actions/counter';

function CounterBtn({counter, increaseCounter}) {
    return (
        <button onClick={()=>increaseCounter()}>Increase Count({counter})</button>
    )
}

const mapStateToProps = (state) => ({
    counter: state.counter
})

const mapDispatchToProps = {
    increaseCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterBtn);
