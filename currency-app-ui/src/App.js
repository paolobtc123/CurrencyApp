import logo from './logo.svg';
import './App.css';
import { io } from 'socket.io-client';
function App() {
  //const WS_URL = 'ws://127.0.0.1:3002/';
  const socket = io("http://localhost:3002");
 
// client-side
socket.on("connect", () => {
  console.log("connect");
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

socket.on("disconnect", () => {
  console.log("disconnect");
  console.log(socket.id); // undefined
});
var data = []
socket.on("exchangeData",(...args) =>{
  console.log(args);
  data = args;
});
  // useWebSocket(WS_URL, {
  //   onOpen: () => {
  //     console.log('WebSocket connection established.');
  //   },
  //   onmessage

  // });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
