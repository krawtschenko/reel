import { PosterImg } from '@/components/movieCard/movieCard';

import styles from './actorCard.module.scss';

type Props = {
  name: string;
  role: string;
};

export const ActorCard = ({ name, role }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.portrait}>
        <PosterImg />
      </div>

      <div>
        <div className={styles.name}>{name}</div>
        <div className={styles.role}>{role}</div>
      </div>
    </div>
  );
};
