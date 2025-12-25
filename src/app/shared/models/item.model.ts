export interface Item {
  id: number;
  title: string;
  description: string;
  isFeatured: boolean;
  priority: 'low' | 'normal' | 'high';
}
