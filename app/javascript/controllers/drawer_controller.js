import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="drawer"
export default class extends Controller {
  static targets = ["drawer", "content"];

  connect() {
    const urlParams = new URLSearchParams(window.location.search);
    // Loop through each drawer element
    this.drawerTargets.forEach((drawer) => {
      const drawerId = drawer.dataset.id;
      const drawerOpenParam = urlParams.get(drawerId);

      if (drawerOpenParam && drawerOpenParam.toLowerCase() === 'true') {
        this.open(drawer);
      } else {
        this.close(drawer);
      }
    });
  }

  toggle(event) {
    if (event) {
      event.preventDefault();
    }
    if (this.drawerTarget.classList.contains("hidden")) {
      this.open();
    } else {
      this.close();
    }
  }

  open() {
    this.drawerTarget.classList.remove("hidden");
    this.loadContent();
  }

  close(event) {
    this.drawerTarget.classList.add("hidden");
  }

  async loadContent() {
    if (this.contentTarget.innerHTML.trim() === "") {
      this.contentTarget.innerHTML = '<i class="fa-regular fa-spinner mt-20 ml-5 animate-spin text-2xl"></i>';
      const url = this.contentTarget.dataset.url;
      const response = await fetch(url);
      if (response.ok) {
        const html = await response.text();
        this.contentTarget.innerHTML = html;
      } else {
        console.error("Failed to load content:", response.status);
      }
    }
  }
}