import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get('folder');

  try {
    if (folder) {
      // Search specific folder
      const result = await cloudinary.search
        .expression(`folder:${folder}`)
        .max_results(5)
        .execute();
      return Response.json({ folder, total: result.total_count, resources: result.resources.map(r => r.public_id) });
    } else {
      // List all root folders
      const result = await cloudinary.api.root_folders();
      return Response.json({ folders: result.folders.map(f => f.name) });
    }
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
