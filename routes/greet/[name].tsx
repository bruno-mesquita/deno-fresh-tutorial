import { Head } from '$fresh/runtime.ts';
import { PageProps } from "$fresh/server.ts";

export default function GreetPage(props: PageProps) {
  const { name } = props.params;
  return (
    <>
      <Head>
        <title>Greetings</title>
      </Head>
      <main>
      <p>Greetings to you, {name}!</p>
      </main>
    </>
  );
}
