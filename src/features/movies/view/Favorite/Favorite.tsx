import { Toggle as BaseUiToggle } from '@base-ui/react/toggle';
import { clsx } from 'clsx';

import StarIcon from './icons/star.svg?react';
import styles from './Favorite.module.css';

type Props = {
  favorite: boolean;
  onFavoriteChange: (active: boolean) => void;
};

export const Favorite = ({ favorite, onFavoriteChange }: Props) => {
  return (
    <BaseUiToggle
      aria-label="Добавить в избранное"
      pressed={favorite}
      onPressedChange={onFavoriteChange}
      render={(props, state) => (
        <button type="button" {...props} className={styles.root}>
          <StarIcon className={clsx(styles.icon, state.pressed && styles.active)} />
        </button>
      )}
      onClick={(event) => {
        event.preventDefault();
      }}
    />
  );
};
