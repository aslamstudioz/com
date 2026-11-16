import {studioDefaults} from '../../../lib/studio-profile';
import {env} from 'cloudflare:workers';
export async function GET(){const [albums,photos,settings]=await Promise.all([env.DB.prepare('SELECT * FROM albums ORDER BY created DESC').all(),env.DB.prepare('SELECT id,album_id,created FROM photos ORDER BY created ASC').all(),env.DB.prepare('SELECT * FROM settings').all()]);return Response.json({albums:albums.results,photos:photos.results,settings:{...studioDefaults,...Object.fromEntries(settings.results.map((s:any)=>[s.id,s.value]))}},{headers:{'Cache-Control':'no-store'}})}
