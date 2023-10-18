export interface Category {
    id: number;
    name: string;
    parent: number|null;
}

export interface CategoryItem {
    id: number;
    category_id: number;
    name: string;
    value: string | number;
    description: string;
    className?: string;
}

export interface CategoryWithValue extends Category {
    value: string;
}

export interface SimuData {
    design: string;
    color: string | number;
    pattern: string | number;
    patternSize: string | number;
    patternColor: string | number;
}

export interface RemoveCategory {
    category_id: number;
    item_id: number;
    category_ids: number[];
}

export type NullableId = number | null

export interface SelectedItem {
    [key: number]: NullableId;
  }
