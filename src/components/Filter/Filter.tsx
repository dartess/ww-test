import { Checkbox } from '@/components/Checkbox/Checkbox';

import styles from './Filter.module.css';

type FilterItem = {
  label: string;
  value: string;
  color: 'orange' | 'green' | 'blue' | 'black';
};

type Props = {
  checked: Record<string, boolean>;
  onItemCheckedChange: (value: string, checked: boolean) => void;
  items: Array<FilterItem>;
};

export const Filter = ({ items, checked, onItemCheckedChange }: Props) => {
  return (
    <ul className={styles.root}>
      {items.map((item) => (
        <li key={item.value}>
          <Checkbox
            label={item.label}
            color={item.color}
            checked={checked[item.value]}
            onCheckedChange={(itemChecked) => {
              onItemCheckedChange(item.value, itemChecked);
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export type { FilterItem };
