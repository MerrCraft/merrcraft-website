import Counter from "~/components/Counter";
import title from "../assets/MerrCraftsMeowingCatsTitle.png";

export default function Home() {
  return (
    <main>
      <div class="titwe">
        <img src={title} id="title-logo"></img>
      </div>

      {/* Sections */}
      <div class="sections">
      <section>
        Hewwo! I'm MerrCraft, A person intrested in programming and touching grass.<br/>
        As you can tell, I really love cats.<br/>
        if you want more info, go to <a href="/about">about.</a>
      </section>
      </div>
    </main>
  );
}
