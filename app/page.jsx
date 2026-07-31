import { getHouses } from '@/lib/houses';
import { getCloudinaryImages } from '@/lib/cloudinary';
import Hero from '@/components/Hero';
import HouseGrid from '@/components/HouseGrid';
import About from '@/components/About';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';

export default async function HomePage() {
  const houses = await getHouses();

  // Fetch all folders in parallel — empty folders resolve to [] instantly.
  const allImages = await Promise.all(
    houses.map((h) => getCloudinaryImages(h.cloudinaryFolder, 5))
  );

  const housesWithImages = houses.map((h, i) => ({ ...h, images: allImages[i] }));

  return (
    <main>
      <Hero />
      <section id="estancias" className="container" style={{ padding: 'clamp(56px,9vh,110px) clamp(20px,5vw,48px)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 18, marginBottom: 'clamp(28px,4vh,46px)' }}>
          <div>
            <p className="eyebrow">Nuestras estancias</p>
            <h2 className="h-display" style={{ margin: 0, fontSize: 'clamp(1.9rem,3.6vw,2.8rem)', lineHeight: 1.05 }}>Elige dónde despertar</h2>
          </div>
          <p style={{ margin: 0, maxWidth: 360, fontSize: 15, lineHeight: 1.55, color: '#6B6357' }}>
            Cada casa tiene su propia historia. Desliza las fotos y entra a conocerla.
          </p>
        </div>
        <HouseGrid houses={housesWithImages} layout="overlay" />
      </section>
      <About />
      <Faq />
      <Contact />
    </main>
  );
}
