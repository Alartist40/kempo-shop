## 2024-07-22 - Accessibility: Restore Focus on Modal Close

**Learning:** For accessible modals, when a modal is closed, keyboard focus *must* be returned to the element that triggered it. Failing to do so creates a confusing and disruptive experience for keyboard and screen reader users, who have to navigate from the top of the page again to find their place.

**Action:** In `scripts/app.js`, I implemented this by:
1. Storing `document.activeElement` in a variable (`elementToFocusOnClose`) before the modal opens.
2. Using `elementToFocusOnClose?.focus()` in a unified `closeActiveModal()` function, which is triggered by the close button, overlay click, or the 'Escape' key. This ensures focus is always restored to the original trigger element, providing a seamless and accessible user experience.
