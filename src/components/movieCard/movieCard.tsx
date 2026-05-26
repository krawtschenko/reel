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
        <PosterImg title={title} />

        <div className={styles.ratingPin}>
          <RatingBadge value={rating} variant="pill" dot={false} />
        </div>

        <div className={styles.veil} />

        <div className={styles.overlay}>
          <Button variant="primary" size="sm">
            <Play size={12} />
            Trailer
          </Button>

          <WatchlistButton pressed={saved} compact />
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

const PosterImg = ({ title = '', hue = 56, light = 0.43, light2 = 0.35 }) => (
  // Abstract painterly placeholder — never a recognizable poster
  <div
    className={styles.posterImg}
    style={{
      background:
        `radial-gradient(120% 80% at 30% 20%, oklch(${light + 0.18} 0.08 ${hue}) 0%, transparent 55%),` +
        `radial-gradient(100% 80% at 80% 90%, oklch(${light2 + 0.08} 0.06 ${(hue + 40) % 360}) 0%, transparent 60%),` +
        `linear-gradient(180deg, oklch(${light} 0.04 ${hue}) 0%, oklch(${light2} 0.03 ${hue}) 100%)`,
    }}
    aria-label={title + ' poster placeholder'}
  />
);
