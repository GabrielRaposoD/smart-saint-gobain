interface Item {
  name: string;
  description: string;
  photoUri: string;
}

export interface Example {
  id: string;
  main: number;
}

export enum ButtonState {
  normal = 'normal',
  disabled = 'disabled',
  inverse = 'inverse',
}

export interface Product extends Item {}

export interface Service extends Item {}

export interface Experience extends Item {
  secondDescription: string;
}

export interface Company {
  id: number;
  name: string;
  description: string;
  products: Product[];
}

export interface Template {
  id: number;
  type: string;
  steps: number[];
  trackId?: number;
}

export interface Option {
  label: string;
  value: any;
}

export interface ScreenComponent {
  img: string;
  Component: React.FC;
  isCover?: boolean;
  hasCard?: boolean;
  cardWide?: boolean;
  cardImg?: string;
  hasMobileImg?: boolean;
}