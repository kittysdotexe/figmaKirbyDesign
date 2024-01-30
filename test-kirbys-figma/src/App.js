import './App.css';
import {Header} from './components/header.jsx';
import {GroupChats} from './components/groupchat.jsx';
import {Body} from './components/body.jsx';
import {Members} from './components/members.jsx';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <GroupChats></GroupChats>
      <Body></Body>
      <Members></Members>
    </div>
  );
}

export default App;
