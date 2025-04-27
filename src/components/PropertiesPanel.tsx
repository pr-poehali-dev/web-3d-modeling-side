import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const PropertiesPanel = () => {
  return (
    <div className="w-72 bg-editor-panel rounded-md overflow-hidden">
      <div className="p-3 bg-editor-tool font-medium">Свойства объекта</div>
      
      <Tabs defaultValue="transform">
        <TabsList className="w-full">
          <TabsTrigger value="transform" className="flex-1">Трансформация</TabsTrigger>
          <TabsTrigger value="material" className="flex-1">Материал</TabsTrigger>
          <TabsTrigger value="advanced" className="flex-1">Дополнительно</TabsTrigger>
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
            <div className="panel-title">Тип материала</div>
            <Select defaultValue="standard">
              <SelectTrigger className="h-8">
                <SelectValue placeholder="Выберите тип материала" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Стандартный</SelectItem>
                <SelectItem value="physical">Физический</SelectItem>
                <SelectItem value="toon">Мультяшный</SelectItem>
                <SelectItem value="glass">Стекло</SelectItem>
                <SelectItem value="metal">Металл</SelectItem>
                <SelectItem value="wood">Дерево</SelectItem>
              </SelectContent>
            </Select>
          </div>
        
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

          <div className="panel-section">
            <div className="panel-title">Текстура</div>
            <Select defaultValue="none">
              <SelectTrigger className="h-8">
                <SelectValue placeholder="Выберите текстуру" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Нет</SelectItem>
                <SelectItem value="brick">Кирпич</SelectItem>
                <SelectItem value="wood">Дерево</SelectItem>
                <SelectItem value="metal">Металл</SelectItem>
                <SelectItem value="fabric">Ткань</SelectItem>
                <SelectItem value="custom">Своя...</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </TabsContent>

        <TabsContent value="advanced">
          <div className="panel-section">
            <div className="panel-title">Конвертация в 2D</div>
            <div className="space-y-2 mt-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="shadow" className="text-xs">Включить тени</Label>
                <Switch id="shadow" defaultChecked/>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="outline" className="text-xs">Контур</Label>
                <Switch id="outline" defaultChecked/>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="fill" className="text-xs">Заливка</Label>
                <Switch id="fill" defaultChecked/>
              </div>
              <div className="mt-3">
                <Label htmlFor="export-format" className="text-xs">Формат экспорта</Label>
                <Select defaultValue="svg">
                  <SelectTrigger className="h-8 mt-1">
                    <SelectValue placeholder="Выберите формат" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="svg">SVG</SelectItem>
                    <SelectItem value="png">PNG</SelectItem>
                    <SelectItem value="jpg">JPG</SelectItem>
                    <SelectItem value="pdf">PDF</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="mt-3">
                <Button variant="secondary" size="sm" className="w-full mt-2">
                  Конвертировать в 2D
                </Button>
              </div>
            </div>
          </div>

          <div className="panel-section">
            <div className="panel-title">Дополнительно</div>
            <div className="space-y-2 mt-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="cast-shadow" className="text-xs">Отбрасывает тень</Label>
                <Switch id="cast-shadow" defaultChecked/>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="receive-shadow" className="text-xs">Принимает тень</Label>
                <Switch id="receive-shadow" defaultChecked/>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="visible" className="text-xs">Видимость</Label>
                <Switch id="visible" defaultChecked/>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PropertiesPanel;
