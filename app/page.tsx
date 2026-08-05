const estimateHref = "tel:7758836161";

export default function Home() {
  return (
    <main>
      <style>{`
        :root { --ink:#17201b; --green:#173f2d; --lime:#d5e46d; --sand:#eee9dc; --orange:#e66a28; }
        * { box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { margin:0; background:#f7f5ef; color:var(--ink); font-family:Arial, Helvetica, sans-serif; }
        a { color:inherit; }
        .shell { width:min(1180px, calc(100% - 40px)); margin:auto; }
        .eyebrow { margin:0 0 14px; color:var(--orange); font-size:12px; font-weight:900; letter-spacing:.16em; text-transform:uppercase; }
        .cta { display:inline-flex; align-items:center; justify-content:center; min-height:50px; padding:0 24px; border:2px solid var(--lime); background:var(--lime); color:var(--ink); font-size:13px; font-weight:900; letter-spacing:.06em; text-decoration:none; text-transform:uppercase; transition:.2s; }
        .cta:hover { background:transparent; color:var(--lime); }
        nav { position:absolute; z-index:5; top:0; width:100%; color:white; }
        .nav-inner { display:flex; align-items:center; justify-content:space-between; min-height:92px; gap:24px; }
        .logo { width:170px; height:55px; object-fit:contain; background:white; }
        .nav-links { display:flex; align-items:center; gap:26px; font-size:12px; font-weight:800; letter-spacing:.08em; text-transform:uppercase; }
        .nav-links a { text-decoration:none; }
        .hero { position:relative; min-height:780px; display:flex; align-items:flex-end; overflow:hidden; color:white; background:var(--green); }
        .hero-bg { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
        .hero:after { content:""; position:absolute; inset:0; background:linear-gradient(90deg, rgba(10,28,20,.92) 0%, rgba(10,28,20,.67) 48%, rgba(10,28,20,.15) 100%), linear-gradient(0deg, rgba(10,28,20,.55), transparent 55%); }
        .hero-content { position:relative; z-index:1; width:min(1180px, calc(100% - 40px)); margin:0 auto 110px; }
        .hero h1 { max-width:850px; margin:0 0 24px; font-family:Georgia, serif; font-size:clamp(54px, 8vw, 108px); font-weight:400; line-height:.88; letter-spacing:-.055em; }
        .hero-copy { display:flex; align-items:center; gap:34px; }
        .hero-copy p { max-width:510px; margin:0; color:#e7eadf; font-size:18px; line-height:1.6; }
        .proof-bar { position:relative; z-index:2; margin-top:-54px; }
        .proof-grid { display:grid; grid-template-columns:repeat(3, 1fr); background:var(--lime); }
        .proof-item { min-height:108px; padding:25px 30px; border-right:1px solid rgba(23,32,27,.25); }
        .proof-item:last-child { border:0; }
        .proof-item strong { display:block; margin-bottom:7px; font-family:Georgia,serif; font-size:24px; font-weight:400; }
        .proof-item span { font-size:12px; font-weight:800; letter-spacing:.05em; text-transform:uppercase; }
        section { padding:120px 0; }
        .split { display:grid; grid-template-columns:1.05fr .95fr; gap:80px; align-items:center; }
        .split.reverse { grid-template-columns:.95fr 1.05fr; }
        .section-image { position:relative; min-height:620px; }
        .section-image img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
        .image-tag { position:absolute; z-index:1; right:-24px; bottom:28px; padding:14px 18px; background:var(--orange); color:white; font-size:11px; font-weight:900; letter-spacing:.1em; text-transform:uppercase; }
        h2 { margin:0 0 24px; font-family:Georgia,serif; font-size:clamp(42px,5vw,70px); font-weight:400; line-height:.98; letter-spacing:-.035em; }
        .lead { margin:0 0 30px; color:#4d564f; font-size:18px; line-height:1.7; }
        .ticks { display:grid; gap:0; margin:30px 0 36px; border-top:1px solid #b9b9ad; }
        .tick { display:flex; gap:14px; padding:15px 0; border-bottom:1px solid #b9b9ad; font-size:14px; font-weight:800; }
        .tick:before { content:"+"; color:var(--orange); }
        .dark { background:var(--green); color:white; }
        .dark .lead { color:#c8d0c9; }
        .services-head { display:flex; align-items:end; justify-content:space-between; gap:40px; margin-bottom:54px; }
        .services-head h2 { max-width:650px; margin:0; }
        .service-grid { display:grid; grid-template-columns:repeat(3, 1fr); gap:18px; }
        .service { position:relative; min-height:540px; overflow:hidden; }
        .service img { width:100%; height:100%; object-fit:cover; transition:.4s; }
        .service:hover img { transform:scale(1.03); }
        .service:after { content:""; position:absolute; inset:35% 0 0; background:linear-gradient(transparent, rgba(5,15,10,.95)); }
        .service-copy { position:absolute; z-index:1; left:28px; right:28px; bottom:28px; }
        .service-copy span { color:var(--lime); font-size:11px; font-weight:900; letter-spacing:.14em; text-transform:uppercase; }
        .service-copy h3 { margin:8px 0 10px; font-family:Georgia,serif; font-size:34px; font-weight:400; }
        .service-copy p { margin:0; color:#d4d9d4; font-size:14px; line-height:1.5; }
        .projects { background:var(--sand); }
        .project-grid { display:grid; grid-template-columns:1.2fr .8fr; grid-template-rows:330px 330px; gap:18px; }
        .project { position:relative; overflow:hidden; background:#222; }
        .project:first-child { grid-row:1 / 3; }
        .project img { width:100%; height:100%; object-fit:cover; }
        .project:after { content:""; position:absolute; inset:45% 0 0; background:linear-gradient(transparent,rgba(0,0,0,.82)); }
        .project figcaption { position:absolute; z-index:1; left:28px; bottom:25px; color:white; }
        .project small { color:var(--lime); font-weight:900; letter-spacing:.12em; text-transform:uppercase; }
        .project h3 { margin:7px 0 0; font-family:Georgia,serif; font-size:30px; font-weight:400; }
        .credentials { background:#fff; }
        .credential-card { padding:42px; border:1px solid #c9cabf; background:var(--sand); }
        .licenses { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin:30px 0; }
        .license { padding:20px; background:white; border-left:4px solid var(--orange); }
        .license small { display:block; margin-bottom:6px; font-weight:900; letter-spacing:.1em; text-transform:uppercase; }
        .license strong { font-family:Georgia,serif; font-size:25px; font-weight:400; }
        .bbb { display:flex; align-items:center; gap:18px; padding-top:24px; border-top:1px solid #c4c4b9; }
        .bbb img { width:70px; height:70px; object-fit:contain; }
        .bbb p { margin:0; font-weight:800; line-height:1.5; }
        .faq-wrap { display:grid; grid-template-columns:.85fr 1.15fr; gap:70px; align-items:start; }
        .faq-photo { position:sticky; top:24px; height:600px; }
        .faq-photo img { width:100%; height:100%; object-fit:cover; }
        details { padding:24px 0; border-top:1px solid #9ea39e; }
        details:last-child { border-bottom:1px solid #9ea39e; }
        summary { cursor:pointer; list-style:none; font-family:Georgia,serif; font-size:25px; }
        summary:after { content:"+"; float:right; color:var(--orange); }
        details[open] summary:after { content:"−"; }
        details p { color:#59615b; line-height:1.7; }
        .final { position:relative; padding:130px 0; overflow:hidden; color:white; text-align:center; }
        .final img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
        .final:after { content:""; position:absolute; inset:0; background:rgba(10,32,22,.84); }
        .final .shell { position:relative; z-index:1; }
        .final h2 { max-width:850px; margin:0 auto 25px; }
        .final p { max-width:620px; margin:0 auto 32px; color:#d4ddd5; font-size:18px; line-height:1.6; }
        footer { padding:50px 0; background:#101813; color:#d7ddd8; }
        .footer-inner { display:grid; grid-template-columns:1.3fr 1fr 1fr; gap:40px; align-items:end; }
        footer img { width:180px; background:white; }
        footer p { margin:12px 0 0; font-size:13px; line-height:1.7; }
        footer strong { display:block; margin-bottom:8px; color:var(--lime); font-size:11px; letter-spacing:.12em; text-transform:uppercase; }
        @media (max-width:800px) {
          .shell, .hero-content { width:min(100% - 28px, 1180px); }
          .nav-inner { min-height:76px; }
          .logo { width:128px; height:44px; }
          .nav-links a:not(.cta) { display:none; }
          .nav-links { gap:0; }
          .nav-links .cta { min-height:42px; padding:0 14px; font-size:10px; }
          .hero { min-height:700px; }
          .hero-content { margin-bottom:95px; }
          .hero h1 { font-size:54px; }
          .hero-copy { display:block; }
          .hero-copy p { margin-bottom:24px; font-size:16px; }
          .proof-grid { grid-template-columns:1fr; }
          .proof-item { min-height:auto; border-right:0; border-bottom:1px solid rgba(23,32,27,.25); }
          section { padding:80px 0; }
          .split, .split.reverse, .faq-wrap { grid-template-columns:1fr; gap:45px; }
          .section-image { min-height:450px; }
          .image-tag { right:0; }
          .services-head { display:block; }
          .services-head .cta { margin-top:24px; }
          .service-grid { grid-template-columns:1fr; }
          .service { min-height:450px; }
          .project-grid { display:grid; grid-template-columns:1fr; grid-template-rows:repeat(3, 420px); }
          .project:first-child { grid-row:auto; }
          .licenses { grid-template-columns:1fr; }
          .credential-card { padding:28px; }
          .faq-photo { position:relative; top:0; height:420px; }
          .footer-inner { grid-template-columns:1fr; }
        }
      `}</style>

      <nav>
        <div className="shell nav-inner">
          <a href="#top" aria-label="Cruz Construction home">
            <img className="logo" src="/images/logo-2-600x146-e5823c8382.png" alt="Cruz Construction Co. Inc." />
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#work">Our work</a>
            <a href="#about">About</a>
            <a className="cta" href={estimateHref}>Get a Free Estimate</a>
          </div>
        </div>
      </nav>

      <header className="hero" id="top">
        <img className="hero-bg" src="/images/slide40-1536x496-d32290b48e.jpg" alt="Cruz Construction paving crew at work in Northern Nevada" />
        <div className="hero-content">
          <p className="eyebrow">Northern Nevada &amp; Lake Tahoe Civil Construction</p>
          <h1>Built right.<br />From the ground up.</h1>
          <div className="hero-copy">
            <p>Excavation, sitework, and paving delivered by a third-generation family company with the crews, equipment, and experience to take on demanding work.</p>
            <a className="cta" href={estimateHref}>Get a Free Estimate</a>
          </div>
        </div>
      </header>

      <aside className="proof-bar shell" aria-label="Company highlights">
        <div className="proof-grid">
          <div className="proof-item"><strong>Since 1996</strong><span>Civil construction experience</span></div>
          <div className="proof-item"><strong>3rd Generation</strong><span>Family owned and operated</span></div>
          <div className="proof-item"><strong>CA + NV Licensed</strong><span>BBB accredited contractor</span></div>
        </div>
      </aside>

      <section id="about">
        <div className="shell split">
          <div className="section-image">
            <img src="/images/20191015_092404-900x1200-d61caad51b.jpg" alt="Cruz Construction heavy equipment performing sitework" />
            <span className="image-tag">Field proven since 1996</span>
          </div>
          <div>
            <p className="eyebrow">One crew. Every layer.</p>
            <h2>Sitework built for Sierra conditions.</h2>
            <p className="lead">From clearing and underground utilities to the final paved surface, Cruz brings experienced supervision, skilled labor, and reliable modern equipment to every phase.</p>
            <div className="ticks">
              <div className="tick">Excavation, grading, demolition, and trucking</div>
              <div className="tick">Water, sewer, gas, septic, and erosion control</div>
              <div className="tick">Asphalt, concrete, sealcoat, and pavers</div>
              <div className="tick">Residential, commercial, and public works</div>
            </div>
            <a className="cta" href={estimateHref}>Get a Free Estimate</a>
          </div>
        </div>
      </section>

      <section className="dark" id="services">
        <div className="shell">
          <div className="services-head">
            <div><p className="eyebrow">What we build</p><h2>Complete civil construction capability.</h2></div>
            <a className="cta" href={estimateHref}>Get a Free Estimate</a>
          </div>
          <div className="service-grid">
            <article className="service">
              <img src="/images/vlcsnap-2024-08-28-10h41m00s939-600x338-36df86b3fe.png" alt="Commercial mass grading project" />
              <div className="service-copy"><span>01 / Sitework</span><h3>Shape the site</h3><p>Clearing, rough and final grading, drainage, foundations, landscaping preparation, and permitting.</p></div>
            </article>
            <article className="service">
              <img src="/images/20200205_115110-900x1200-5ac3fbf834.jpg" alt="Excavation work by Cruz Construction" />
              <div className="service-copy"><span>02 / Excavation</span><h3>Build below</h3><p>Utilities, septic systems, demolition, material handling, defensible space, and BMPs.</p></div>
            </article>
            <article className="service">
              <img src="/images/2023-gmc-paving-job-picture-26-900x1200-816e5e2914.jpg" alt="Completed GMC commercial paving project" />
              <div className="service-copy"><span>03 / Paving</span><h3>Finish strong</h3><p>Asphalt, concrete, pavers, sealing, resurfacing, and maintenance made for harsh weather.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="projects" id="work">
        <div className="shell">
          <div className="services-head">
            <div><p className="eyebrow">Work you can point to</p><h2>Proven across every project type.</h2></div>
            <p className="lead">Commercial brands, public agencies, and homeowners across the region rely on Cruz to do the job right the first time.</p>
          </div>
          <div className="project-grid">
            <figure className="project">
              <img src="/images/20200205_120117-900x1200-330b0c855b.jpg" alt="Spanish Springs U-Haul commercial paving project" />
              <figcaption><small>Commercial / Spanish Springs</small><h3>U-Haul paving</h3></figcaption>
            </figure>
            <figure className="project">
              <img src="/images/img_1810-526dab5ef2.jpg" alt="Incline Village residential paver project" />
              <figcaption><small>Residential / Incline Village</small><h3>Custom pavers</h3></figcaption>
            </figure>
            <figure className="project">
              <img src="/images/unnamed-900x1200-0de1c2dec4.jpg" alt="Tahoe Medical Center public works parking lot" />
              <figcaption><small>Public works / Carson City</small><h3>Tahoe Medical Center</h3></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="credentials">
        <div className="shell split reverse">
          <div>
            <p className="eyebrow">Accountable by design</p>
            <h2>Family standards. Professional credentials.</h2>
            <p className="lead">Three generations of construction knowledge are backed by active contractor licenses, BBB accreditation, experienced field supervision, and the bonding capacity to deliver projects of nearly any size.</p>
            <a className="cta" href={estimateHref}>Get a Free Estimate</a>
          </div>
          <div className="credential-card">
            <div className="licenses">
              <div className="license"><small>California License</small><strong>CA 741126</strong></div>
              <div className="license"><small>Nevada License</small><strong>NV 41648A</strong></div>
            </div>
            <div className="bbb">
              <img src="/images/bbb_logo-1-a43d335857.png" alt="Better Business Bureau accredited business" />
              <p>Accredited by the Better Business Bureau in Reno.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="shell faq-wrap">
          <div className="faq-photo"><img src="/images/20191019_155617-e1696472748359-1200x1069-0d55534bf0.jpg" alt="Completed Incline Village paver and heated driveway" /></div>
          <div>
            <p className="eyebrow">Project questions</p>
            <h2>Know before the first bucket moves.</h2>
            <details open><summary>What kinds of projects do you take on?</summary><p>We serve residential, commercial, and public works clients, from private roads and custom pavers to parking lots, mass grading, utilities, and complete site preparation.</p></details>
            <details><summary>What areas do you serve?</summary><p>Our crews work throughout Carson Valley, Reno, Washoe Valley, Gardnerville, Dayton, Minden, and the Lake Tahoe region.</p></details>
            <details><summary>Can you handle work below the surface?</summary><p>Yes. Our capabilities include excavation, grading, water, sewer, gas, septic, erosion control, demolition, and other work that must be right before a finished surface is installed.</p></details>
            <details><summary>How does the estimate work?</summary><p>Estimates are free and carry no obligation. An estimator will contact you within one week of your inquiry to discuss the scope of your job.</p></details>
          </div>
        </div>
      </section>

      <section className="final">
        <img src="/images/slide5-1536x496-be3995e04e.jpg" alt="Completed Cruz Construction paving project" />
        <div className="shell">
          <p className="eyebrow">Ready to break ground?</p>
          <h2>We’ll do your job right the first time.</h2>
          <p>Tell us what you’re building. Your estimate is free, carries no obligation, and starts with a conversation with our team.</p>
          <a className="cta" href={estimateHref}>Get a Free Estimate</a>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <div><img src="/images/logo-green-border-600-63079a62a4.jpg" alt="Cruz Construction Co. Inc." /><p>Third-generation excavation, sitework, and paving.</p></div>
          <div><strong>Contact</strong><p>775-883-6161<br />info@cruzconstruction.com<br />19 Cygnet Dr, Mound House, NV 89706</p></div>
          <div><strong>Credentials</strong><p>CA 741126 · NV 41648A<br />BBB Accredited Business<br />Serving Northern Nevada &amp; Lake Tahoe</p></div>
        </div>
      </footer>
    </main>
  );
}
