import { notFound } from 'next/navigation';
import { getHouse, getHouseIds } from '@/lib/houses';
import { getCloudinaryImages } from '@/lib/cloudinary';
import HouseDetail from '@/components/HouseDetail';

export function generateStaticParams() {
  return getHouseIds().map((id) => ({ id }));
}

export function generateMetadata({ params }) {
  const house = getHouse(params.id);
  if (!house) return {};
  return { title: `${house.name} · ${house.location} — Destino y Estancias` };
}

export default async function EstanciaPage({ params }) {
  const house = getHouse(params.id);
  if (!house) notFound();

  const images = await getCloudinaryImages(house.cloudinaryFolder);
  const houseWithImages = { ...house, images };

  return <HouseDetail house={houseWithImages} />;
}
