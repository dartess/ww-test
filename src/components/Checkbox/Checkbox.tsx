import { Checkbox as BaseUiCheckbox } from '@base-ui/react/checkbox';
import { clsx } from 'clsx';

import CheckIcon from './icons/check.svg?react';
import styles from './Checkbox.module.css';

type Props = {
  label: string;
  color: 'orange' | 'green' | 'blue' | 'black';
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
};

export const Checkbox = ({ label, color, checked, onCheckedChange }: Props) => {
  return (
    <label className={styles.label}>
      <BaseUiCheckbox.Root
        className={clsx(styles.checkbox, styles[color])}
        onCheckedChange={onCheckedChange}
        checked={checked}
      >
        <BaseUiCheckbox.Indicator className={styles.indicator}>
          <CheckIcon className={styles.icon} />
        </BaseUiCheckbox.Indicator>
      </BaseUiCheckbox.Root>
      {label}
    </label>
  );
};
