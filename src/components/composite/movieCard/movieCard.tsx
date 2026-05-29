import clsx from 'clsx';
import { Play } from 'lucide-react';

import { Button } from '@/components/button/button';
import { RatingBadge } from '@/components/ratingBadge/ratingBadge';
import { WatchlistButton } from '@/components/watchlistButton/watchlistButton';

import styles from './movieCard.module.scss';

type Props = {
  title: string;
  year: number;
  runtime: string;
  rating: number;
  saved?: boolean;
  featured?: boolean;
};

export const MovieCard = ({ title, year, runtime, rating, saved, featured }: Props) => {
  return (
    <div className={clsx(styles.card, featured && styles.featured)}>
      <div className={styles.poster}>
        <PosterImg />

        <div className={styles.ratingPin}>
          <RatingBadge value={rating} variant="pill" indicator="ring" />
        </div>

        <div className={styles.veil} />

        <div className={styles.overlay}>
          <Button variant="primary" size="sm">
            <Play size={12} />
            Trailer
          </Button>

          <WatchlistButton pressed={saved} compact onDark={true} />
        </div>
      </div>

      <div className={styles.meta}>
        <div className={styles.title}>{title}</div>
        <div className={styles.sub}>
          <span>{year}</span>
          <span className={styles.subDot} />
          <span>{runtime}</span>
        </div>
      </div>
    </div>
  );
};

export const PosterImg = () => (
  // Abstract painterly placeholder — never a recognizable poster
  <div
    className={styles.posterImg}
    style={{
      background: `radial-gradient(120% 80% at 30% 20%, oklch(0.52 0.08 150) 0%, transparent 55%),
      radial-gradient(100% 80% at 80% 90%, oklch(0.26 0.06 190) 0%, transparent 60%),
      linear-gradient(oklch(0.34 0.04 150) 0%, oklch(0.18 0.03 150) 100%)`,
    }}
    aria-label={'poster placeholder'}
  />
);
