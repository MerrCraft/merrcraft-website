import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import title from "./assets/MerrCraftsMeowingCatsTitle.png";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
        <script src="https://keepandroidopen.org/banner.js"></script>
          <Title>MerrCraft's Meowing Cats</Title>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <div class="titwe">
              <img src={title} id="title-logo"></img>
            </div>
          </nav>
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
