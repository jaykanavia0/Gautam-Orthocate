/**
 * GAUTAM ORTHOCARE - APPLICATION LOGIC & INTERACTION CONTROLLER
 * Target Doctor: Dr. Shubham P. Shah (MS, DNB Orthopaedics)
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileDrawer();
  initScrollSpy();
});

/* --- 1. Sticky Header Scroll Effect --- */
function initHeaderScroll() {
  const header = document.getElementById('mainHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* --- 2. Mobile Drawer Navigation --- */
function initMobileDrawer() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const closeBtn = document.getElementById('mobileDrawerClose');

  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      drawer.classList.add('open');
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  }
}

function closeDrawer() {
  const drawer = document.getElementById('mobileDrawer');
  if (drawer) {
    drawer.classList.remove('open');
  }
}

/* --- 3. ScrollSpy Active Nav Highlighter --- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-item');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --- 4. Interactive Symptom Triage Controller --- */
function switchTriage(jointName) {
  // Update Buttons
  const buttons = document.querySelectorAll('.triage-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-joint') === jointName) {
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    }
  });

  // Update Panels
  const panels = document.querySelectorAll('.triage-panel');
  panels.forEach(panel => {
    panel.classList.remove('active');
  });

  const activePanel = document.getElementById(`panel-${jointName}`);
  if (activePanel) {
    activePanel.classList.add('active');
  }
}

function selectTriageTab(jointName) {
  switchTriage(jointName);
  const triageSec = document.getElementById('triage');
  if (triageSec) {
    triageSec.scrollIntoView({ behavior: 'smooth' });
  }
}

/* --- 5. Specialty Preselection Helper --- */
function preselectCategory(categoryName) {
  const select = document.getElementById('consultationCategory');
  if (select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.includes(categoryName) || select.options[i].value.includes(categoryName)) {
        select.selectedIndex = i;
        break;
      }
    }
  }
}

/* --- 6. FAQ Accordion Toggle --- */
function toggleFaq(button) {
  const item = button.closest('.faq-item');
  if (!item) return;

  const isOpen = item.classList.contains('open');

  // Close all items
  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('open');
  });

  // Toggle clicked
  if (!isOpen) {
    item.classList.add('open');
  }
}

/* --- 7. Consultation Booking Form & WhatsApp Deep-Link Generator --- */
function handleFormSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById('patientName');
  const phoneInput = document.getElementById('patientPhone');
  const categorySelect = document.getElementById('consultationCategory');
  const centerSelect = document.getElementById('preferredCenter');
  const messageInput = document.getElementById('patientMessage');

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const category = categorySelect ? categorySelect.value : '';
  const center = centerSelect ? centerSelect.value : '';
  const message = messageInput ? messageInput.value.trim() : 'N/A';

  if (!name || !phone) {
    alert('Please enter your full name and contact number.');
    return false;
  }

  // Hide Form, Show Success Box
  const form = document.getElementById('consultationForm');
  const successBox = document.getElementById('formSuccessBox');
  const successDetail = document.getElementById('successMessageDetail');
  const waBtn = document.getElementById('directWhatsAppLaunchBtn');

  if (form && successBox) {
    form.style.display = 'none';
    successBox.classList.add('show');

    if (successDetail) {
      successDetail.innerHTML = `
        Thank you, <strong>${name}</strong>! Your request for <strong>${category}</strong> at <strong>${center}</strong> has been logged. Our clinical coordinator will call you at <strong>${phone}</strong> shortly.
      `;
    }

    // Build prefilled WhatsApp message
    const waText = encodeURIComponent(
      `Hello Dr. Shubham Shah,\n\nI have requested a consultation via your website:\n• Patient: ${name}\n• Phone: ${phone}\n• Specialty: ${category}\n• Preferred Center: ${center}\n• Symptoms: ${message}\n\nPlease confirm available OPD appointment slots.`
    );

    if (waBtn) {
      waBtn.href = `https://wa.me/919722618721?text=${waText}`;
    }
  }

  return false;
}

function resetForm() {
  const form = document.getElementById('consultationForm');
  const successBox = document.getElementById('formSuccessBox');
  if (form && successBox) {
    form.reset();
    form.style.display = 'block';
    successBox.classList.remove('show');
  }
}

