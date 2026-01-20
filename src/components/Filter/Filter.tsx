import { observer } from 'mobx-react-lite';

import { Checkbox } from '@/components/Checkbox/Checkbox';

import styles from './Filter.module.css';

type FilterItemColor = 'orange' | 'green' | 'blue' | 'black';

type FilterItem<T extends string> = {
  label: string;
  value: T;
  color: FilterItemColor;
};

type Props<T extends string> = {
  checked: Record<T, boolean | undefined>;
  onItemCheckedChange: (value: T, checked: boolean) => void;
  items: Array<FilterItem<T>>;
};

export const Filter = observer(function Filter<T extends string>({
  items,
  checked,
  onItemCheckedChange,
}: Props<T>) {
  return (
    <ul className={styles.root}>
      {items.map((item) => (
        <li key={item.value}>
          <Checkbox
            label={item.label}
            color={item.color}
            checked={Boolean(checked[item.value])}
            onCheckedChange={(itemChecked) => {
              onItemCheckedChange(item.value, itemChecked);
            }}
          />
        </li>
      ))}
    </ul>
  );
});

export type { FilterItem, FilterItemColor };
