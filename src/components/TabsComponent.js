import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function TabsComponent() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
      <TabList>
        <Tab>URL to PDF</Tab>
        <Tab>HTML file to PDF</Tab>
        <Tab>HTML Code to PDF</Tab>
      </TabList>

      <TabPanel>
        {/* Content for URL to PDF tab */}
        {/* You can render the respective content here */}
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
  );
}

export default TabsComponent;
