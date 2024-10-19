---
layout: default
title: About Us
permalink: /about/
---

<div class="container py-10 px-2 mx-auto items-center">

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
    <div class="w-full h-full rounded-3xl overflow-hidden">
      <img src="/assets/images/banner.png" alt="event-photo" class="w-full h-full object-cover">
    </div>

    <div class="flex flex-col items-start gap-4 w-full">
      <p class="font-inter font-normal text-base leading-6 text-justify text-black">
        The <b>Computer Club of Kantipur Engineering College</b> is a student organization founded in 2013 with the intention of providing everything students need to explore their ideas and develop new skills related to the field of computers. We also help build confidence in students through various programs and activities. This Club consists of computer enthusiasts and technically-minded hobbyists as executive members. The main vision of the club is to expose students to the latest advancements in computer technology and give individuals an opportunity to share and extend ideas, views, and knowledge in the fast-changing field of computers.
        <br><br>
        The club provides a strong platform for engineering students to practically implement their innovative ideas for different applications. The Club offers indispensable guidance, workshops, and organizes various events for students to explore their full potential.
      </p>

      <h2 class="text-xl font-bold mb-0 text-center lg:text-left">Our Objectives</h2>

      <ul class="font-inter font-normal text-base leading-6 text-justify text-black list-disc pl-5 mt-0">
        <li>To provide computer and computerized device knowledge and mentored training.</li>
        <li>To provide centralized association management services to organize technical and professional programs in the college.</li>
        <li>To nurture the minds of students towards creativity and steer their talents towards high-quality research in different areas of Computer Engineering and Technology.</li>
        <li>To help students convert theoretical knowledge into practical work.</li>
        <li>To help our students excel in the area of computers and cognitive sciences and produce high-quality engineers with self-confidence in the nation.</li>
        <li>To develop fellowship between the students of our college along with mutual understanding.</li>
        <li>To provide a forum for the open discussion of all matters of public interest related to computer technology.</li>
        <li>To enhance the professional development of our students and networking among technical professionals.</li>
      </ul>

      <div class="text-left w-full mt-4">
        <h3 class="text-lg font-bold mb-2 text-center lg:text-left">Follow us on</h3>
        <div class="flex justify-center lg:justify-start space-x-4 flex-wrap">
          <a href="https://www.facebook.com/{{ site.facebook_username }}" target="_blank" class="hover:text-gray-400"><i class="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/{{ site.instagram_username }}" target="_blank" class="hover:text-gray-400"><i class="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/{{ site.linkedin_username }}" target="_blank" class="hover:text-gray-400"><i class="fab fa-linkedin"></i></a>
          <a href="https://github.com/{{ site.github_username }}" target="_blank" class="hover:text-gray-400"><i class="fab fa-github"></i></a>
          <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank" class="hover:text-gray-400"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>
  </div>
</div>

{% include executive-members.html %}

{% include open-source-contributors.html %}

<br><br><br>