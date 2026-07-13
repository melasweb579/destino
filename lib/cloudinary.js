import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Fetch images from a Cloudinary folder using the Search API.
// Pass `limit` to cap how many are returned (e.g. 5 for home cards).
// Returns [] if the folder is empty or doesn't exist yet.
export async function getCloudinaryImages(folderName, limit = 30) {
  if (!folderName) return [];
  try {
    const result = await cloudinary.search
      .expression(`folder:${folderName}`)
      .sort_by('display_name', 'asc')
      .max_results(limit)
      .execute();

    return result.resources.map((img) => img.secure_url);
  } catch {
    return [];
  }
}
