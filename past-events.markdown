---
layout: default
title: Past Events
permalink: /events/past

---

<div class="container pb-10 px-2 md:mx-auto">

   <!-- Fetch upcoming events -->
  {% assign past_events = site.events | where: 'completed', true | sort: 'date' %}
  {% assign event_count = past_events | size %}

  <!-- Conditionally set grid based on the number of events -->
  {% if event_count == 1 %}
    <div class="grid grid-cols-1 place-items-center gap-4 md:gap-8">
  {% elsif event_count == 2 %}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
  {% else %}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 items-start"> <!-- Added items-start -->
  {% endif %}

  {% for event in past_events %}
    <div
      class="event-card relative bg-[{{site.bg-colors.darkBlue}}] p-6 rounded-2xl shadow-lg transition duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
    >
    <a href="{{ event.url }}" class="absolute inset-0 block"></a>
      <!-- Event Image on Top -->
      <div class="w-full flex justify-center">
        <img
          src="{{ event.banner_image }}"
          alt="{{ event.title }}"
          class="w-full h-auto rounded-md mb-4"
        />
      </div>

      <!-- Event Info Below Image -->
      <div class="text-center">
        <h3 class="text-xl font-semibold text-white">{{ event.title }}</h3>
        <p class="text-sm text-gray-300 italic font-semibold">
          {% if event.end_date %}
            {{ event.date | date: "%a, %b %e, %Y" }} - {{ event.end_date | date: "%a, %b %e, %Y" }}
          {% else %}
            {{ event.date | date: "%a, %b %e, %Y" }}
          {% endif %}
        </p>

        <!-- Event Description with Show More/Show Less -->
        <p class="text-sm my-2 text-white">
          <span class="event-description-short">{{ event.description | truncate: 120, "..." }}</span>
          <span class="event-description-full hidden">{{ event.description }}</span>

          <button class="text-blue-400 read-more relative z-10">Read More</button>
          <button class="text-blue-400 read-less hidden relative z-10">Show Less</button>
        </p>
      </div>
    </div>
  {% endfor %}
  </div>
</div>