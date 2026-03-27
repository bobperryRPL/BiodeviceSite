---
title: About the Foundry
permalink: /about-the-foundry/
kicker: About the Foundry
hero_title: Conconi Family BioDevice Foundry
description: Mission, overview, hours, and location for the Conconi Family BioDevice Foundry at UBC.
lead: The Conconi Family BioDevice Foundry is a UBC core facility designed and oriented for life sciences applications, interfacing standard cleanroom microdevice manufacturing processes with cutting-edge life sciences research.
sublead: Use this page for an overview of our mission, how we operate, and how to find us. For bios and roles, see Staff & Leadership.
hero_actions:
  - label: Explore What We Offer
    url: /what-we-offer/
    primary: true
  - label: Access & Training
    url: /access-training/
  - label: Contact
    url: /contact/
jump_links:
  - label: Mission
    url: "#mission"
  - label: How we help
    url: "#how-we-help"
  - label: Staff & Leadership
    url: /staff-leadership/
  - label: Hours & Location
    url: "#hours-location"
---
<section id="mission">
  <div class="grid">
    <div class="card col-8">
      <h2>Mission</h2>
      <p>The Conconi Family BioDevice Foundry is the first of its kind in Western Canada to be designed and oriented for life sciences applications. The unique capability of the facility is that it interfaces standard cleanroom microdevice manufacturing processes with cutting-edge life sciences research.</p>
      <p>The Foundry aims to develop solutions to common challenges by consolidating specialized infrastructure and technological expertise, nucleating a pool of experts and giving them the technological capabilities to create translation-centric solutions to biomedical and clinical problems.</p>
      <p class="muted">The Foundry re-imagines what a core facility can be: not only implementing off-the-shelf biodevices for users, but also creating custom solutions by innovating novel materials, techniques, and biodevice types.</p>
    </div>
    <div class="card soft col-4">
      <h2>Quick links</h2>
      <p class="muted">Common next steps for new visitors.</p>
      <div class="btnrow">
        <a class="btn" href="{{ '/what-we-offer/' | relative_url }}">Capabilities</a>
        <a class="btn" href="{{ '/services-pricing/' | relative_url }}">Fees</a>
        <a class="btn" href="{{ '/access-training/' | relative_url }}">Training</a>
        <a class="btn" href="{{ site.data.site.nemo_url }}" target="_blank" rel="noopener noreferrer">ColabMacs Login</a>
      </div>
    </div>
  </div>
</section>

<section id="facility-visual">
  <div class="grid">
    <div class="col-7">
      {% include placeholder-image.html eyebrow="Expected image" title="Facility overview or cleanroom interior" text="About pages usually include a wide environment image showing the space, scale, and research setting." alt="Placeholder for facility overview or cleanroom interior" %}
    </div>
    <div class="col-5">
      {% include placeholder-image.html eyebrow="Expected diagram" title="Facility layout or workflow diagram" text="A simple visual explaining how cleanroom, biofunctionalization, characterization, and prototyping areas connect would fit here." alt="Placeholder for facility layout or workflow diagram" %}
    </div>
  </div>
</section>

<section id="virtual-tour">
  <div class="grid">
    <div class="card col-12">
      <h2>Virtual Tour</h2>
      <p>Explore the facility virtually using the embedded tour below. If the tour does not load in this page, open it directly in a new tab.</p>
      <div class="embed-frame">
        <iframe
          src="https://portal.nucleus4d.com/?session=152bcdc1-35d4-4764-aa25-9df63d63819d"
          title="Conconi Family BioDevice Foundry virtual tour"
          loading="lazy"
          allowfullscreen
          referrerpolicy="strict-origin-when-cross-origin"></iframe>
      </div>
      <div class="btnrow">
        <a class="btn primary" href="https://portal.nucleus4d.com/?session=152bcdc1-35d4-4764-aa25-9df63d63819d" target="_blank" rel="noreferrer">Open Virtual Tour</a>
      </div>
      <p class="note">Some tour providers restrict embedding. If you see a blank frame or an access message, use the button above.</p>
    </div>
  </div>
</section>

<section id="how-we-help">
  <div class="grid">
    <div class="card col-12">
      <h2>How the Foundry helps projects move forward</h2>
      <p>We support translation-centric work by bringing specialized infrastructure and expertise together in one place. Depending on your needs, this can include equipment access, staff support, and process guidance across fabrication, prototyping, biofunctionalization, and characterization.</p>
      <div class="btnrow">
        <a class="btn primary" href="{{ '/what-we-offer/' | relative_url }}">What We Offer</a>
        <a class="btn" href="{{ '/contact/' | relative_url }}">Discuss a Project</a>
      </div>
    </div>
  </div>
</section>

<section id="hours-location">
  <div class="grid">
    <div class="card col-8">
      <h2>Regular staffed hours</h2>
      <p><strong>{{ site.data.site.hours }}</strong></p>
      <h2 class="section-heading">Address</h2>
      <p>
        <strong>{{ site.data.site.title }}</strong><br />
        {{ site.data.site.address_lines | join: '<br />' }}
      </p>
      <div class="btnrow">
        <a class="btn" href="{{ '/contact/' | relative_url }}">Contact Us</a>
        <a class="btn" href="{{ '/access-training/' | relative_url }}">How to Become a User</a>
      </div>
    </div>
    <div class="card soft col-4">
      {% include placeholder-image.html eyebrow="Expected image" title="Wayfinding or exterior reference image" text="Visitors usually expect a building exterior, entrance, or location photo near the address and hours section." alt="Placeholder for wayfinding or exterior reference image" %}
    </div>
  </div>
</section>
