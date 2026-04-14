---
title: Services & Pricing
permalink: /services-pricing/
kicker: Services & Pricing
hero_title: Rates for access, staff support, and instrument use
description: Services and pricing for the Conconi Family BioDevice Foundry. View rates by user type and see instrument hourly fees.
lead: Pricing is listed by user category. Use the selector to highlight the column that applies to you. If you are unsure which category fits, contact the team and they can confirm it quickly.
sublead: Some items may be quoted case-by-case depending on requirements.
hero_actions:
  - label: ColabMacs Login
    url: https://colabmacs.com/
    primary: true
  - label: Access & Training
    url: /access-training/
  - label: Ask about pricing
    url: /contact/
    utility: true
---
<section>
  <div class="grid">
    <div class="card col-12">
      <h2>Highlight rates for your user type</h2>
      <p class="muted">Choose one to visually highlight the relevant column in the tables below.</p>
      <div class="selector" role="group" aria-label="User type selector">
        <button class="seg" type="button" data-focus="internal" aria-pressed="true">Internal</button>
        <button class="seg" type="button" data-focus="academic" aria-pressed="false">Academic</button>
        <button class="seg" type="button" data-focus="industrial" aria-pressed="false">Industrial</button>
      </div>
      <div class="note">Tip: scroll sideways on small screens to see all columns.</div>
    </div>
  </div>
</section>

<section id="facility-rates">
  <div class="grid">
    <div class="card col-12">
      <h2>Facility and service rates</h2>
      <p class="muted">These apply to onboarding, access, staff support, and common consumables.</p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Resource</th>
              <th class="head-internal">Internal</th>
              <th class="head-academic">Academic</th>
              <th class="head-industrial">Industrial</th>
            </tr>
          </thead>
          <tbody>
            {% for row in site.data.pricing.facility_rates %}
              <tr>
                <td>{{ row.resource }}</td>
                <td class="col-internal{% if row.muted %} muted{% endif %}">{{ row.internal }}</td>
                <td class="col-academic{% if row.muted %} muted{% endif %}">{{ row.academic }}</td>
                <td class="col-industrial{% if row.muted %} muted{% endif %}">{{ row.industrial }}</td>
              </tr>
            {% endfor %}
          </tbody>
        </table>
      </div>
      <div class="note">Deposition materials are typically quoted based on material and process needs. If you have a target material and thickness range, include that in your inquiry.</div>
      <div class="btnrow">
        <a class="btn primary" href="{{ '/contact/' | relative_url }}">Request a quote</a>
        <a class="btn" href="{{ '/what-we-offer/' | relative_url }}">Capabilities</a>
      </div>
    </div>
  </div>
</section>

<section id="instrument-rates">
  <div class="grid">
    <div class="card col-12">
      <h2>Instrument hourly rates</h2>
      <p class="muted">Hourly rates for common instruments and tools.</p>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th class="head-internal">Internal</th>
              <th class="head-academic">Academic</th>
              <th class="head-industrial">Industrial</th>
            </tr>
          </thead>
          <tbody>
            {% for row in site.data.pricing.instrument_rates %}
              <tr>
                <td>{{ row.instrument }}</td>
                <td class="col-internal{% if row.muted %} muted{% endif %}">{{ row.internal }}</td>
                <td class="col-academic{% if row.muted %} muted{% endif %}">{{ row.academic }}</td>
                <td class="col-industrial{% if row.muted %} muted{% endif %}">{{ row.industrial }}</td>
              </tr>
            {% endfor %}
          </tbody>
        </table>
      </div>
      <div class="note">Some specialty tools are listed without posted rates. For these, contact the team with your intended use and they can confirm availability and pricing.</div>
    </div>
  </div>
</section>

<section id="services">
  <div class="grid">
    <div class="card col-8">
      <h2>Services</h2>
      <p>In addition to instrument access, the Conconi Family BioDevice Foundry supports users through staff-assisted workflows and project guidance. This is especially useful if you are new to the processes, need faster iteration, or have complex constraints.</p>
      <ul class="inline-list">
        <li>Training and staff support</li>
        <li>Custom processing by staff</li>
        <li>Design and consultation support</li>
      </ul>
      <div class="btnrow">
        <a class="btn primary" href="{{ '/contact/' | relative_url }}">Discuss a project</a>
      </div>
    </div>
    <div class="card soft col-4">
      <h2>Billing questions</h2>
      <p class="muted">If you need a cost estimate, include user category, instruments needed, expected hours, materials, and whether you need staff assistance.</p>
      <div class="btnrow">
        <a class="btn primary" href="{{ '/contact/' | relative_url }}">Request estimate</a>
        <a class="btn" href="{{ '/what-we-offer/' | relative_url }}">What we offer</a>
      </div>
    </div>
  </div>
</section>
