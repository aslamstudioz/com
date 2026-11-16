import {requireChatGPTUser} from '../chatgpt-auth';
import Admin from './panel';
export const dynamic='force-dynamic';
export default async function Page(){const u=await requireChatGPTUser('/admin');if(u.email.toLowerCase()!=='aslamstudioz01@gmail.com')return <main className="admin-shell"><h1>Owner access only</h1><p>Please sign in with the Aslam Studioz owner account.</p><a href="/">Back to the website</a></main>;return <Admin/>}
