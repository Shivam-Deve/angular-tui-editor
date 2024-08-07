import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToolConfig, PenConfig, TextConfig } from '../interfaces/tools-config';

@Injectable({
  providedIn: 'root'
})
export class ToolsConfigService {
  private defaultConfig: ToolConfig = {
    pen: {
      drawStrokeWidthValue:5,
      drawType: 'free',
      drawStrokeColor:'rgb(60, 60, 60)'
    },
    text: {
      fontSize: 16,
      fontFamily: 'Arial',
      color: '#000000',
    },
  };

  private configSubject = new BehaviorSubject<ToolConfig>(this.defaultConfig);
  config$ = this.configSubject.asObservable();

  updateConfig(tool: keyof ToolConfig, newConfig: Partial<PenConfig | TextConfig>) {
    const currentConfig = this.configSubject.getValue();
    const updatedToolConfig = { ...currentConfig[tool], ...newConfig };
    this.configSubject.next({
      ...currentConfig,
      [tool]: updatedToolConfig,
    });
  }

  changePenConfig(newConfig: Partial<PenConfig>) {
    const currentConf=this.configSubject.getValue();
    this.updateConfig('pen', {...currentConf.pen,...newConfig});
  }

  changeTextConfig(newConfig: Partial<TextConfig>) {
    this.updateConfig('text', {...this.defaultConfig.text,...newConfig});
  }
}