/* --- 8. Media & Certificate Lightbox Modal --- */
function openMediaModal(type) {
  const modal = document.getElementById('mediaModal');
  const body = document.getElementById('modalMediaBody');
  if (!modal || !body) return;

  if (type === 'certificate') {
    body.innerHTML = `
      <div style="padding: 10px; text-align: center;">
        <div style="border-radius: 12px; overflow: hidden; margin-bottom: 16px; box-shadow: 0 4px 16px rgba(0,0,0,0.1);">
          <img src="assets/WhatsApp Image 2026-06-23 at 6.17.17 PM.jpeg" alt="Robotic Joint Replacement Fellowship Certificate - Dr. Shubham P. Shah" style="width: 100%; max-height: 520px; object-fit: contain;">
        </div>
        <h3 style="font-family: var(--font-display); font-size: 20px; color: var(--color-slate-900); margin-bottom: 6px;">Fellowship Certification Ceremony</h3>
        <p style="font-size: 13px; color: var(--color-slate-600); margin-bottom: 8px;">
          <strong>RNH Hospital Centre for Robotic Joint Replacement &amp; Sports Medicine, Nagpur</strong>
        </p>
        <p style="font-size: 12px; color: var(--color-slate-500); line-height: 1.5;">
          Certificate awarded to <strong>Dr. Shubham P. Shah</strong> upon completion of sub-specialty clinical training in robotic joint arthroplasty, presented by Senior Joint Replacement Surgeon <strong>Dr. Mukesh Laddha</strong>.
        </p>
      </div>
    `;
  } else if (type === 'surgery') {
    body.innerHTML = `
      <div style="padding: 10px; text-align: center;">
        <div style="border-radius: 12px; overflow: hidden; margin-bottom: 16px;">
          <img src="assets/WhatsApp Image 2026-06-23 at 6.17.41 PM.jpeg" alt="Sterile Operation Theater Procedure" style="width: 100%; max-height: 520px; object-fit: contain;">
        </div>
        <h3 style="font-family: var(--font-display); font-size: 20px; color: var(--color-slate-900); margin-bottom: 6px;">Intraoperative Surgical Precision</h3>
        <p style="font-size: 12px; color: var(--color-slate-500);">
          Dr. Shubham P. Shah conducting sterile anatomical reconstruction in a laminar-airflow operation theater.
        </p>
      </div>
    `;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMediaModal(event) {
  if (!event || event.target.id === 'mediaModal' || event.target.classList.contains('modal-close-btn')) {
    const modal = document.getElementById('mediaModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }
}

/* --- 9. Full Medical Article Reader Modal --- */
const articlesData = {
  habits: {
    category: "Joint Longevity & Prevention",
    title: "5 Crucial Habits to Prevent Knee Replacement Surgery",
    readTime: "5 Min Read",
    author: "Dr. Shubham P. Shah (MS, DNB Ortho)",
    image: "assets/blog_knee_habits.png",
    content: `
      <p style="font-size: 16px; font-weight: 500; color: var(--color-slate-700); margin-bottom: 20px;">
        Osteoarthritis and joint wear affect millions, but total knee replacement surgery isn't always inevitable. By adopting specific physiological adjustments early, you can significantly prolong the lifetime of your cartilage and maintain pain-free mobility.
      </p>

      <div style="background: var(--color-primary-light); border-left: 4px solid var(--color-primary); padding: 16px; border-radius: 8px; margin-bottom: 24px;">
        <strong style="color: var(--color-primary); display: block; margin-bottom: 4px;">Doctor's Insight Note:</strong>
        <p style="font-size: 13px; color: var(--color-slate-700); margin-bottom: 0;">
          Joint conservation is always the first line of defense. The cartilage lining your joints does not have its own blood supply; it relies on motion and synovial fluid to receive nutrients. Active prevention is the best treatment!
        </p>
      </div>

      <h4 style="font-size: 18px; font-weight: 800; color: var(--color-slate-900); margin-bottom: 8px;">1. Weight Management: The 1:4 Load Ratio</h4>
      <p style="font-size: 14px; color: var(--color-slate-600); margin-bottom: 12px;">
        During normal walking on level ground, the force exerted on your knees is approximately 1.5 times your body weight. However, when going up or down stairs, this load increases to <strong>3 to 4 times your body weight</strong>.
      </p>
      <blockquote style="background: var(--color-porcelain); padding: 12px 16px; border-left: 3px solid var(--color-gold); font-style: italic; font-size: 13px; color: var(--color-slate-700); margin-bottom: 16px;">
        "For every single pound of body weight you lose, you remove 4 pounds of pressure/load on your knee joints."
      </blockquote>
      <p style="font-size: 14px; color: var(--color-slate-600); margin-bottom: 20px;">
        Losing just 10 pounds can reduce up to 40 pounds of repetitive load per step, drastically slowing down cartilage erosion.
      </p>

      <h4 style="font-size: 18px; font-weight: 800; color: var(--color-slate-900); margin-bottom: 8px;">2. Prioritize Low-Impact Aerobic Exercises</h4>
      <p style="font-size: 14px; color: var(--color-slate-600); margin-bottom: 10px;">
        Running on hard concrete generates high-velocity shockwaves that travel up the tibia, creating micro-cracks in worn cartilage. Switch to low-impact alternatives:
      </p>
      <ul style="padding-left: 20px; font-size: 14px; color: var(--color-slate-600); margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px;">
        <li><strong>Swimming &amp; Water Aerobics:</strong> Buoyancy relieves gravity's pressure completely while water resistance strengthens muscles.</li>
        <li><strong>Cycling (Stationary or Outdoor):</strong> Dynamic rotational movements encourage synovial fluid circulation to nourish cartilage.</li>
        <li><strong>Elliptical Trainers:</strong> Smooth gliding tracks prevent the sharp impact forces of running.</li>
      </ul>

      <h4 style="font-size: 18px; font-weight: 800; color: var(--color-slate-900); margin-bottom: 8px;">3. Build Strong Quadriceps and Hip Abductors</h4>
      <p style="font-size: 14px; color: var(--color-slate-600); margin-bottom: 20px;">
        Your thigh muscles (quadriceps) and glutes act as the primary stabilizing suspension for your knees. When these muscles are weak, all load is transferred directly onto the cartilage. Targeting the Vastus Medialis Oblique (VMO) keeps the patella tracking smoothly in its groove.
      </p>

      <h4 style="font-size: 18px; font-weight: 800; color: var(--color-slate-900); margin-bottom: 8px;">4. Optimize Bone Nutrition (Vitamin D3 &amp; Calcium)</h4>
      <p style="font-size: 14px; color: var(--color-slate-600); margin-bottom: 20px;">
        Subchondral bone strength directly beneath your cartilage is critical. Ensure adequate Vitamin D3 levels to enable calcium absorption, and consult your orthopaedic surgeon regarding cartilage supplements like Undenatured Type-II Collagen peptides.
      </p>

      <h4 style="font-size: 18px; font-weight: 800; color: var(--color-slate-900); margin-bottom: 8px;">5. Early Medical Consultation &amp; Non-Surgical Cartilage Therapies</h4>
      <p style="font-size: 14px; color: var(--color-slate-600); margin-bottom: 12px;">
        Do not wait until a severe limp or permanent flexion deformity develops. If you experience morning stiffness or joint grinding sounds (crepitus), early non-operative options include:
      </p>
      <ul style="padding-left: 20px; font-size: 14px; color: var(--color-slate-600); margin-bottom: 24px; display: flex; flex-direction: column; gap: 6px;">
        <li><strong>Viscosupplementation:</strong> Hyaluronic acid injections to lubricate and cushion the joint.</li>
        <li><strong>Targeted Physiotherapy:</strong> Custom exercise plans to correct gait patterns.</li>
        <li><strong>Offloader Bracing:</strong> Unloading worn compartments to halt bone-on-bone friction.</li>
      </ul>

      <div style="background: var(--color-slate-900); color: #fff; padding: 20px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; gap: 16px;">
        <div>
          <strong style="display: block; font-size: 16px;">Need a clinical knee evaluation in Surat?</strong>
          <span style="font-size: 12px; color: var(--color-slate-300);">Consult directly with Dr. Shubham Shah.</span>
        </div>
        <a href="#book-consultation" onclick="closeArticleModal(null)" class="btn btn-gold btn-sm" style="white-space: nowrap;">Book Appointment</a>
      </div>
    `
  },
  quads: {
    category: "Therapeutic Rehabilitation",
    title: "Strengthening Your Quadriceps: A Doctor's Guide to Knee Support",
    readTime: "6 Min Read",
    author: "Dr. Shubham P. Shah (MS, DNB Ortho)",
    image: "assets/blog_quads_exercise.png",
    content: `
      <p style="font-size: 16px; font-weight: 500; color: var(--color-slate-700); margin-bottom: 20px;">
        Your thigh muscles act as natural shock absorbers for your knee joint. When your quadriceps are weak, every step transmits high-velocity impacts directly into your bone surfaces. Learn the safe, doctor-approved exercises to stabilize your knee without joint strain.
      </p>

      <div style="background: var(--color-teal-subtle); border-left: 4px solid var(--color-teal); padding: 16px; border-radius: 8px; margin-bottom: 24px;">
        <strong style="color: var(--color-teal); display: block; margin-bottom: 4px;">Why Muscle Strength Matters:</strong>
        <p style="font-size: 13px; color: var(--color-slate-700); margin-bottom: 0;">
          A strong quadriceps muscle group acts like the suspension system in a vehicle. It actively absorbs impacts during walking and stair climbing, protecting sensitive hyaline cartilage underneath.
        </p>
      </div>

      <h4 style="font-size: 18px; font-weight: 800; color: var(--color-slate-900); margin-bottom: 8px;">Exercise 1: Straight Leg Raises (SLR)</h4>
      <p style="font-size: 14px; color: var(--color-slate-600); margin-bottom: 8px;">
        Builds quadriceps strength without placing compressive pressure on the knee joint surface.
      </p>
      <div style="background: var(--color-porcelain); padding: 14px 18px; border-radius: 10px; margin-bottom: 20px; font-size: 13px; color: var(--color-slate-700); line-height: 1.6;">
        <ol style="padding-left: 18px; display: flex; flex-direction: column; gap: 4px;">
          <li>Lie flat on your back on a firm mattress or exercise mat.</li>
          <li>Bend one knee at a 90-degree angle with foot flat on floor to support lower back.</li>
          <li>Keep the target leg completely straight. Flex foot towards your face.</li>
          <li>Slowly lift the straight leg about 12 inches off the floor. Keep knee locked.</li>
          <li>Hold for 5 seconds, then lower slowly with control.</li>
          <li>Perform <strong>3 sets of 10 repetitions per leg</strong>.</li>
        </ol>
      </div>

      <h4 style="font-size: 18px; font-weight: 800; color: var(--color-slate-900); margin-bottom: 8px;">Exercise 2: Wall Squats (Limited Depth)</h4>
      <p style="font-size: 14px; color: var(--color-slate-600); margin-bottom: 8px;">
        Closed-chain functional exercise strengthening quadriceps and glutes. Limiting the bending angle prevents kneecap strain.
      </p>
      <div style="background: var(--color-porcelain); padding: 14px 18px; border-radius: 10px; margin-bottom: 20px; font-size: 13px; color: var(--color-slate-700); line-height: 1.6;">
        <ol style="padding-left: 18px; display: flex; flex-direction: column; gap: 4px;">
          <li>Stand straight with back, shoulders, and head against a wall.</li>
          <li>Position feet 12 inches away from the wall, shoulder-width apart.</li>
          <li>Slowly slide down until knees are bent to <strong>no more than 45 to 60 degrees</strong>. (Avoid bending past 60°).</li>
          <li>Hold for 5 to 7 seconds feeling the thigh muscles working.</li>
          <li>Slide slowly back up to starting position. Repeat <strong>10 to 15 reps</strong>.</li>
        </ol>
      </div>

      <h4 style="font-size: 18px; font-weight: 800; color: var(--color-slate-900); margin-bottom: 8px;">Exercise 3: Clamshells (For Hip Abductors &amp; Alignment)</h4>
      <p style="font-size: 14px; color: var(--color-slate-600); margin-bottom: 8px;">
        Strong hips prevent "knock-knee" alignment (valgus strain), which accelerates wear on the outer compartment of the knee.
      </p>
      <div style="background: var(--color-porcelain); padding: 14px 18px; border-radius: 10px; margin-bottom: 20px; font-size: 13px; color: var(--color-slate-700); line-height: 1.6;">
        <ol style="padding-left: 18px; display: flex; flex-direction: column; gap: 4px;">
          <li>Lie on your side with hips stacked and knees bent at 90 degrees.</li>
          <li>Keeping your feet touching, slowly raise your top knee as high as comfortable without rotating your pelvis backward.</li>
          <li>Pause at the top for 2 seconds, then lower slowly.</li>
          <li>Perform <strong>3 sets of 15 reps on each side</strong>.</li>
        </ol>
      </div>

      <h4 style="font-size: 18px; font-weight: 800; color: var(--color-slate-900); margin-bottom: 8px;">Exercise 4: Terminal Knee Extensions (TKEs)</h4>
      <p style="font-size: 14px; color: var(--color-slate-600); margin-bottom: 8px;">
        TKEs directly isolate the Vastus Medialis Oblique (VMO), crucial for patellar tracking and ACL rehabilitation.
      </p>
      <div style="background: var(--color-porcelain); padding: 14px 18px; border-radius: 10px; margin-bottom: 24px; font-size: 13px; color: var(--color-slate-700); line-height: 1.6;">
        <ol style="padding-left: 18px; display: flex; flex-direction: column; gap: 4px;">
          <li>Anchor an elastic resistance band to a heavy door hinge at knee height.</li>
          <li>Step into loop, resting band behind your knee fold. Step back until taut.</li>
          <li>Start with target knee slightly bent; push knee backward to straighten leg completely, squeezing the quadriceps.</li>
          <li>Hold for 3 seconds, then return to starting position. Do <strong>3 sets of 15 reps</strong>.</li>
        </ol>
      </div>

      <div style="background: var(--color-slate-900); color: #fff; padding: 20px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; gap: 16px;">
        <div>
          <strong style="display: block; font-size: 16px;">Experiencing knee pain during exercise?</strong>
          <span style="font-size: 12px; color: var(--color-slate-300);">Get a personalized physical rehabilitation assessment in Surat.</span>
        </div>
        <a href="#book-consultation" onclick="closeArticleModal(null)" class="btn btn-gold btn-sm" style="white-space: nowrap;">Request Consultation</a>
      </div>
    `
  }
};

function openArticleModal(slug) {
  const modal = document.getElementById('articleModal');
  const body = document.getElementById('modalArticleBody');
  if (!modal || !body || !articlesData[slug]) return;

  const art = articlesData[slug];
  body.innerHTML = `
    <div style="padding: 24px;">
      <div style="border-radius: 14px; overflow: hidden; margin-bottom: 20px; aspect-ratio: 16/9; background: #0F172A;">
        <img src="${art.image}" alt="${art.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 12px; font-size: 12px; color: var(--color-slate-500);">
        <span style="background: var(--color-primary-light); color: var(--color-primary); font-weight: 700; padding: 4px 10px; border-radius: 9999px;">${art.category}</span>
        <span><i class="fa-regular fa-clock"></i> ${art.readTime}</span>
        <span style="font-weight: 600; color: var(--color-slate-800);"><i class="fa-solid fa-user-doctor"></i> ${art.author}</span>
      </div>
      <h2 style="font-family: var(--font-display); font-size: 26px; font-weight: 800; color: var(--color-slate-900); margin-bottom: 18px; line-height: 1.25;">${art.title}</h2>
      <div>${art.content}</div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeArticleModal(event) {
  if (!event || event.target.id === 'articleModal' || event.target.classList.contains('modal-close-btn')) {
    const modal = document.getElementById('articleModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }
}

// Close modals on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMediaModal(null);
    closeArticleModal(null);
    closeDrawer();
  }
});
