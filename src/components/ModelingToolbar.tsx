import { 
  Cube, 
  Cylinder, 
  Sphere, 
  Pointer, 
  Move, 
  Scale, 
  Rotate, 
  Eraser, 
  PaintBucket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type ToolbarItem = {
  icon: React.ReactNode;
  name: string;
  tooltip: string;
};

const tools: ToolbarItem[] = [
  { icon: <Pointer size={20} />, name: "select", tooltip: "Выбрать объект" },
  { icon: <Move size={20} />, name: "move", tooltip: "Переместить" },
  { icon: <Scale size={20} />, name: "scale", tooltip: "Масштабировать" },
  { icon: <Rotate size={20} />, name: "rotate", tooltip: "Вращать" }
];

const primitives: ToolbarItem[] = [
  { icon: <Cube size={20} />, name: "cube", tooltip: "Куб" },
  { icon: <Cylinder size={20} />, name: "cylinder", tooltip: "Цилиндр" },
  { icon: <Sphere size={20} />, name: "sphere", tooltip: "Сфера" }
];

const operations: ToolbarItem[] = [
  { icon: <Eraser size={20} />, name: "delete", tooltip: "Удалить" },
  { icon: <PaintBucket size={20} />, name: "material", tooltip: "Материал" }
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
                className="tool-button w-full flex justify-start h-9 gap-2"
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
