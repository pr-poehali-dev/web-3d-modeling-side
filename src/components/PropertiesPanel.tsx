import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const PropertiesPanel = () => {
  return (
    <div className="w-72 bg-editor-panel rounded-md overflow-hidden">
      <div className="p-3 bg-editor-tool font-medium">Свойства объекта</div>
      
      <Tabs defaultValue="transform">
        <TabsList className="w-full">
          <TabsTrigger value="transform" className="flex-1">Трансформация</TabsTrigger>
          <TabsTrigger value="material" className="flex-1">Материал</TabsTrigger>
        </TabsList>
        
        <TabsContent value="transform">
          <div className="panel-section">
            <div className="panel-title">Позиция</div>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <Label htmlFor="position-x" className="text-xs text-white/60">X</Label>
                <Input id="position-x" type="number" defaultValue="0" className="h-8" />
              </div>
              <div>
                <Label htmlFor="position-y" className="text-xs text-white/60">Y</Label>
                <Input id="position-y" type="number" defaultValue="0" className="h-8" />
              </div>
              <div>
                <Label htmlFor="position-z" className="text-xs text-white/60">Z</Label>
                <Input id="position-z" type="number" defaultValue="0" className="h-8" />
              </div>
            </div>
          </div>
          
          <div className="panel-section">
            <div className="panel-title">Вращение</div>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <Label htmlFor="rotation-x" className="text-xs text-white/60">X°</Label>
                <Input id="rotation-x" type="number" defaultValue="0" className="h-8" />
              </div>
              <div>
                <Label htmlFor="rotation-y" className="text-xs text-white/60">Y°</Label>
                <Input id="rotation-y" type="number" defaultValue="0" className="h-8" />
              </div>
              <div>
                <Label htmlFor="rotation-z" className="text-xs text-white/60">Z°</Label>
                <Input id="rotation-z" type="number" defaultValue="0" className="h-8" />
              </div>
            </div>
          </div>
          
          <div className="panel-section">
            <div className="panel-title">Масштаб</div>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <Label htmlFor="scale-x" className="text-xs text-white/60">X</Label>
                <Input id="scale-x" type="number" defaultValue="1" className="h-8" />
              </div>
              <div>
                <Label htmlFor="scale-y" className="text-xs text-white/60">Y</Label>
                <Input id="scale-y" type="number" defaultValue="1" className="h-8" />
              </div>
              <div>
                <Label htmlFor="scale-z" className="text-xs text-white/60">Z</Label>
                <Input id="scale-z" type="number" defaultValue="1" className="h-8" />
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="material">
          <div className="panel-section">
            <div className="panel-title">Цвет</div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-editor-accent"></div>
              <Input type="text" defaultValue="#9b87f5" className="h-8" />
            </div>
          </div>
          
          <div className="panel-section">
            <div className="panel-title">Прозрачность</div>
            <Slider defaultValue={[100]} max={100} step={1} className="my-2" />
            <div className="text-right text-xs text-white/60">100%</div>
          </div>
          
          <div className="panel-section">
            <div className="panel-title">Металличность</div>
            <Slider defaultValue={[30]} max={100} step={1} className="my-2" />
            <div className="text-right text-xs text-white/60">30%</div>
          </div>
          
          <div className="panel-section">
            <div className="panel-title">Шероховатость</div>
            <Slider defaultValue={[50]} max={100} step={1} className="my-2" />
            <div className="text-right text-xs text-white/60">50%</div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PropertiesPanel;
