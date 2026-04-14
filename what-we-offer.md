---
title: What We Offer
permalink: /what-we-offer/
kicker: What We Offer
hero_title: Capabilities that take biodevices from idea to working system
description: Explore fabrication, prototyping, biofunctionalization, and characterization capabilities at the Conconi Family BioDevice Foundry.
lead: The Conconi Family BioDevice Foundry combines cleanroom microfabrication with rapid prototyping, biofunctionalization, and device/material characterization in one place.
sublead: If you are new, start with Access & Training to understand onboarding. If you already have access, book through ColabMacs Login.
hero_actions:
  - label: Access & Training
    url: /access-training/
    primary: true
  - label: Fees & Pricing
    url: /services-pricing/
  - label: ColabMacs Login
    url: https://colabmacs.com/
jump_links:
  - label: Fabrication
    url: "#fabrication"
  - label: Prototyping & Assembly
    url: "#prototyping"
  - label: Biofunctionalization
    url: "#bio"
  - label: Characterization
    url: "#characterization"
  - label: Services
    url: "#services"
---
{% assign fabrication = site.capabilities | where: "category_key", "fabrication" | sort: "order" %}
{% assign prototyping = site.capabilities | where: "category_key", "prototyping" | sort: "order" %}
{% assign bio = site.capabilities | where: "category_key", "biofunctionalization" | sort: "order" %}
{% assign characterization = site.capabilities | where: "category_key", "characterization" | sort: "order" %}

<section>
  <div class="grid">
    <div class="card col-8">
      <h2>How to use this page</h2>
      <p>Most projects use more than one area. A microfluidic device might involve lithography and etching for fabrication, PDMS molding and bonding for biofunctionalization, laser cutting for housings, and microscopy for inspection.</p>
      <p class="muted">If you do not know which process you need, that is normal. Contact the team and describe the project goal, materials, and constraints.</p>
      <div class="btnrow">
        <a class="btn primary" href="{{ '/contact/' | relative_url }}">Contact for guidance</a>
        <a class="btn" href="{{ '/services-pricing/' | relative_url }}">Fees & Pricing</a>
      </div>
    </div>
    <div class="card soft col-4">
      <h2>Common starting points</h2>
      <p class="muted">Choose what best matches your situation:</p>
      <div class="btnrow">
        <a class="btn" href="{{ '/access-training/' | relative_url }}">I am a new user</a>
        <a class="btn" href="{{ site.data.site.nemo_url }}" target="_blank" rel="noopener noreferrer">I need to book equipment</a>
        <a class="btn" href="{{ '/services-pricing/' | relative_url }}">I need pricing</a>
      </div>
    </div>
  </div>
</section>

<section id="fabrication">
  <div class="card">
    <h2>Fabrication</h2>
    <p class="muted">Cleanroom-compatible processing for microscale device manufacturing, including lithography, thin films, plasma processing, and wet chemical workflows.</p>
    <div class="cards">
      {% for capability in fabrication %}
        <a class="mini" href="{{ capability.url | relative_url }}">
          <h3>{{ capability.title }}</h3>
          <p>{{ capability.card_summary }}</p>
        </a>
      {% endfor %}
    </div>
  </div>
</section>

<section id="prototyping">
  <div class="card">
    <h2>Rapid Prototyping, Precision Machining & Assembly</h2>
    <p class="muted">Additive and subtractive processes to support biodevice prototyping, packaging, and integration from one-off parts to small runs.</p>
    <div class="cards">
      {% for capability in prototyping %}
        <a class="mini" href="{{ capability.url | relative_url }}">
          <h3>{{ capability.title }}</h3>
          <p>{{ capability.card_summary }}</p>
        </a>
      {% endfor %}
    </div>
  </div>
</section>

<section id="bio">
  <div class="card">
    <h2>Biofunctionalization</h2>
    <p class="muted">Spaces and workflows for PDMS device preparation, surface modification, and controlled chemistry to support microfluidics, MEMS, and biodevice applications.</p>
    <div class="cards">
      {% for capability in bio %}
        <a class="mini" href="{{ capability.url | relative_url }}">
          <h3>{{ capability.title }}</h3>
          <p>{{ capability.card_summary }}</p>
        </a>
      {% endfor %}
    </div>
  </div>
</section>

<section id="characterization">
  <div class="card">
    <h2>Characterization</h2>
    <p class="muted">Material and device characterization tools and techniques including microscopy, spectroscopy, and rheology to validate structures, materials, and performance.</p>
    <div class="cards">
      {% for capability in characterization %}
        <a class="mini" href="{{ capability.url | relative_url }}">
          <h3>{{ capability.title }}</h3>
          <p>{{ capability.card_summary }}</p>
        </a>
      {% endfor %}
    </div>
  </div>
</section>

<section id="services">
  <div class="grid">
    <div class="card col-8">
      <h2>Services</h2>
      <p>In addition to equipment access, the Conconi Family BioDevice Foundry supports projects through staff-assisted services and guidance, especially when you need specialized expertise or faster iteration.</p>
      <div class="btnrow">
        <a class="btn primary" href="{{ '/services-pricing/' | relative_url }}">Fees & Pricing</a>
        <a class="btn" href="{{ '/contact/' | relative_url }}">Contact</a>
      </div>
    </div>
    <div class="card soft col-4">
      <h2>Not sure where to start?</h2>
      <p class="muted">Describe what you are trying to build, your materials, size constraints, biology, and timeline. The team can help route the project to the right pathway.</p>
      <div class="btnrow">
        <a class="btn primary" href="{{ '/contact/' | relative_url }}">Book a consultation</a>
        <a class="btn" href="{{ '/access-training/' | relative_url }}">New user steps</a>
      </div>
    </div>
  </div>
</section>
