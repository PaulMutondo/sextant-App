import React from 'react'
import useWebSocket from 'react-use-websocket';

const WS_URL = 'ws://localhost:55455';


function Latency(){
    useWebSocket(WS_URL, {
        onOpen: () => {
          console.log('WebSocket connection established.');
        }
      });

      return (
        <div>
            <div>he Network Latency is:</div>
        </div>
        

      );

}

export default Latency;