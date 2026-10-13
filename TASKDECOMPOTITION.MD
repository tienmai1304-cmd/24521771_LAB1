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