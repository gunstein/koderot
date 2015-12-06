 "use strict";
 (
   function() {
    let template = `
    <style>
      .red {
        fill: red; /* not background-color! */
      }
      
      .fancy {
        fill: none;
        stroke: black; /* similar to border-color */
        stroke-width: 3pt; /* similar to border-width */
        stroke-dasharray: 3,5,10;
      }    
    </style>
      <svg width="300" height="180">
        <circle cx="30"  cy="50" r="25" />
        <circle cx="90"  cy="50" r="25" class="red" />
        <circle cx="150" cy="50" r="25" class="fancy" />
      
        <rect x="10"  y="80" width="40" height="40"
          fill="steelBlue" />
        <rect x="70"  y="80" width="40" height="40"
          style="fill: steelBlue" />
        <rect x="130" y="80" width="40" height="40"
          class="fancy" />
      </svg>
    </div>
    `;
    class SVGDrawWidget extends HTMLElement {

        // Fires when an instance of the element is created.
        createdCallback() {
            this.createShadowRoot().innerHTML = template;
        };
        // Fires when an instance was inserted into the document.
        attachedCallback() {

        };
        // Fires when an attribute was added, removed, or updated.
        attributeChangedCallback(attrName, oldVal, newVal) {

        };
    }
    document.registerElement('svgdraw-widget', SVGDrawWidget);
})();