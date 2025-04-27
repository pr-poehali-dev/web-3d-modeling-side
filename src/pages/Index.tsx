import { useState } from "react";
import Header from "@/components/Header";
import ModelingToolbar from "@/components/ModelingToolbar";
import PropertiesPanel from "@/components/PropertiesPanel";
import SceneView from "@/components/SceneView";

const Index = () => {
  return (
    <div className="flex flex-col h-screen bg-editor-bg">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <div className="p-4">
          <ModelingToolbar />
        </div>
        
        <div className="flex-1 p-4 overflow-hidden">
          <SceneView />
        </div>
        
        <div className="p-4">
          <PropertiesPanel />
        </div>
      </div>
    </div>
  );
};

export default Index;
