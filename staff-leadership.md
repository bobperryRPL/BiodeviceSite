---
title: Staff & Leadership
permalink: /staff-leadership/
kicker: Staff & Leadership
hero_title: Meet the team
description: Staff and leadership bios for the Conconi Family BioDevice Foundry at UBC.
lead: The Foundry is supported by staff and leadership with expertise spanning microfabrication, microfluidics, surface chemistry, prototyping, and translational biodevice development.
hero_actions:
  - label: Back to About the Foundry
    url: /about-the-foundry/
  - label: Contact
    url: /contact/
    primary: true
---
{% assign people = site.staff | sort: "order" %}
{% for person in people %}
  <section>
    <div class="grid">
      <div class="card{% if forloop.first %} col-8{% else %} col-12{% endif %}">
        <h2>{{ person.title }}</h2>
        <p class="muted"><strong>{{ person.role }}</strong></p>
        {% for paragraph in person.bio %}
          <p{% if forloop.last %} class="muted"{% endif %}>{{ paragraph }}</p>
        {% endfor %}
      </div>
      {% if forloop.first %}
        <div class="card soft col-4">
          <h2>Helpful links</h2>
          <p class="muted">For onboarding and bookings:</p>
          <div class="btnrow">
            <a class="btn" href="{{ '/access-training/' | relative_url }}">Access & Training</a>
            <a class="btn" href="{{ '/nemo-login/' | relative_url }}">NEMO Login</a>
          </div>
        </div>
      {% endif %}
    </div>
  </section>
{% endfor %}

<section>
  <div class="grid">
    <div class="card soft col-12">
      <h2>Need to reach the team?</h2>
      <p class="muted">Use the contact page for general inquiries, onboarding questions, and consultation requests.</p>
      <div class="btnrow">
        <a class="btn primary" href="{{ '/contact/' | relative_url }}">Contact Us</a>
        <a class="btn" href="{{ '/services-pricing/' | relative_url }}">Fees & Pricing</a>
        <a class="btn" href="{{ '/what-we-offer/' | relative_url }}">What We Offer</a>
      </div>
    </div>
  </div>
</section>
