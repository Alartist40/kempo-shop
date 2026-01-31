## 2024-07-22 - Accessibility: Restore Focus on Modal Close

**Learning:** For accessible modals, when a modal is closed, keyboard focus *must* be returned to the element that triggered it. Failing to do so creates a confusing and disruptive experience for keyboard and screen reader users, who have to navigate from the top of the page again to find their place.

**Action:** In `scripts/app.js`, I implemented this by:
1. Storing `document.activeElement` in a variable (`elementToFocusOnClose`) before the modal opens.
2. Using `elementToFocusOnClose?.focus()` in a unified `closeActiveModal()` function, which is triggered by the close button, overlay click, or the 'Escape' key. This ensures focus is always restored to the original trigger element, providing a seamless and accessible user experience.

## 2024-07-23 - Accessibility: Focus Management when Opening Modals

**Learning:** Managing focus *into* a modal is just as important as restoring it. When a modal opens, focus should immediately move to a primary interactive element (like the close button or the first input). This prevents keyboard focus from being "lost" in the background page, which is still active in the DOM but hidden from view.

**Action:** In `scripts/app.js`, I updated all modal-opening event listeners to call `.focus()` on the modal's `.close-modal` button after the modal is activated. Combined with the previously implemented focus restoration, this creates a complete "focus trap" cycle that keeps users oriented.

## 2026-01-31 - Accessibility: ARIA Live Regions for Non-Disruptive Feedback

**Learning:** When replacing intrusive alerts with inline feedback (like button text changes), screen reader users may miss the update because focus doesn't automatically shift. A hidden ARIA live region (`aria-live="polite"`) is essential to announce these changes without disrupting the user's flow.

**Action:** I added a hidden `div` with `aria-live="polite"` to `index.html` and updated it whenever the "Add to Cart" button feedback was triggered. This ensured both visual and auditory confirmation of the action.
