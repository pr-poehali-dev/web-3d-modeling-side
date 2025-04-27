import { useState } from "react";
import Header from "@/components/Header";
import ModelingToolbar from "@/components/ModelingToolbar";
import PropertiesPanel from "@/components/PropertiesPanel";
import SceneView from "@/components/SceneView";
import Convert2DPanel from "@/components/Convert2DPanel";
import { Button } from "@/components/ui/button";
import { Layers } from "lucide-react";

const Index = () => {
  const [convert2DOpen, setConvert2DOpen] = useState(false);
  
  return (
    <div className="flex flex-col h-screen bg-editor-bg">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <div className="p-4">
          <ModelingToolbar />
        </div>
        
        <div className="flex-1 p-4 overflow-hidden">
          <SceneView />
          
          {/* Быстрый доступ к конвертации 3D в 2D */}
          <div className="absolute top-20 right-20">
            <Button 
              variant="secondary" 
              className="flex items-center gap-2 bg-editor-tool/80 backdrop-blur-sm"
              onClick={() => setConvert2DOpen(true)}
            >
              <Layers size={16} />
              <span>Конвертировать в 2D</span>
            </Button>
          </div>
        </div>
        
        <div className="p-4">
          <PropertiesPanel />
        </div>
      </div>
      
      <Convert2DPanel 
        open={convert2DOpen} 
        onOpenChange={setConvert2DOpen} 
      />
    </div>
  );
};

export default Index;
