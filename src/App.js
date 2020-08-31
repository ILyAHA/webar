import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="arjs-loader">
        <div>Loading, please wait...</div>
      </div>
      <a-scene
        vr-mode-ui="enabled: false;"
        renderer="logarithmicDepthBuffer: true;"
        embedded
        arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: true; markersAreaEnabled: true;">
          {/* {process.env.PUBLIC_URL + '/markers/kfc'} */}
        <a-nft
          type="nft"
          url="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/trex-image/trex"
          smooth="true"
          smoothCount="10"
          smoothTolerance=".01"
          smoothThreshold="5">
            {/* <a-box position='0 0 0' material='opacity: 0.5;'></a-box> */}
            <a-entity
              gltf-model="https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf"
              scale="5 5 5"
              position="50 150 0">
            </a-entity>
        </a-nft>
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
}

export default App;
