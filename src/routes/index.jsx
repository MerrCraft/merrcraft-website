import Counter from "~/components/Counter";


export default function Home() {
  return (
    <main>
      

      {/* Sections */}
      <div class="sections">
        
      <section>
        <p class="title">Guestbook</p>
        <iframe src="https://merrcraft.atabook.org/" width="100%" height="400px" style="border:0;"></iframe>
        <p>yo guys. PLEAAE STOP WITH CHEEZEMAN, YOUR DRIVING ME INSANE (im kidding. keep doing it. keep it a tradition)</p>
      </section>
        

      <section>
        <p class="title">About (simplified)</p>
        Hewwo! I'm MerrCraft, A person intrested in programming and touching grass.<br/>
        As you can tell, I really love cats.<br/>
        if you want more info, go to <a href="/about">about.</a>
      </section>
      
      <section>
        <p class="title">BOG</p>
        THX BOG FOR CODING INSPIRATION!<br/>
        CHECK OUT HIS PAGE RIGHT NOW OR ELSE<br/>
        <a href="https://bog.dragoncat.org"><img src="https://bog.dragoncat.org/88x31.png" alt="Boggiverse"/></a><br/>
        <small>also bog if ur seeing this page... i didnt copy your choice of atabook, i actually found it online myself, and it was your choice too... somehow</small>
      </section>
      </div>
    </main>
  );
}
