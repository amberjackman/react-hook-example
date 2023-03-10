import logo from './logo.svg';
import './App.css';
import Example1 from './components/example1';
import Example2 from './components/example2';
import Example3 from './components/example3';
import Example4 from './components/example4';
import Example5 from './components/example5';
import Example6 from './components/example6';
import Example7 from './components/example7';
import Example8 from './components/example8';

import useWindowWidth from './hooks/useWindowWidth.js';
import withHasMounted from './hocs/withHasMounted';
import useHasMounted from './hooks/useHasMounted';

function App({ hasMounted }) {
const width = useWindowWidth();
const hasMountedFromHooks = useHasMounted

console.log(hasMounted, hasMountedFromHooks);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Example4 /> */}
        {/* <Example5 /> */}
        <Example8 />
        {width}
      </header>
    </div>
  );
}


export default withHasMounted(App);
