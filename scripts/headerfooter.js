// Define a custom HTML element for the dynamic header
class DynHeader extends HTMLElement {
    // Called when the element is added to the DOM
    async connectedCallback() {
      // Fetch the header content from the server
      const response = await fetch("/elements/header.html");
      if (response.ok) {
        // If the fetch is successful, set the inner HTML of the element
        const headerContent = await response.text();
        this.innerHTML = headerContent;
        // Set the 'loading' attribute to 'lazy' for all images in the header
        this.querySelectorAll("img").forEach((img) => {
          img.setAttribute("loading", "lazy");
        });
      } else {
        // Log an error if the fetch fails
        console.error("Failed to load header:", response.statusText);
      }
    }
  }
  
  // Define a custom HTML element for the dynamic footer
  class DynFooter extends HTMLElement {
    // Called when the element is added to the DOM
    async connectedCallback() {
      // Fetch the footer content from the server
      const response = await fetch("/elements/footer.html");
      if (response.ok) {
        // If the fetch is successful, set the inner HTML of the element
        const footerContent = await response.text();
        this.innerHTML = footerContent;
        // Set the 'loading' attribute to 'lazy' for all images in the footer
        this.querySelectorAll("img").forEach((img) => {
          img.setAttribute("loading", "lazy");
        });
      } else {
        // Log an error if the fetch fails
        console.error("Failed to load footer:", response.statusText);
      }
    }
  }
  
  // Register the custom elements with the browser
  customElements.define("dyn-header", DynHeader);
  customElements.define("dyn-footer", DynFooter);
  