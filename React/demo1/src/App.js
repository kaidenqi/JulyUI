
import './App.css';
import Message from './components/Message';
import NameList from './components/NameList';
import ParentComponent from './components/ParenntChild.js/ParentComponent';
import ParentC from './components/Memo.js/ParentC'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* React */}
        {/* <NameList></NameList> */}
        {/* <ParentComponent></ParentComponent>
        <Message></Message> */}
        <ParentC></ParentC>
      </header>
    </div>
  );
}

export default App;
