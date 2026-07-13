import HouseCard from './HouseCard';

// Maps the data array → cards. `layout` = 'overlay' | 'editorial' | 'compact'.
export default function HouseGrid({ houses, layout = 'overlay' }) {
  const minCol = layout === 'compact' ? '244px' : '300px';
  return (
    <div style={{ display: 'grid', gap: 'clamp(16px,2.5vw,28px)', gridTemplateColumns: `repeat(auto-fill, minmax(${minCol}, 1fr))` }}>
      {houses.map((house) => (
        <HouseCard key={house.id} house={house} layout={layout} />
      ))}
    </div>
  );
}
