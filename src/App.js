import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter } from './action/actions';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import Home from './component/home.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  const dispatch = useDispatch();

  const newCount = useSelector(
    (state) => { return state.counter.count }
  )

  const handleIncrease = () => {
    //props.increaseCounter(); // using mapDispatchToProps Class Component
    dispatch(increaseCounter()); // using useDispatch Hook
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />

    //     <div>Count: {newCount}</div>

    //     <button onClick={() => handleIncrease()}>Increase Count</button>

    //     <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
    //   </header>
    // </div>
    <Home />
  );
}

// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App;