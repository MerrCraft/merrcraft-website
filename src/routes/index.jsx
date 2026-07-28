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
        <iframe src="https://merrcraft.atabook.org/" width="100%" height="400px" style="border:0;"></iframe>
      </section>
        

      <section>
        Hewwo! I'm MerrCraft, A person intrested in programming and touching grass.<br/>
        As you can tell, I really love cats.<br/>
        if you want more info, go to <a href="/about">about.</a>
      </section>
      
      <section>
        THX BOG FOR CODING INSPIRATION!<br/>
        CHECK OUT HIS PAGE RIGHT NOW OR ELSE<br/>
        <a href="https://bog.dragoncat.org"><img src="https://bog.dragoncat.org/88x31.png" alt="Boggiverse"/></a><br/>
        <small>also bog if ur seeing this page... i didnt copy your choice of atabook, i actually found it online myself, and it was your choice too... somehow</small>
      </section>
      </div>
    </main>
  );
}
