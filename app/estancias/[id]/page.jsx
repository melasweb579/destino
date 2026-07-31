import { notFound } from 'next/navigation';
import { getHouse, getHouseIds } from '@/lib/houses';
import { getCloudinaryImages } from '@/lib/cloudinary';
import HouseDetail from '@/components/HouseDetail';

export async function generateStaticParams() {
  const ids = await getHouseIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({ params }) {
  const house = await getHouse(params.id);
  if (!house) return {};
  return { title: `${house.name} · ${house.location} — Destino y Estancias` };
}

export default async function EstanciaPage({ params }) {
  const house = await getHouse(params.id);
  if (!house) notFound();

  const images = await getCloudinaryImages(house.cloudinaryFolder);
  const houseWithImages = { ...house, images };

  return <HouseDetail house={houseWithImages} />;
}
