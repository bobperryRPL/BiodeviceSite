---
title: Contact
permalink: /contact/
kicker: Contact
hero_title: Get in touch with the BioDevice Foundry
description: Contact the Conconi Family BioDevice Foundry at UBC. Address, hours, and contact form placeholder.
lead: Use this page to reach the team, request onboarding support, ask about pricing, or get help choosing the right pathway for your project.
sublead: Returning user? NEMO is the fastest way to manage bookings and account details.
hero_actions:
  - label: Send a message
    url: "#contact-form"
    primary: true
  - label: NEMO Login
    url: /nemo-login/
  - label: Access & Training
    url: /access-training/
    utility: true
---
<section id="location">
  <div class="grid">
    <div class="card col-7">
      <h2>Address</h2>
      <p>
        <strong>{{ site.data.site.title }}</strong><br />
        {{ site.data.site.address_lines | join: '<br />' }}
      </p>
      <h3>Regular staffed hours</h3>
      <p><strong>{{ site.data.site.hours }}</strong></p>
      <div class="btnrow">
        <a class="btn primary" href="{{ site.data.site.google_maps_url }}">Open in Maps</a>
        <a class="btn" href="{{ '/about-the-foundry/' | relative_url }}">About the Foundry</a>
        <a class="btn" href="{{ '/services-pricing/' | relative_url }}">Services & Pricing</a>
      </div>
      <p class="help">Tip: if you are visiting for the first time, message the team ahead of time and ask for entry and wayfinding details.</p>
    </div>
    <div class="card soft col-5">
      <h2>How to find us</h2>
      <p class="muted">The Foundry is located in the SBME building on the basement level, room B1130.</p>
      <ul class="bullets">
        <li>Enter the SBME building at 6088 University Blvd.</li>
        <li>Go down to the basement level.</li>
        <li>Follow signage for the BioDevice Foundry to room B1130.</li>
        <li>If you cannot find it, contact the team for wayfinding help.</li>
      </ul>
      <p class="muted" style="margin-top:10px;">Placeholder: add a floor map image or photo landmarks later if needed.</p>
    </div>
  </div>
</section>

<section id="contact-form">
  <div class="grid">
    <div class="card col-12">
      <h2>Contact form</h2>
      <p class="muted">Tell the team what you are trying to do and they can route you to the right person or next step. This form is currently a front-end placeholder until a real submission backend is connected.</p>
      <form action="#" method="post">
        <div class="fieldgrid">
          <div class="field">
            <label for="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" required />
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@domain.com" required />
          </div>
        </div>
        <div class="fieldgrid" style="margin-top:12px;">
          <div class="field">
            <label for="topic">Topic</label>
            <select id="topic" name="topic">
              <option>General inquiry</option>
              <option>New user onboarding / training</option>
              <option>Bookings / NEMO support</option>
              <option>Services & pricing</option>
              <option>Design services / project support</option>
              <option>Other</option>
            </select>
          </div>
          <div class="field">
            <label for="affiliation">Affiliation</label>
            <input id="affiliation" name="affiliation" type="text" placeholder="UBC / external / industry / lab / company" />
          </div>
        </div>
        <div class="field" style="margin-top:12px;">
          <label for="message">Message</label>
          <textarea id="message" name="message" placeholder="What are you trying to build or do? Any constraints such as materials, scale, biology, or timeline?" required></textarea>
          <div class="help">Helpful details: target processes or tools, preferred materials, and your ideal timeline.</div>
        </div>
        <div class="btnrow" style="margin-top:14px;">
          <button class="btn primary" type="submit">Send message</button>
          <a class="btn" href="{{ '/what-we-offer/' | relative_url }}">What we offer</a>
          <a class="btn utility" href="{{ '/nemo-login/' | relative_url }}">NEMO Login</a>
        </div>
      </form>
    </div>
  </div>
</section>

<section>
  <div class="grid">
    <div class="card soft col-12">
      <h2>Quick links</h2>
      <div class="kv">
        <div class="item">
          <strong>New to the Foundry?</strong>
          <span class="muted">Start with Access & Training to understand onboarding and requirements.</span><br />
          <a class="btn" style="margin-top:10px; display:inline-block;" href="{{ '/access-training/' | relative_url }}">Access & Training</a>
        </div>
        <div class="item">
          <strong>Need pricing?</strong>
          <span class="muted">See rates for access, staff support, and instrument hourly fees.</span><br />
          <a class="btn" style="margin-top:10px; display:inline-block;" href="{{ '/services-pricing/' | relative_url }}">Services & Pricing</a>
        </div>
        <div class="item">
          <strong>Returning user?</strong>
          <span class="muted">Use NEMO for bookings and account status.</span><br />
          <a class="btn utility" style="margin-top:10px; display:inline-block;" href="{{ '/nemo-login/' | relative_url }}">NEMO Login</a>
        </div>
      </div>
    </div>
  </div>
</section>
