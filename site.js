const orchardPreview = document.querySelector("#orchard-preview");
const orchardToggle = document.querySelector(".orchard-preview-toggle");
const orchardCover = orchardPreview.querySelector(".orchard-cover");
const orchardFrame = orchardPreview.querySelector("template");

orchardToggle.hidden = false;
orchardToggle.addEventListener("click", () => {
  const opening = orchardToggle.getAttribute("aria-expanded") === "false";

  if (opening) {
    orchardPreview.append(orchardFrame.content.cloneNode(true));
  } else {
    orchardPreview.querySelector("iframe").remove();
  }

  orchardPreview.toggleAttribute("data-active", opening);
  orchardCover.hidden = opening;
  orchardToggle.setAttribute("aria-expanded", String(opening));
  orchardToggle.textContent = opening ? "Close preview" : "Preview here";
});

const incident = document.querySelector("#incident");
const steps = [...incident.querySelectorAll("[data-step]")];
const signal = incident.querySelector(".signal");
const stepTitle = incident.querySelector("#step-title");
const stepDescription = incident.querySelector("#step-description");

const events = [
  {
    state: "pending",
    title: "Nginx is stopped",
    description: "The stop command finishes on the target VM. Zabbix still needs a fresh HTTP check to observe the change."
  },
  {
    state: "problem",
    title: "Zabbix opens a problem",
    description: "The HTTP scenario reports failed step 1. The problem opens 24 seconds after the stop command finished."
  },
  {
    state: "recovering",
    title: "Nginx restarts",
    description: "The start command finishes on the target VM. The problem remains open until the monitoring check succeeds."
  },
  {
    state: "verified",
    title: "Zabbix verifies recovery",
    description: "A fresh check returns HTTP 200 and the failed step goes back to 0. The problem clears 7 seconds after restart."
  }
];

for (const button of steps) {
  button.addEventListener("click", () => {
    const event = events[Number(button.dataset.step)];

    for (const step of steps) {
      step.setAttribute("aria-pressed", String(step === button));
    }

    signal.dataset.state = event.state;
    stepTitle.textContent = event.title;
    stepDescription.textContent = event.description;
  });
}

const navLinks = [...document.querySelectorAll("nav a")];

function updateNavigation() {
  for (const link of navLinks) {
    if (link.hash === location.hash) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  }
}

window.addEventListener("hashchange", updateNavigation);
updateNavigation();

const statement = document.querySelector("[data-reveal]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const words = [];

  for (const node of [...statement.childNodes]) {
    if (node.nodeType !== Node.TEXT_NODE) continue;

    const fragment = document.createDocumentFragment();
    for (const token of node.textContent.split(/(\s+)/)) {
      if (!token) continue;
      if (token.trim()) {
        const word = document.createElement("span");
        word.textContent = token;
        fragment.append(word);
        words.push(word);
      } else {
        fragment.append(token);
      }
    }

    node.replaceWith(fragment);
  }

  statement.classList.add("is-revealing");
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;

    words.forEach((word, index) => {
      word.style.transitionDelay = `${index * 60}ms`;
      word.classList.add("is-visible");
    });
    observer.disconnect();
  }, { threshold: 0.24 });

  observer.observe(statement);
}
