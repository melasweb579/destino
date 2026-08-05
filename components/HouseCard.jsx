'use client';
import { useState } from 'react';
import Link from 'next/link';
import Carousel from './Carousel';
import Stats from './Stats';
import { formatPrice } from '@/lib/houses';

export default function HouseCard({ house, layout = 'overlay' }) {
  const [hover, setHover] = useState(false);
  const href = `/estancias/${house.id}`;
  const nameOverlay = layout === 'overlay';
  const nameBelow = layout === 'editorial' || layout === 'compact';
  const statVariant = layout === 'compact' ? 'pills' : 'row';

  const overlay = nameOverlay ? (
    <>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,.62) 100%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', left: 16, bottom: 14, pointerEvents: 'none' }}>
        <p style={{ margin: 0, fontSize: 11, letterSpacing: '.12em', color: 'rgba(255,255,255,.78)', textTransform: 'uppercase' }}>{house.location}</p>
        <h3 className="h-display" style={{ margin: '2px 0 0', fontSize: '1.5rem', color: '#ffffff' }}>{house.name}</h3>
      </div>
    </>
  ) : null;

  return (
    <article
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ background: '#ffffff', border: '1px solid var(--line)', borderRadius: 18, overflow: 'hidden', display: 'flex', flexDirection: 'column', transition: 'box-shadow .3s, transform .3s', boxShadow: hover ? '0 20px 40px -20px rgba(0,0,0,.18)' : '0 1px 3px rgba(0,0,0,.06)', transform: hover ? 'translateY(-4px)' : 'none' }}
    >
      <Link href={href} style={{ display: 'block', position: 'relative' }}>
        <Carousel house={house} overlay={overlay} />
      </Link>

      <div style={{ padding: '18px 18px 20px', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
        {nameBelow && (
          <div>
            <p style={{ margin: 0, fontSize: 11, letterSpacing: '.12em', color: 'var(--muted)', textTransform: 'uppercase' }}>{house.location}</p>
            <h3 className="h-display" style={{ margin: '3px 0 0', fontSize: '1.4rem' }}>{house.name}</h3>
          </div>
        )}

        <Stats house={house} variant={statVariant} />

        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, paddingTop: 14, borderTop: '1px solid var(--line)' }}>
          <p style={{ margin: 0, display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <b className="h-display" style={{ fontSize: '1.25rem' }}>{formatPrice(house.price)}</b>
            <small style={{ fontSize: 11.5, color: 'var(--muted)' }}>Noche/persona</small>
          </p>
          <Link href={href} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '11px 18px', borderRadius: 999, background: 'var(--accent)', color: '#ffffff', fontSize: 13.5, fontWeight: 600 }}>
            Ver estancia <span style={{ fontSize: 15 }}>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
