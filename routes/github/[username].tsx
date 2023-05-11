import type { Handlers, PageProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';

type User = {
  login: string;
  name: string;
  avatar_url: string;
}

export const handler: Handlers<User | null> = {
  async GET(_, ctx) {
    const { username } = ctx.params;
    const resp = await fetch(`https://api.github.com/users/${username}`);
    if(resp.status === 404) return ctx.render(null);
    const user: User = await resp.json();
    return ctx.render(user);
  }
}

export default function Page({ data }: PageProps<User | null>) {
  if(!data) return <h1>User not found</h1>

  return (
    <>
    <Head>
      <title>{data.name}</title>
    </Head>
    <main class="p-10">
      <img src={data.avatar_url} width={120} height={120} class="rounded-lg" />
      <h1>{data.name}</h1>
      <h1>{data.login}</h1>
    </main>
    </>
  )
}
