import { useState } from "react";
import { Eye, Grid, ZoomIn, ZoomOut, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const SceneView = () => {
  const [showGrid, setShowGrid] = useState(true);
  
  return (
    <div className="relative flex-1 h-full overflow-hidden rounded-md bg-editor-bg">
      {/* Placeholder для канваса 3D сцены */}
      <div className={`w-full h-full ${showGrid ? 'editor-canvas' : ''} flex items-center justify-center`}>
        <div className="text-center text-white/30">
          <div className="text-5xl mb-4">⬢</div>
          <p>Сцена 3D моделирования</p>
          <p className="text-sm mt-2">Используйте инструменты слева для создания объектов</p>
        </div>
      </div>
      
      {/* Панель управления сценой */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="outline" 
              size="icon" 
              className="bg-editor-tool/80 backdrop-blur-sm"
              onClick={() => setShowGrid(!showGrid)}
            >
              <Grid size={18} className={showGrid ? "text-editor-accent" : ""} />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            {showGrid ? "Скрыть сетку" : "Показать сетку"}
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="outline" 
              size="icon" 
              className="bg-editor-tool/80 backdrop-blur-sm"
            >
              <Eye size={18} />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            Режим просмотра
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="outline" 
              size="icon" 
              className="bg-editor-tool/80 backdrop-blur-sm"
            >
              <ZoomIn size={18} />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            Приблизить
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="outline" 
              size="icon" 
              className="bg-editor-tool/80 backdrop-blur-sm"
            >
              <ZoomOut size={18} />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            Отдалить
          </TooltipContent>
        </Tooltip>
        
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="outline" 
              size="icon" 
              className="bg-editor-tool/80 backdrop-blur-sm"
            >
              <Maximize size={18} />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            На весь экран
          </TooltipContent>
        </Tooltip>
      </div>
      
      {/* Индикаторы осей */}
      <div className="absolute bottom-4 left-4 flex gap-2">
        <span className="px-2 py-1 bg-editor-tool/80 rounded-md text-red-400 text-xs font-medium">X</span>
        <span className="px-2 py-1 bg-editor-tool/80 rounded-md text-green-400 text-xs font-medium">Y</span>
        <span className="px-2 py-1 bg-editor-tool/80 rounded-md text-blue-400 text-xs font-medium">Z</span>
      </div>
    </div>
  );
};

export default SceneView;
