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
  rank?: number;
  hue?: number;
  light?: number;
  light2?: number;
  saved?: boolean;
  featured?: boolean;
};

export const MovieCard = ({
  title,
  year,
  runtime,
  rating,
  rank,
  hue,
  light,
  light2,
  saved,
  featured,
}: Props) => {
  return (
    <div className={clsx(styles.card, featured && styles.featured)}>
      <div className={styles.poster}>
        <PosterImg title={title} hue={hue} light={light} light2={light2} />

        <div className={styles.ratingPin}>
          <RatingBadge value={rating} variant="pill" dot={false} />
        </div>

        {rank && <div className={styles.rank}>{rank}</div>}

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

const PosterImg = ({ title = 'yoyo', hue = 60, light = 0.22, light2 = 0.14 }) => (
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

// const MovieCard = ({
//     title = "The Quiet Hour",
//     year = 2025,
//     runtime = "2h 14m",
//     rating = 8.4,
//     rank,
//     hue = 30,
//     light = 0.30,
//     light2 = 0.16,
//     saved = false,
//     featured = false,
//   }) => (
//     <div className={`rmc ${featured ? "rmc--featured" : ""}`}>
//       <div className="rmc-poster">
//         <PosterImg title={title} hue={hue} light={light} light2={light2} />
//         <div className="rmc-rating-pin">
//           <RatingBadge value={rating} variant="pill" dot={false} denom="" />
//         </div>
//         {rank && <div className="rmc-rank">{rank}</div>}
//         <div className="rmc-veil" />
//         <div className="rmc-overlay">
//           <button className="rb rb--primary rb--sm" style={{ height: 32 }}>
//             <Icon name="play" size={12} stroke={2} />
//             Trailer
//           </button>
//           <WatchlistButton saved={saved} compact />
//         </div>
//       </div>
//       <div className="rmc-meta">
//         <div className="rmc-title">{title}</div>
//         <div className="rmc-sub">
//           <span>{year}</span>
//           <span className="rmc-sub-dot" />
//           <span>{runtime}</span>
//         </div>
//       </div>
//     </div>
//   );
