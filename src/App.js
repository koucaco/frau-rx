import React, { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './react-tabs.css';
import './App.css';
import Gasp from './Gasp';
import Cape from './Cape';
import config from './config';

function init() {
  window.gapi.client.init({
    apiKey: config.apiKey,
    discoveryDocs: config.discoveryDocs
  });
}

function App() {
  useEffect(() => window.gapi.load("client", init));
  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>GASP</Tab>
          <Tab>CAPE</Tab>
        </TabList>
        <TabPanel>
          <Gasp />
        </TabPanel>
        <TabPanel>
          <Cape />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
