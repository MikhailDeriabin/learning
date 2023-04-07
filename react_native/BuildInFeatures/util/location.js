const GOOGLE_API_KEY = '';

export function getMapPreview({lat, lon}) {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:%7C${lat},${lon}&key=${GOOGLE_API_KEY}`;
}
