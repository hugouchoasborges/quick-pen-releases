# QuickPen 0.8.3

## Highlights

- Fix tool shortcut chord drift when modifier released or added mid-press
  - Resolves a user-facing reliability issue with immediate stability impact.
- Improve screenshot mask performance and fix selection size badge crash
  - Resolves a user-facing reliability issue with immediate stability impact.
- Add staged plan for performance and capture improvements
  - Adds a user-visible capability that expands release value.

## Included Commits

- Restyle update-available dialog to match Settings dark theme
- Fix background position/scale for Behind/Between layer modes under DPI
- Fix background mispositioning/scaling under >100% DPI
- Mark Stage 7 as partially complete in the plan
- Extract ScreenshotSelectionMath from ScreenshotToolController (Stage 7)
- Remove dead DXGI capture path and Vortice dependency (Stage 2: Track B)
- Remove dead empty diagnostic methods from ScreenCaptureService
- Record PNG encoder benchmark; deprioritize Stage 5
- Record PrintScreen-based shortcut chords reliably
- Ignore all shortcuts while the settings window is open
- Capture screenshot on ENTER via global confirm shortcut
- Revert ENTER-confirms-suggested-selection
- Confirm capture with ENTER on a suggested selection
- Stop blocking the UI thread on clipboard image copy
- Remove orphaned tests for deleted tracker feature
- Run OCR in-process via Windows.Media.Ocr
- Add staged plan for performance and capture improvements
- Fix OCR reliability for small captures and special characters
- Paste clipboard image as snapshot at cursor and fix shutdown crash
- Log unhandled exceptions to quickpen.log
- Improve screenshot mask performance and fix selection size badge crash
- Remove RadialLabelShortcut diagnostic logging
- Fix radial menu scale on per-monitor DPI mismatches
- Fix tool shortcut chord drift when modifier released or added mid-press
- chore: update QuickPen release submodule pointer for v0.8.2
