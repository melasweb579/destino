'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { updateHouse } from '@/lib/houses';

export async function updateHouseAction(id, formData) {
  const amenities = String(formData.get('amenities') || '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  await updateHouse(id, {
    name: formData.get('name'),
    location: formData.get('location'),
    price: Number(formData.get('price')),
    currency: formData.get('currency'),
    capacity: Number(formData.get('capacity')),
    rooms: Number(formData.get('rooms')),
    bathrooms: Number(formData.get('bathrooms')),
    garage: Number(formData.get('garage')),
    description: formData.get('description'),
    description2: formData.get('description2'),
    amenities,
  });

  // The public site pre-renders these — invalidate so visitors see the update immediately.
  revalidatePath('/');
  revalidatePath(`/estancias/${id}`);
  revalidatePath('/admin');

  redirect(`/admin?updated=${id}`);
}
