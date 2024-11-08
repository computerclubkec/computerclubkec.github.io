---
layout: default
title: Upcoming Events
permalink: /events/upcoming
---

<div class="container pb-10 px-2 md:mx-auto" data-aos="fade-up">
    
   <!-- Fetch upcoming events -->
  {% assign upcoming_events = site.events | where: 'completed', false | sort: 'date' %}
  {% assign event_count = upcoming_events | size %}

  {% if event_count == 0 %}
  <div class="font-inter text-center text-gray-500 text-xl mt-16">
  No upcoming events at the moment. Please check back later.
</div>

  <!-- Conditionally set grid based on the number of events -->
  {% elsif event_count == 1 %}
    <div class="grid grid-cols-1 place-items-center gap-4 md:gap-8">
  {% elsif event_count == 2 %}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
  {% else %}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 items-start">
  {% endif %}

  {% for event in upcoming_events %}
    <div
      class="event-card relative bg-[{{site.bg-colors.darkBlue}}] p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
    >
      <a href="{{ event.url }}" class="absolute inset-0 block"></a>
      <!-- Event Image on Top -->
      <div class="w-full flex justify-center">
        <img loading="lazy"
          src="{{ event.thumbnail }}"
          alt="{{ event.title }}"
          class="w-full h-auto rounded-md mb-4"
        />
      </div>

      <!-- Event Info Below Image -->
      <div class="text-justify">
        
        <!-- Date Badge -->
        <div
          class="inline-flex items-center gap-2 mb-2 text-sm font-inter font-regular text-[{{site.text-colors.white}}]">
          <i class="fa-solid fa-calendar-days"></i>
          <!-- Event Date Logic -->
          {% if event.end_date %}
          <!-- Multi-day event: Show start and end dates -->
          {{ event.date | date: "%a, %b %e" }} - {{ event.end_date | date: "%a, %b %e, %Y" }}
          {% else %}
          <!-- Single-day event: Show only the start date -->
          {{ event.date | date: "%a, %B %e, %Y" }}
          {% endif %}
        </div>

        <h3 class="text-xl font-montserrat font-semibold text-white">{{ event.title }}</h3>
        
        <!-- Event Description with Show More/Show Less -->
        <p class="font-inter text-sm my-2 text-white">
          <span class="event-description-short">{{ event.description | truncate: 120, "..." }}</span>
          <span class="event-description-full hidden">{{ event.description }}</span>

          <button class="text-blue-400 read-more relative z-10">Read More</button>
          <button class="text-blue-400 read-less hidden relative z-10">Show Less</button>
        </p>

        <!-- Button Container -->
            <div class="flex flex-row items-center space-x-2 mt-4 relative z-20">
              <!-- Register Button -->
              <a href="{{ event.registration_link }}" class="inline-block">
                <button
                  class="inline-block flex items-center border-2 border-[{{site.bg-colors.orange-button}}] bg-[{{site.bg-colors.orange-button}}] text-white font-inter font-semibold px-4 py-2 rounded-lg hover:bg-[{{site.bg-colors.orange-button-hover}}] hover:border-[{{site.bg-colors.orange-button-hover}}] transition-colors duration-300 gap-2">
                  <i class="fa-solid fa-circle-check text-sm"></i>
                  Register
                </button>
              </a>

              <!-- Calendar Button Component -->
              {% assign uid = event.url %}
              {% assign start_date = event.date | date: '%Y%m%dT%H%M%S' %}
              {% assign end_date = event.end_date | date: '%Y%m%dT%H%M%S' %}
              {% assign title = event.title %}
              {% assign description = event.description %}
              {% assign location = event.location %}

              {% include add-to-calendar-button.html uid=uid start_date=start_date end_date=end_date title=title
              description=description location=location %}
            </div>
      </div>
    </div>
  {% endfor %}
  </div>
</div>
