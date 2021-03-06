import React from 'react';
import logo from './logo.svg';
import './App.css';

import { App as SendBirdApp } from 'sendbird-uikit';
import 'sendbird-uikit/dist/index.css';

import {
  Channel as SBConversation,
  ChannelList as SBChannelList,
  ChannelSettings as SBChannelSettings,
} from 'sendbird-uikit'

function App() {
  return (
    <div className="App">
      <SendBirdApp
        appId={process.env.APP_ID}
        userId="sendbird"
        nickname="sendbird"
      />
    </div>
  );
}

export default App;
