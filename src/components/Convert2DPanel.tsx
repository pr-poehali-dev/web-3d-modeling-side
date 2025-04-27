import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Convert2DPanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Convert2DPanel = ({ open, onOpenChange }: Convert2DPanelProps) => {
  const [viewAngle, setViewAngle] = useState(45);
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Конвертация 3D в 2D</DialogTitle>
          <DialogDescription>
            Настройте параметры для экспорта 3D модели в 2D формат
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="settings">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="settings">Настройки</TabsTrigger>
            <TabsTrigger value="preview">Предпросмотр</TabsTrigger>
          </TabsList>
          
          <TabsContent value="settings" className="space-y-4">
            <div className="space-y-4 py-2">
              <div>
                <h4 className="mb-2 text-sm font-medium">Угол обзора</h4>
                <div className="flex items-center justify-center py-4">
                  <div className="w-10 h-10 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-editor-accent rounded-lg transform" style={{ 
                        transform: `perspective(500px) rotateY(${viewAngle}deg)` 
                      }}></div>
                    </div>
                  </div>
                </div>
                <Slider 
                  value={[viewAngle]} 
                  min={0} 
                  max={360} 
                  step={1} 
                  onValueChange={(value) => setViewAngle(value[0])}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>0°</span>
                  <span>{viewAngle}°</span>
                  <span>360°</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Формат изображения</h4>
                <Select defaultValue="svg">
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите формат" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="svg">SVG (векторный)</SelectItem>
                    <SelectItem value="png">PNG (с прозрачностью)</SelectItem>
                    <SelectItem value="jpg">JPG (без прозрачности)</SelectItem>
                    <SelectItem value="pdf">PDF</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Стиль экспорта</h4>
                <div className="grid grid-cols-3 gap-2">
                  <div className="border rounded p-2 flex flex-col items-center cursor-pointer hover:bg-gray-800 transition-colors">
                    <div className="w-12 h-12 bg-gray-600 rounded flex items-center justify-center mb-1">
                      <div className="w-8 h-8 bg-gray-900 rounded-sm"></div>
                    </div>
                    <span className="text-xs">Простой</span>
                  </div>
                  <div className="border border-editor-accent rounded p-2 flex flex-col items-center cursor-pointer bg-gray-800/50 transition-colors">
                    <div className="w-12 h-12 bg-gray-600 rounded flex items-center justify-center mb-1">
                      <div className="w-8 h-8 bg-editor-accent/70 rounded-sm shadow-md"></div>
                    </div>
                    <span className="text-xs">С тенями</span>
                  </div>
                  <div className="border rounded p-2 flex flex-col items-center cursor-pointer hover:bg-gray-800 transition-colors">
                    <div className="w-12 h-12 bg-gray-600 rounded flex items-center justify-center mb-1">
                      <div className="w-8 h-8 border-2 border-gray-900 rounded-sm"></div>
                    </div>
                    <span className="text-xs">Контур</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Дополнительные опции</h4>
                <div className="flex items-center justify-between">
                  <Label htmlFor="preserve-proportions" className="text-sm">Сохранить пропорции</Label>
                  <Switch id="preserve-proportions" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="high-quality" className="text-sm">Высокое качество</Label>
                  <Switch id="high-quality" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="include-wireframe" className="text-sm">Включить каркас</Label>
                  <Switch id="include-wireframe" />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="preview" className="flex justify-center items-center p-6">
            <div className="w-full max-w-xs aspect-square bg-gray-800 rounded-md flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="mb-2 w-16 h-16 mx-auto bg-editor-accent rounded-lg transform" style={{ 
                  transform: `perspective(500px) rotateY(${viewAngle}deg)` 
                }}></div>
                <p className="text-sm">Предпросмотр конвертации</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Отмена
          </Button>
          <Button>Конвертировать</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Convert2DPanel;
