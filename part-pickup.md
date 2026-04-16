---
layout: page
title: Part Pickup
permalink: /part-pickup/
kicker: Part Pickup
hero_title: Pick up completed parts from the locker
description: Pickup locker location and instructions for completed parts from the Conconi Family BioDevice Foundry.
lead: When parts are ready, the team may place them in a pickup locker for convenient collection.
sublead: Your pickup email will tell you which locker to use and provide the access code for that specific pickup.
hero_actions:
  - label: Contact the team
    url: /contact/
    primary: true
  - label: View location info
    url: "#location"
  - label: About the Foundry
    url: /about-the-foundry/
jump_links:
  - label: How it works
    url: "#how-it-works"
  - label: Locker location
    url: "#location"
  - label: Questions
    url: "#questions"
---
<section id="how-it-works">
  <div class="grid">
    <div class="card col-8">
      <h2>How pickup works</h2>
      <p>If your parts are ready for pickup, the team may place them in one of the pickup lockers and send you an email with the details.</p>
      <ol class="steps">
        <li>You receive an email confirming that your parts are ready.</li>
        <li>The email tells you which locker to use.</li>
        <li>The email includes the access code for that pickup.</li>
        <li>Use the locker number and code from your message to collect your parts.</li>
      </ol>
      <p class="muted">Locker assignments and codes are communicated directly by email for each pickup, so always use the most recent message from the team.</p>
    </div>
    <div class="card soft col-4">
      <h2>What to expect in the email</h2>
      <ul class="bullets">
        <li>A note that your parts are ready for pickup</li>
        <li>The specific locker number</li>
        <li>The access code for that locker</li>
        <li>Any special instructions if needed</li>
      </ul>
    </div>
  </div>
</section>

<section id="location">
  <div class="grid">
    <div class="card col-7">
      <h2>Where the lockers are</h2>
      <p>The pickup lockers are located on the main floor of the new Shrum building.</p>
      <p>They are on the east side of the building, near the bike locker area.</p>
      <p class="muted">If this is your first time visiting, use the Contact page for general wayfinding help or reach out to the team before you arrive.</p>
      <div class="btnrow">
        <a class="btn primary" href="{{ '/contact/' | relative_url }}">Contact</a>
        <a class="btn" href="{{ site.data.site.google_maps_url }}" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
      </div>
    </div>
    <div class="col-5">
      {% include placeholder-image.html src="/assets/pickup instructions/arrow to where the lockers are from lobby.jpg" eyebrow="Pickup location" title="Start from the main floor lobby" text="Use the labeled lobby image to orient yourself toward the east side of the new Shrum building." alt="Labeled image showing where to go from the main floor lobby to reach the pickup lockers" %}
    </div>
  </div>
</section>

<section>
  <div class="grid">
    <div class="col-6">
      {% include placeholder-image.html src="/assets/pickup instructions/lockers circled.jpg" eyebrow="Pickup location" title="Look for the locker area" text="This labeled image shows the pickup lockers near the bike locker area on the east side of the building." alt="Labeled image with the pickup locker area circled" %}
    </div>
    <div class="col-6">
      {% include placeholder-image.html src="/assets/pickup instructions/lockers closeup.jpg" eyebrow="Pickup location" title="Pickup lockers close up" text="Use the locker number and code from your email to open the correct locker." alt="Close-up labeled image of the part pickup lockers" %}
    </div>
  </div>
</section>

<section>
  <div class="grid">
    <div class="card col-12">
      <h2>Planning a visit</h2>
      <p>If you would like to look at the Rapid Prototype Lab while you are here, let the team know ahead of time. Depending on availability, they may be able to give you a quick tour.</p>
    </div>
  </div>
</section>

<section id="questions">
  <div class="grid">
    <div class="card soft col-12">
      <h2>Questions or issues</h2>
      <p class="muted">If you did not receive a locker number or code, cannot access the locker, or are unsure whether your pickup is ready, contact the team and include your name and project details.</p>
      <div class="btnrow">
        <a class="btn primary" href="{{ '/contact/' | relative_url }}">Contact the team</a>
        <a class="btn" href="{{ '/services-pricing/' | relative_url }}">Services & Pricing</a>
      </div>
    </div>
  </div>
</section>
