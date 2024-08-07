export interface PenConfig {
    drawType: 'free' | 'line';
    drawStrokeColor: string;
    drawStrokeWidthValue: number;
}

export interface TextConfig {
    fontSize: number;
    fontFamily: string;
    color: string;
}

export interface ToolConfig {
    pen: PenConfig;
    text: TextConfig;
}