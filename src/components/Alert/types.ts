export type Color = 'success' | 'info' | 'warning' | 'error';

export interface AlertComponentProps {
    severity: Color;
    title: string;
    onClose: () => void;
}