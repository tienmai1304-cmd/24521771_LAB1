# Task Decomposition

## T-01: Semantic DOM Architecture & A11y Contract

- Build semantic HTML landmark structure
- Do not use div elements
- Add accessible skip link
- Verify landmark tree using Chrome DevTools Accessibility

## Exercise 4: Resilient Component Architecture

### State Machine Contract

- **Loading:** Display CSS shimmer skeletons while data is being loaded.
- **Success:** Render the available project data as responsive cards using CSS Grid and metadata badges using Flexbox.
- **Empty:** Display an accessible message when the data source returns an empty list.
- **Error:** Display an accessible error message and a Retry button to attempt loading again.

### Data Contract

- Each project record contains a title, description, category, and technology tags.
- The component must handle loading, success, empty, and error states explicitly.
- Retry must trigger a new loading attempt.
- User-facing messages must be rendered safely without inserting untrusted data through innerHTML.
- Interactive controls must support keyboard navigation.

### Atomic Sub-Tasks

- **T-03A — Loading Skeleton:** Implement the pure CSS shimmer animation and skeleton elements.
- **T-03B — Live Data State:** Render project data with responsive Grid cards and Flexbox metadata badges.
- **T-03C — Empty and Error States:** Implement empty/error messages and an accessible retry control.

### Verification Contract

- Verify each state independently before integration.
- Verify that Retry can initiate another loading attempt.
- Verify keyboard accessibility and the absence of horizontal scrolling at a 375px viewport.
- Inspect git diff before committing each sub-task.
- Keep each sub-task in a separate atomic commit.

## Homework 1: Production Portfolio

### Scope

- Improve the existing developer portfolio without rebuilding completed exercises.
- Preserve the existing project structure, theme switcher, project rendering, and contact form.
- Use semantic HTML, modern CSS, and vanilla JavaScript.
- Verify each milestone independently before committing.

### M1: WCAG 2.2 AA Audit

- Inspect semantic landmarks and heading hierarchy.
- Verify the skip link points to the main content.
- Audit text and interactive-component color contrast.
- Verify accessible names and visible focus indicators.
- Test accessibility using browser DevTools.

Acceptance criteria:
- Landmark structure is understandable to assistive technology.
- Text contrast meets WCAG AA requirements where applicable.
- Keyboard focus is visible.
- No critical accessibility defects remain in the audited components.

Verification:
- Chrome DevTools Accessibility inspection.
- Keyboard navigation test.
- Contrast checking.

Commit:
fix(a11y): contrast & landmarks

### M2: Focus Trap Audit

- Test navigation using Tab and Shift+Tab.
- Test interactive elements using Enter and Space where applicable.
- Inspect focus order and ensure focused elements remain visible.
- Check for unintended keyboard focus traps.
- Correct focus-management defects if found.

Acceptance criteria:
- Interactive elements can be reached and operated using a keyboard.
- Focus order follows the page structure.
- No unintended keyboard traps exist.

Verification:
- Manual keyboard-only testing.
- Browser DevTools inspection.

Verification results:
- Tab navigation works normally.
- Shift+Tab navigation works normally.
- No keyboard focus trap was observed during manual testing.
- Record this as a completed keyboard audit; no focus-management defect was identified in the tested flow.

Commit:
fix(nav): keyboard trap prevention

### M3: Strict CSP and Inline Handler Removal

- Search HTML for inline event-handler attributes such as onclick.
- Register JavaScript events using addEventListener.
- Review inline scripts and styles before applying Content Security Policy.
- Configure an appropriate restrictive CSP.
- Verify that required JavaScript and styles continue to work.

Acceptance criteria:
- No inline event-handler attributes remain.
- CSP is configured and tested.
- No unexpected CSP violations occur.
- Existing portfolio functionality remains operational.

Verification:
- Source-code search.
- Browser Console inspection.
- Functional regression testing.

Suggested commit:
security(csp): enforce content security policy

### M4: Lighthouse Performance Audit

- Run Lighthouse against the portfolio served over a local HTTP server.
- Inspect performance opportunities and failed audits.
- Optimize images and other assets where necessary.
- Check image dimensions and layout stability.
- Re-run Lighthouse after changes.

Acceptance criteria:
- Lighthouse performance score reaches 100 under the recorded test conditions.
- No avoidable layout shifts remain.
- Optimizations do not break accessibility or functionality.

Verification:
- Lighthouse report.
- Browser Network and Performance panels.
- Responsive viewport testing.

Commit:
perf: optimize assets

### Final Verification

- Verify all four milestones independently.
- Inspect git diff before every commit.
- Keep milestone commits separate.
- Test the portfolio at a 375px viewport.
- Test keyboard navigation and theme switching.
- Check the browser Console for errors.
- Confirm all required changes are committed and pushed.