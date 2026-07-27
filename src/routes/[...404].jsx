import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Page dont exist :((</h1>
      <p>
        uhh, either this page DIED, or it just dont exist :3
      </p>
    </main>
  );
}
