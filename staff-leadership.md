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
      <div class="col-4">
        {% include placeholder-image.html eyebrow="Expected portrait" title=person.title text="Staff and leadership pages normally include a portrait or in-lab photo for each team member." alt=person.title %}
      </div>
      <div class="card col-8">
        <h2>{{ person.title }}</h2>
        <p class="muted"><strong>{{ person.role }}</strong></p>
        {% for paragraph in person.bio %}
          <p{% if forloop.last %} class="muted"{% endif %}>{{ paragraph }}</p>
        {% endfor %}
      </div>
    </div>
  </section>
{% endfor %}

<section>
  <div class="grid">
    <div class="card soft col-12">
      <h2>Expected supporting visuals</h2>
      <p class="muted">In addition to portraits, a staff page usually benefits from one or two candid images of the team in the facility or supporting users at equipment.</p>
      <div class="grid" style="margin-top:14px;">
        <div class="col-6">
          {% include placeholder-image.html eyebrow="Expected image" title="Team in the facility" text="A group or candid lab image would typically appear here." alt="Placeholder for team in the facility" %}
        </div>
        <div class="col-6">
          {% include placeholder-image.html eyebrow="Expected image" title="Staff supporting users" text="A process-support or training photo would usually reinforce the service role of the team." alt="Placeholder for staff supporting users" %}
        </div>
      </div>
    </div>
  </div>
</section>

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
