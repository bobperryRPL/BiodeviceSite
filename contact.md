---
title: Contact
permalink: /contact/
kicker: Contact
hero_title: Get in touch with the Conconi Family BioDevice Foundry
description: Contact the Conconi Family BioDevice Foundry at UBC. Address, hours, map, intake form, and email contact.
lead: Use this page to reach the team, request onboarding support, ask about pricing, or get help choosing the right pathway for your project.
sublead: Returning user? ColabMacs Login is the fastest way to manage bookings and account details.
hero_actions:
  - label: Step 1: Intake Form
    url: https://ubc.ca1.qualtrics.com/jfe/form/SV_bJkOwKA73jF4bxs
    primary: true
  - label: Email Us
    url: "mailto:{{ site.data.site.contact_email }}"
  - label: ColabMacs Login
    url: https://colabmacs.com/
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
      <div class="embed-frame">
        <iframe
          src="https://www.google.com/maps?q=6088+University+Blvd,+Vancouver,+BC+V6T+1Z3&output=embed"
          title="Map to the Conconi Family BioDevice Foundry"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="btnrow">
        <a class="btn" href="{{ site.data.site.google_maps_url }}" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
        <a class="btn" href="{{ '/about-the-foundry/' | relative_url }}">About the Conconi Family BioDevice Foundry</a>
      </div>
      <p class="help">Tip: if you are visiting for the first time, message the team ahead of time and ask for entry and wayfinding details.</p>
    </div>
    <div class="card soft col-5">
      <h2>How to find us</h2>
      <p class="muted">The Conconi Family BioDevice Foundry is located in the SBME building on the basement level, room B1130.</p>
      <ul class="bullets">
        <li>Enter the SBME building at 6088 University Blvd.</li>
        <li>Go down to the basement level.</li>
        <li>Follow signage for the Conconi Family BioDevice Foundry to room B1130.</li>
        <li>If you cannot find it, contact the team for wayfinding help.</li>
      </ul>
      <div style="margin-top:14px;">
        <figure class="placeholder-figure">
          <img src="{{ '/assets/building-sbme.jpg' | relative_url }}" alt="Exterior view of the SBME building at UBC" />
          <figcaption>
            <strong>SBME building entrance</strong>
            <span>Use this as a visual landmark while the detailed map is still in progress.</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>

<section id="contact-options">
  <div class="grid">
    <div class="card col-12">
      <h2>How to contact us</h2>
      <p class="muted">New users should begin with the intake form. For all other inquiries, email the team directly.</p>
      <div class="btnrow">
        <a class="btn primary" href="https://ubc.ca1.qualtrics.com/jfe/form/SV_bJkOwKA73jF4bxs" target="_blank" rel="noopener noreferrer">Step 1: New User Intake Form</a>
        <a class="btn" href="mailto:{{ site.data.site.contact_email }}">Email {{ site.data.site.contact_email }}</a>
        <a class="btn" href="{{ '/access-training/' | relative_url }}">Access & Training</a>
      </div>
      <p class="help">If you are requesting access for the first time, please do not email first. Submit the intake form so the team can route your request properly.</p>
    </div>
  </div>
</section>

<section>
  <div class="grid">
    <div class="card soft col-12">
      <h2>Quick links</h2>
      <div class="kv">
        <div class="item">
          <strong>New to the Conconi Family BioDevice Foundry?</strong>
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
          <span class="muted">Use ColabMacs Login for bookings and account status.</span><br />
          <a class="btn utility" style="margin-top:10px; display:inline-block;" href="{{ site.data.site.nemo_url }}" target="_blank" rel="noopener noreferrer">ColabMacs Login</a>
        </div>
      </div>
    </div>
  </div>
</section>
