import TitleHeader from '../Components/TitleHeader.js'
import GameInfoPannel from './GameInfoPannel.js';
import GameBoard from './GameBoard.js';

import '../Stylings/App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <TitleHeader />
      </div>
      <div className="App-body">
        <div>
          <GameInfoPannel />
        </div>
        <div>
          <GameBoard />
        </div>
      </div>
    </div>
  );
}

export default App;
