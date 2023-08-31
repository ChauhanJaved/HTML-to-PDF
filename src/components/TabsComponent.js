import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../styles/TabsComponent.css';
import UrlsTab from './UrlsTab';

function TabsComponent() {
  const [tabIndex, setTabIndex] = useState(0);
  const [urls, setUrls] = useState([]);
  const stringToUrlArray= (inputString) => {
    const urlArray = inputString.split('\n').map(url => url.trim());
    return urlArray.filter(url => url !== ''); // Remove any empty URLs
  }
  const addUrl = (newUrls) => {
    const newUrlsArray = stringToUrlArray(newUrls)
    setUrls([...urls, ...newUrlsArray]);
  };
  return (    
    <>    
    <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
      <TabList>
        <Tab>URL to PDF</Tab>
        <Tab>HTML File to PDF</Tab>
        <Tab>HTML Code to PDF</Tab>
      </TabList>

      <TabPanel>
        <UrlsTab onAddUrl={addUrl} urls={urls}/>
      </TabPanel>
      <TabPanel>
        {/* Content for HTML File to PDF tab */}
        {/* You can render the respective content here */}
      </TabPanel>
      <TabPanel>
        {/* Content for HTML Code to PDF tab */}
        {/* You can render the respective content here */}
      </TabPanel>
    </Tabs>
    </>
  );
}

export default TabsComponent;
