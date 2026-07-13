'use client';
import { useState, useRef } from 'react';
import { placeholderBg } from '@/lib/houses';

// Carousel — when real images exist, shows all of them.
// Falls back to 5 warm placeholder slides when images[] is empty.
export default function Carousel({ house, big = false, showThumbs = false, overlay = null, rounded = 0 }) {
  const [idx, setIdx] = useState(0);
  const touchStartX = useRef(null);

  const hasImages = house.images?.length > 0;
  const slides = hasImages
    ? house.images.map((url, i) => ({ label: `Foto ${i + 1}`, url }))
    : house.shots.map((label, i) => ({ label, url: null }));
  const len = slides.length;
  const clamp = (n) => Math.max(0, Math.min(len - 1, n));

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) setIdx((p) => clamp(p + (diff > 0 ? 1 : -1)));
    touchStartX.current = null;
  };

  const slideInner = (s, i) =>
    s.url ? (
      <img src={s.url} alt={`${house.name} — ${s.label}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    ) : (
      <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', background: placeholderBg(house.hue, i, big) }}>
        <span style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: big ? 13 : 11.5, letterSpacing: '.12em', color: 'rgba(17,24,39,.35)' }}>{s.label} · {house.num}</span>
      </div>
    );

  const arrow = (dir, side) => (
    <button
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIdx((p) => clamp(p + dir)); }}
      aria-label={dir < 0 ? 'Anterior' : 'Siguiente'}
      style={{ position: 'absolute', [side]: big ? 14 : 10, top: '50%', transform: 'translateY(-50%)', width: big ? 42 : 34, height: big ? 42 : 34, borderRadius: '50%', border: 'none', background: 'rgba(252,248,241,.9)', color: 'var(--ink)', cursor: 'pointer', fontSize: big ? 20 : 17, boxShadow: '0 4px 12px -4px rgba(0,0,0,.4)' }}
    >{dir < 0 ? '‹' : '›'}</button>
  );

  return (
    <div>
      <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} style={{ position: 'relative', aspectRatio: big ? '16 / 9' : '4 / 3', overflow: 'hidden', borderRadius: rounded, background: '#f3f4f6' }}>
        <div style={{ display: 'flex', height: '100%', transform: `translateX(${-idx * 100}%)`, transition: 'transform .5s cubic-bezier(.4,0,.2,1)' }}>
          {slides.map((s, i) => (
            <div key={i} style={{ flex: '0 0 100%', height: '100%' }}>{slideInner(s, i)}</div>
          ))}
        </div>
        {overlay}
        {arrow(-1, 'left')}
        {arrow(1, 'right')}
        {!big && (
          <div style={{ position: 'absolute', left: 0, right: 0, top: 14, display: 'flex', justifyContent: 'center', gap: 5 }}>
            {slides.map((_, i) => (
              <button key={i} onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIdx(i); }} aria-label={`Foto ${i + 1}`}
                style={{ width: i === idx ? 18 : 6, height: 6, borderRadius: 3, border: 'none', padding: 0, cursor: 'pointer', background: i === idx ? '#FCF8F1' : 'rgba(252,248,241,.55)', transition: 'all .3s' }} />
            ))}
          </div>
        )}
      </div>
      {showThumbs && (
        <div style={{ display: 'flex', gap: 10, marginTop: 12, flexWrap: 'wrap' }}>
          {slides.map((s, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Ver ${s.label}`}
              style={{ width: 64, height: 46, borderRadius: 8, cursor: 'pointer', background: s.url ? `center/cover url(${s.url})` : placeholderBg(house.hue, i, true), border: i === idx ? '2px solid var(--accent)' : '2px solid transparent', opacity: i === idx ? 1 : 0.7, transition: 'all .25s', padding: 0 }} />
          ))}
        </div>
      )}
    </div>
  );
}
