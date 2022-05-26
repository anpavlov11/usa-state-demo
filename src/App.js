import React from 'react'
import ReactHover, { Trigger, Hover } from 'react-hover'
import TriggerComponent from './component/TriggerComponent'
import HoverComponent from './component/HoverComponent'

const port = process.env.PORT || 3000;

const OptionsCursorTrueWithMargins = {
   followCursor: true,
   shiftX: 20,
   shiftY: 0
}

const App = () => {
   return (
       <ReactHover options={OptionsCursorTrueWithMargins}>
           <Trigger type="trigger">
               <TriggerComponent />
           </Trigger>
           
           <Hover type="hover">
               <HoverComponent />
           </Hover>
       </ReactHover>
  )
};

App.listen(port);

export default App