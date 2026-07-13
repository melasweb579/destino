import { v2 as cloudinary } from 'cloudinary';

// ── Credentials ────────────────────────────────────────────────────────────
cloudinary.config({
  cloud_name: 'e806itgk',
  api_key:    '442812273744261',
  api_secret: 'jPb1ccioGz1YCqzHC2t2PwZmtWo',
});

// ── 1. Upload ───────────────────────────────────────────────────────────────
console.log('Uploading image...');
const upload = await cloudinary.uploader.upload(
  'https://res.cloudinary.com/demo/image/upload/sample.jpg',
  { public_id: 'onboarding_sample' }
);

console.log('\n✅ Upload complete');
console.log('   Secure URL :', upload.secure_url);
console.log('   Public ID  :', upload.public_id);

// ── 2. Image details ────────────────────────────────────────────────────────
console.log('\nFetching image details...');
const details = await cloudinary.api.resource(upload.public_id);

console.log('\n📐 Image metadata');
console.log('   Width  :', details.width, 'px');
console.log('   Height :', details.height, 'px');
console.log('   Format :', details.format);
console.log('   Size   :', details.bytes, 'bytes');

// ── 3. Transform ────────────────────────────────────────────────────────────
const transformedUrl = cloudinary.url(upload.public_id, {
  fetch_format: 'auto',  // f_auto: serve WebP/AVIF when the browser supports it
  quality: 'auto',       // q_auto: let Cloudinary pick the best quality/size balance
  secure: true,
});

console.log('\n🔗 Transformed image URL (f_auto + q_auto)');
console.log('   ', transformedUrl);
console.log('\nDone! Click link below to see optimized version of the image. Check the size and the format.');
console.log(transformedUrl);
