---
layout: default
title: Contact Us
permalink: /contact/
---

<div class="container py-10 px-2 mx-auto items-center">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
    <div class="w-full h-full rounded-3xl overflow-hidden">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.6445680647219!2d85.33266066340637!3d27.637575154479304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb176abdf8b1e3%3A0xbe5844d7f7a9c46b!2sKantipur%20Engineering%20College!5e0!3m2!1sen!2snp!4v1728487755903!5m2!1sen!2snp" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="auto" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div class="flex flex-col items-start gap-7 w-full">
      <p class="font-inter font-normal text-base leading-5 text-justify text-black">
        We're always excited to connect! Whether you have a question, want to collaborate, or are interested in learning more about our activities, feel free to reach out. Expect to hear from us within the next two business days.<br><br> You can send us an email at <b><a href="mailto:computerclub@kec.edu.np" class="underline">computerclub@kec.edu.np</a>.</b><br> Visit us at our club office which is located at <b>Ground Floor, Teachers Block, KEC Marg Mathillo, Dhapakhel 23, Lalitpur, 44700 NP.</b>
      </p>

      <form class="flex flex-col items-start gap-4 w-full">
      
        <div class="flex flex-col items-start gap-1 w-full">
          <label class="font-inter font-bold text-lg text-black">Your Full Name</label>
          <input type="text" id="fullName" class="w-full h-[56px] rounded-md border-none focus:outline-none pl-2" style="background-color: {{ site.bg-colors.lightGray }};" placeholder="" required />
        </div>

        <div class="flex flex-col items-start gap-1 w-full">
          <label class="font-inter font-bold text-lg text-black">Subject</label>
          <input type="text" id="subject" class="w-full h-[56px] rounded-md border-none focus:outline-none pl-2" style="background-color: {{ site.bg-colors.lightGray }};" placeholder="" required />
        </div>

        <div class="flex flex-col items-start gap-1 w-full">
          <label class="font-inter font-bold text-lg text-black">Message</label>
          <textarea id="message" class="w-full h-[166px] rounded-md border-none focus:outline-none pl-2 pt-2 pr-2 resize-none" style="background-color: {{ site.bg-colors.lightGray }};" placeholder="" required></textarea>
        </div>

        <div class="w-full flex justify-center lg:justify-start">
          <button type="button" onclick="handleClick(event)" class="flex flex-row justify-center items-center p-2 rounded-md w-auto transform transition-transform duration-200 active:scale-95 hover:opacity-90" style="background-color: {{ site.bg-colors.orange-button }};">
            <span class="font-inter font-medium text-lg text-white">Send</span>
          </button>
        </div>
      </form>

        <div class="text-left w-full">
            <h3 class="text-lg font-bold mb-2 text-center lg:text-left">Follow Us On</h3>
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

<script>
function handleClick(event) {
    const fullName = document.getElementById('fullName').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const body = `${message}\n\nBest regards,\n${fullName}`;

    // Gmail link for composing a new email
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=computerclub@kec.edu.np&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open in a popup window or the same tab
    window.open(gmailLink, 'gmailComposeWindow', 'width=800,height=600');
}
</script>
