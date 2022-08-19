import '../../SCSS/Components/App/App.scss'

import ToolTip from '../ToolTip/ToolTip'

function App() {
  return (
    <div className="app">
        <ToolTip tooltip="This is point A" className="my-label" id='a'></ToolTip>
        <ToolTip tooltip="This is point B" className="my-label" id='b'></ToolTip>
        <ToolTip tooltip="This is point C" className="my-label" id='c'></ToolTip>
        <ToolTip tooltip="This is point D" className="my-label" id='d'></ToolTip>
    </div>
  )
}

export default App;