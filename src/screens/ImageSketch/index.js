import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";

import ImageToOilPaint from "./ImageToOilPaint";


const TABS = ["oilPaint", "enhance"];

function ImageSketch() {
  const [tabKey, setTabKey] = useState(TABS[0]);

  return (
    <div>
      <div className="text-center">
        <h1>Sketch an image</h1>
        <h3>Upload an image to create a sketch out of it</h3>
      </div>

      {/* render tabs on the screen */}
      <Tabs
        id="controlled-tab-example"
        activeKey={tabKey}
        onSelect={(k) => setTabKey(k)}
      >
        <Tab eventKey={TABS[0]} title="Oil paint">
          <ImageToOilPaint tabKey={TABS[0]} />
        </Tab>
        <Tab eventKey={TABS[1]} title="Enhance">
          <>This page is under construction. Thank you for exploring this website.</>
        </Tab>
      </Tabs>

    </div>
  );
}

export default ImageSketch;
