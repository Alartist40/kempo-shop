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

## 2026-02-01 - UX: Synchronization and Race Condition Prevention

**Learning:** Small UX touches like syncing the `<html>` lang attribute and preventing race conditions in temporary UI feedback are critical for a polished feel. Restoring text from a centralized state (like `translations`) is safer than using a local `originalText` variable which can be corrupted by repeated interactions.

**Action:** I updated the language toggle to sync `document.documentElement.lang`, and used `clearTimeout` along with centralized translations to manage the "Cart" link feedback reliably even under rapid-click scenarios.

## 2026-02-02 - Accessibility: Skip-to-Content for Keyboard Navigation

**Learning:** Large navigation headers can be a major barrier for keyboard and screen reader users, forcing them to tab through many links before reaching the page's core content. A skip-to-content link is a simple but high-impact accessibility feature that provides a shortcut to the main information.

**Action:** I implemented a bilingual skip link as the first child of `<body>`. It is visually hidden until focused, and uses a JavaScript listener to programmatically move focus to the `#main-content` element (using `tabindex="-1"`) and provide a smooth scroll. This ensures the focus transition is reliable across all browsers.
