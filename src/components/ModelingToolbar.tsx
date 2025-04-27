import { 
  Box, 
  Cylinder as CylinderIcon, 
  CircleOff, 
  MousePointer, 
  MoveHorizontal, 
  Maximize, 
  RotateCcw, 
  Eraser, 
  Palette,
  Layers,
  Triangle,
  Hexagon,
  Cone,
  Merge
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type ToolbarItem = {
  icon: React.ReactNode;
  name: string;
  tooltip: string;
};

const tools: ToolbarItem[] = [
  { icon: <MousePointer size={20} />, name: "select", tooltip: "Выбрать объект" },
  { icon: <MoveHorizontal size={20} />, name: "move", tooltip: "Переместить" },
  { icon: <Maximize size={20} />, name: "scale", tooltip: "Масштабировать" },
  { icon: <RotateCcw size={20} />, name: "rotate", tooltip: "Вращать" }
];

const primitives: ToolbarItem[] = [
  { icon: <Box size={20} />, name: "cube", tooltip: "Куб" },
  { icon: <CylinderIcon size={20} />, name: "cylinder", tooltip: "Цилиндр" },
  { icon: <CircleOff size={20} />, name: "sphere", tooltip: "Сфера" },
  { icon: <Cone size={20} />, name: "cone", tooltip: "Конус" },
  { icon: <Triangle size={20} />, name: "pyramid", tooltip: "Пирамида" },
  { icon: <Hexagon size={20} />, name: "torus", tooltip: "Тор" }
];

const operations: ToolbarItem[] = [
  { icon: <Eraser size={20} />, name: "delete", tooltip: "Удалить" },
  { icon: <Palette size={20} />, name: "material", tooltip: "Материал" },
  { icon: <Merge size={20} />, name: "combine", tooltip: "Объединить" },
  { icon: <Layers size={20} />, name: "convert2d", tooltip: "Конвертировать в 2D" }
];

const ModelingToolbar = () => {
  return (
    <div className="flex flex-col gap-4 p-2 bg-editor-panel rounded-md">
      <div className="space-y-1">
        {tools.map((tool) => (
          <Tooltip key={tool.name}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="tool-button w-full flex justify-start h-9 gap-2"
              >
                {tool.icon}
                <span className="text-xs">{tool.tooltip}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">{tool.tooltip}</TooltipContent>
          </Tooltip>
        ))}
      </div>

      <div className="h-px bg-gray-700" />

      <div className="space-y-1">
        {primitives.map((primitive) => (
          <Tooltip key={primitive.name}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="tool-button w-full flex justify-start h-9 gap-2"
              >
                {primitive.icon}
                <span className="text-xs">{primitive.tooltip}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">{primitive.tooltip}</TooltipContent>
          </Tooltip>
        ))}
      </div>

      <div className="h-px bg-gray-700" />
      
      <div className="space-y-1">
        {operations.map((op) => (
          <Tooltip key={op.name}>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`tool-button w-full flex justify-start h-9 gap-2 ${op.name === 'convert2d' ? 'text-editor-accent' : ''}`}
              >
                {op.icon}
                <span className="text-xs">{op.tooltip}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">{op.tooltip}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default ModelingToolbar;
