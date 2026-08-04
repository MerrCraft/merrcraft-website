import myCat from "../assets/MyCat.png";

export default function Home() {
  return (
    <main>
      <script src="https://u.widget.st/ar.js"></script>

      {/* Sections */}
      <div class="sections"> 

      <section>
        <p class="title">About (simplified)</p>
        Hewwo! I'm MerrCraft, A person intrested in programming and touching grass.<br/>
        As you can tell, I really love cats.<br/>
        if you want more info, go to <a href="/about">about.</a>
        <p><img src={myCat} width="100px"></img>meow</p>
      </section>

      <section>
        <p class="title">Chat</p>
        <ws-widget type="chat" iid="550" width="100%" height="300px"></ws-widget>
      </section>

      <section>
        <p class="title">Guestbook</p>
        <iframe src="https://merrcraft.atabook.org/" width="100%" height="400px" style="border:0;"></iframe>
        <p>yo guys. PLEAAE STOP WITH CHEEZEMAN, YOUR DRIVING ME INSANE (im kidding. keep doing it. keep it a tradition)</p>
      </section>

      <section>
        <p class="title">BOG</p>
        THX BOG FOR CODING INSPIRATION!<br/>
        CHECK OUT HIS PAGE RIGHT NOW OR ELSE<br/>
        <a href="https://bog.dragoncat.org"><img src="https://bog.dragoncat.org/88x31.png" alt="Boggiverse"/></a><br/>
        <small>also bog if ur seeing this page... i didnt copy your choice of atabook, i actually found it online myself, and it was your choice too... somehow</small>
      </section>

      <section>
        I like this page <br/>
        <ws-widget type="like" iid="661"></ws-widget><ws-widget type="rating" iid="741"></ws-widget>
      </section>
      <section>
        <p>warming my heart {"<3"}<br/></p>
        <p>you can click on it and it brings you to a new site like this one!</p>
        <iframe width="180" height="180" style="border:none" src="https://nvlk.dimden.dev/" name="neolink"></iframe>
      </section>
      <section>
        <p class="title">What i'm listing to</p>
        <ws-widget type="lastfm" iid="2337"></ws-widget>
      </section>
      </div>
    </main>
  );
}
