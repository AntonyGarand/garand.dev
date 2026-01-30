# Portfolio Template Cleanup: Remove Erland References

## TL;DR

> **Quick Summary**: Clean up all Erland references from the Case portfolio theme template and personalize it for Antony Garand (garand.dev, GitHub: AntonyGarand).
>
> **Deliverables**:
>
> - Update 12 text references (LICENSE, documentation, package.json, testimonials)
> - Delete all 42 sample content files (projects, decisions, journey, writing, speaking, uses, testimonials)
> - Delete 3 binary image files (og-image.png, screenshots/\*.webp)
> - Update LICENSE with dual copyright attribution
>
> **Estimated Effort**: Quick
> **Parallel Execution**: YES - Most file operations can run in parallel
> **Critical Path**: N/A - Tasks are mostly independent

---

## Context

### Original Request

User wants to use the Erland Case portfolio theme as a template for a new personal portfolio. Need to identify and clean up all references to "Erland" and replace with personal information:

- Website: garand.dev
- GitHub: AntonyGarand
- Email: packagejson@garand.dev

### Interview Summary

**Key Discussions**:

- Delete all 42 sample content files completely (not keep as templates)
- Update LICENSE: Keep original copyright + add new line with Antony's copyright
- Package.json: Update all 3 fields (author, repository.url, homepage)
- Binary images: Delete now (not placeholders or manual action)
- Build verification: Skip - no build test requested

**Research Findings**:

- Found 12 meaningful "Erland" references across LICENSE, documentation, package.json, and testimonials
- Found 3 binary files containing Erland's branding (og-image.png, 2 screenshots)
- Found 42 sample content files across 7 collections
- 2 testimonial references ARE in the 42 sample files (will be deleted)
- No additional Erland references in theme component code (only false positive: "Netherlands" in TalkCard.astro)
- No test infrastructure exists in this project

### Metis Review

**Identified Gaps** (addressed):

- Guardrails: Explicitly forbid creating new content, refactoring, or UI changes
- Verification: Document file deletion counts and grep verification
- Binary files: User chose deletion, not placeholder or manual action
- Package.json scope: User confirmed all 3 fields update
- Testimonials: Verified they are in sample files to be deleted

---

## Work Objectives

### Core Objective

Remove all Erland references from the Case portfolio theme and prepare it for personalization by Antony Garand.

### Concrete Deliverables

- Updated LICENSE with dual copyright
- Updated package.json with Antony's author info, repo URL, and homepage
- Updated documentation files with garand.dev URLs
- Deleted all 42 sample content files
- Deleted 3 binary image files

### Definition of Done

- All Erland references removed from text files (except original LICENSE line)
- All sample content files deleted
- All binary image files deleted
- File verification commands confirm changes

### Must Have

- Update LICENSE with dual copyright attribution
- Update all 3 package.json fields (author, repository.url, homepage)
- Delete 42 sample content files
- Delete 3 binary image files
- Update 5 documentation files with garand.dev URLs

### Must NOT Have (Guardrails)

- MUST NOT create any new sample content to replace deleted files
- MUST NOT refactor code structure or change file organization
- MUST NOT modify styling, colors, fonts, or UI components
- MUST NOT add new features or functionality
- MUST NOT attempt to programmatically modify binary files (delete only)
- MUST NOT run build verification (user skipped this)

---

## Verification Strategy (MANDATORY)

### Test Decision

- **Infrastructure exists**: NO
- **User wants tests**: NO (Minimal verification only)
- **Framework**: None

### Minimal Verification (FILE CHECKS ONLY)

> **CRITICAL PRINCIPLE: ZERO USER INTERVENTION**
>
> **NEVER** create acceptance criteria that require:
>
> - "User manually tests..." / "사용자가 직접 테스트..."
> - "User visually confirms..." / "사용자가 눈으로 확인..."
> - "User interacts with..." / "사용자가 직접 조작..."
> - "Ask user to verify..." / "사용자에게 확인 요청..."
> - ANY step that requires a human to perform an action
>
> **ALL verification MUST be automated and executable by the agent.**
> If a verification cannot be automated, find an automated alternative or explicitly note it as a known limitation.

Each TODO includes EXECUTABLE verification procedures that agents can run directly:

**By Task Type:**

| Type                     | Verification Tool | Automated Procedure                                              |
| ------------------------ | ----------------- | ---------------------------------------------------------------- |
| **Text File Update**     | Bash grep         | Agent reads file, verifies specific strings present/absent       |
| **File Deletion**        | Bash find/wc      | Agent counts files before/after, confirms deletion               |
| **LICENSE Modification** | Bash head         | Agent reads first N lines, verifies both copyright lines present |
| **Image Deletion**       | Bash ls           | Agent checks file existence, confirms deletion                   |

**Evidence Requirements (Agent-Executable):**

- Command output captured and compared against expected patterns
- Exit codes checked (0 = success)
- File counts verified with `wc -l` or `find | wc -l`

---

## Execution Strategy

### Parallel Execution Waves

> Most file operations are independent and can run in parallel.
> Only LICENSE modification depends on reading original content first.

```
Wave 1 (Start Immediately):
├── Task 1: Update package.json (author, repo, homepage)
├── Task 2: Update README.md (demo URL)
├── Task 3: Update installation.md (template commands)
├── Task 4: Update troubleshooting.md (GitHub issues URL)
└── Task 5: Delete all 42 sample content files

Wave 2 (After Wave 1):
├── Task 6: Delete 3 binary image files
├── Task 7: Update LICENSE with dual copyright

Critical Path: None (tasks mostly independent)
Parallel Speedup: ~70% faster than sequential
```

### Dependency Matrix

| Task | Depends On | Blocks | Can Parallelize With |
| ---- | ---------- | ------ | -------------------- |
| 1    | None       | None   | 2, 3, 4, 5           |
| 2    | None       | None   | 1, 3, 4, 5           |
| 3    | None       | None   | 1, 2, 4, 5           |
| 4    | None       | None   | 1, 2, 3, 5           |
| 5    | None       | None   | 1, 2, 3, 4           |
| 6    | None       | None   | 1, 2, 3, 4, 5, 7     |
| 7    | None       | None   | 1, 2, 3, 4, 5, 6     |

### Agent Dispatch Summary

| Wave | Tasks         | Recommended Agents                                                      |
| ---- | ------------- | ----------------------------------------------------------------------- |
| 1    | 1, 2, 3, 4, 5 | delegate_task(category="quick", load_skills=[], run_in_background=true) |
| 2    | 6, 7          | dispatch parallel after Wave 1 completes                                |

---

## TODOs

> Implementation + Verification = ONE Task. Never separate.
> EVERY task MUST have: Recommended Agent Profile + Parallelization info.

- [ ] 1. Update package.json with Antony's information

  **What to do**:
  - Update `author` field: Change `"Erland <hello@erland.me>"` to `"Antony Garand <packagejson@garand.dev>"`
  - Update `repository.url` field: Change `"https://github.com/erlandv/case.git"` to `"https://github.com/AntonyGarand/portfolio.git"`
  - Update `homepage` field: Change `"https://case.erland.me"` to `"https://garand.dev"`

  **Must NOT do**:
  - Do NOT modify any other fields in package.json (name, description, keywords, etc.)
  - Do NOT change dependencies or devDependencies
  - Do NOT modify scripts (dev, build, preview, astro)

  **Recommended Agent Profile**:

  > Select category + skills based on task domain. Justify each choice.
  - **Category**: `quick`
    - Reason: Single file text replacement with 3 distinct edits. Simple, well-defined task.
  - **Skills**: `[]`
    - No specialized skills needed - file editing and basic grep verification sufficient.
  - **Skills Evaluated but Omitted**:
    - `git-master`: Not needed - no git operations required.
    - `playwright`: Not needed - no browser interaction required.

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 2, 3, 4, 5)
  - **Blocks**: None
  - **Blocked By**: None (can start immediately)

  **References** (CRITICAL - Be Exhaustive):

  > The executor has NO context from your interview. References are their ONLY guide.
  > Each reference must answer: "What should I look at and WHY?"

  **Pattern References** (existing code to follow):
  - `package.json` lines 13-18 - Current Erland references that need replacement

  **API/Type References** (contracts to implement against):
  - None - package.json follows standard npm format

  **Test References** (testing patterns to follow):
  - None - no test infrastructure in project

  **Documentation References** (specs and requirements):
  - Interview decision: Update all 3 fields (author, repository.url, homepage)
  - Interview decision: Email = packagejson@garand.dev, GitHub = AntonyGarand, Website = garand.dev

  **External References** (libraries and frameworks):
  - npm package.json specification: https://docs.npmjs.com/cli/v9/configuring-npm/package-json

  **WHY Each Reference Matters** (explain the relevance):
  - `package.json`: This is the single file to edit. All changes are replacements of existing values.

  **Acceptance Criteria**:

  > **CRITICAL: AGENT-EXECUTABLE VERIFICATION ONLY**

  **Automated Verification (file content checks):**

  ```bash
  # Verify author updated
  grep -E '"Antony Garand <packagejson@garand\.dev>"' package.json
  # Assert: Returns 1 result (line 13)

  # Verify repository URL updated
  grep -E '"https://github\.com/AntonyGarand/portfolio\.git"' package.json
  # Assert: Returns 1 result (line 16)

  # Verify homepage updated
  grep -E '"https://garand\.dev"' package.json
  # Assert: Returns 1 result (line 18)

  # Verify no Erland email remains in package.json
  grep "hello@erland.me" package.json
  # Assert: Returns 0 results

  # Verify no case.erland.me remains in package.json
  grep "case.erland.me" package.json
  # Assert: Returns 0 results
  ```

  **Evidence to Capture**:
  - [ ] Grep output confirming Antony Garand email present
  - [ ] Grep output confirming AntonyGarand repo URL present
  - [ ] Grep output confirming garand.dev homepage present
  - [ ] Grep output confirming no Erland references remain

  **Commit**: NO (group with other tasks)
  - Message: (will be grouped with all cleanup tasks)
  - Files: package.json
  - Pre-commit: none

- [ ] 2. Update README.md demo URL

  **What to do**:
  - Find line 18 (or search for case.erland.me in markdown badge)
  - Replace `https://case.erland.me` with `https://garand.dev`
  - Preserve markdown link syntax: `[![View Demo](...)](URL)`

  **Must NOT do**:
  - Do NOT modify any other content in README.md
  - Do NOT remove or modify the markdown badge itself
  - Do NOT change the "Built with Astro" or license badges

  **Recommended Agent Profile**:

  > Select category + skills based on task domain. Justify each choice.
  - **Category**: `quick`
    - Reason: Single file single replacement. Straightforward text substitution.
  - **Skills**: `[]`
    - No specialized skills needed - grep and sed/ed sufficient.

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 3, 4, 5)
  - **Blocks**: None
  - **Blocked By**: None (can start immediately)

  **References** (CRITICAL - Be Exhaustive):

  **Pattern References** (existing code to follow):
  - `README.md` line 18 - Demo badge link with case.erland.me

  **WHY Each Reference Matters** (explain the relevance):
  - `README.md` line 18: This is the single line to update. Only change the URL, preserve markdown badge structure.

  **Acceptance Criteria**:

  > **CRITICAL: AGENT-EXECUTABLE VERIFICATION ONLY**

  **Automated Verification (file content checks):**

  ```bash
  # Verify garand.dev present in README.md
  grep "garand.dev" README.md
  # Assert: Returns 1+ results

  # Verify case.erland.me NOT present in README.md
  grep "case.erland.me" README.md
  # Assert: Returns 0 results

  # Verify markdown badge syntax preserved
  grep -E '\[!\[View Demo\]' README.md
  # Assert: Returns 1 result (badge link structure intact)
  ```

  **Evidence to Capture**:
  - [ ] Grep output confirming garand.dev present
  - [ ] Grep output confirming case.erland.me absent
  - [ ] Grep output confirming badge structure intact

  **Commit**: NO (group with other tasks)
  - Message: (will be grouped with all cleanup tasks)
  - Files: README.md
  - Pre-commit: none

- [ ] 3. Update docs/01-getting-started/installation.md template commands

  **What to do**:
  - Update line 15: Replace `npm create astro@latest -- --template erlandv/case` with `npm create astro@latest -- --template AntonyGarand/portfolio`
  - Update line 35: Replace git clone URL from `https://github.com/erlandv/case.git` to `https://github.com/AntonyGarand/portfolio.git`

  **Must NOT do**:
  - Do NOT modify any other content in installation.md
  - Do NOT change any other commands or documentation text

  **Recommended Agent Profile**:

  > Select category + skills based on task domain. Justify each choice.
  - **Category**: `quick`
    - Reason: Single file with 2 text replacements. Well-defined edits.
  - **Skills**: `[]`
    - No specialized skills needed - grep and sed/ed sufficient.

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 2, 4, 5)
  - **Blocks**: None
  - **Blocked By**: None (can start immediately)

  **References** (CRITICAL - Be Exhaustive):

  **Pattern References** (existing code to follow):
  - `docs/01-getting-started/installation.md` line 15 - npm template command with erlandv/case
  - `docs/01-getting-started/installation.md` line 35 - git clone URL

  **WHY Each Reference Matters** (explain the relevance):
  - `docs/01-getting-started/installation.md`: These 2 specific lines need Erland references replaced with Antony's repo.

  **Acceptance Criteria**:

  > **CRITICAL: AGENT-EXECUTABLE VERIFICATION ONLY**

  **Automated Verification (file content checks):**

  ```bash
  # Verify AntonyGarand/portfolio in npm command
  grep "AntonyGarand/portfolio" docs/01-getting-started/installation.md
  # Assert: Returns 1+ results

  # Verify AntonyGarand repo URL in git clone command
  grep "github.com/AntonyGarand/portfolio" docs/01-getting-started/installation.md
  # Assert: Returns 1+ results

  # Verify erlandv/case NOT present
  grep "erlandv/case" docs/01-getting-started/installation.md
  # Assert: Returns 0 results

  # Verify github.com/erlandv/case NOT present
  grep "github.com/erlandv/case" docs/01-getting-started/installation.md
  # Assert: Returns 0 results
  ```

  **Evidence to Capture**:
  - [ ] Grep output confirming AntonyGarand references present
  - [ ] Grep output confirming erlandv/case absent

  **Commit**: NO (group with other tasks)
  - Message: (will be grouped with all cleanup tasks)
  - Files: docs/01-getting-started/installation.md
  - Pre-commit: none

- [ ] 4. Update docs/06-reference/troubleshooting.md GitHub issues URL

  **What to do**:
  - Update line 162: Replace GitHub issues link from `https://github.com/erlandv/case/issues` to `https://github.com/AntonyGarand/portfolio/issues`
  - Preserve markdown link syntax: `[GitHub](URL)`

  **Must NOT do**:
  - Do NOT modify any other content in troubleshooting.md
  - Do NOT remove or modify the link text itself

  **Recommended Agent Profile**:

  > Select category + skills based on task domain. Justify each choice.
  - **Category**: `quick`
    - Reason: Single file single replacement. Simple URL substitution.
  - **Skills**: `[]`
    - No specialized skills needed - grep and sed/ed sufficient.

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 2, 3, 5)
  - **Blocks**: None
  - **Blocked By**: None (can start immediately)

  **References** (CRITICAL - Be Exhaustive):

  **Pattern References** (existing code to follow):
  - `docs/06-reference/troubleshooting.md` line 162 - GitHub issues link

  **WHY Each Reference Matters** (explain the relevance):
  - `docs/06-reference/troubleshooting.md` line 162: This is the single line to update. Only change the URL.

  **Acceptance Criteria**:

  > **CRITICAL: AGENT-EXECUTABLE VERIFICATION ONLY**

  **Automated Verification (file content checks):**

  ```bash
  # Verify AntonyGarand repo issues link present
  grep "github.com/AntonyGarand/portfolio/issues" docs/06-reference/troubleshooting.md
  # Assert: Returns 1 result

  # Verify erlandv/case/issues NOT present
  grep "github.com/erlandv/case/issues" docs/06-reference/troubleshooting.md
  # Assert: Returns 0 results
  ```

  **Evidence to Capture**:
  - [ ] Grep output confirming AntonyGarand issues link present
  - [ ] Grep output confirming erlandv/case/issues absent

  **Commit**: NO (group with other tasks)
  - Message: (will be grouped with all cleanup tasks)
  - Files: docs/06-reference/troubleshooting.md
  - Pre-commit: none

- [ ] 5. Delete all 42 sample content files

  **What to do**:
  - Delete all MDX files in `src/content/projects/` directory (8 files)
  - Delete all MDX files in `src/content/decisions/` directory (6 files)
  - Delete all MDX files in `src/content/journey/` directory (9 files)
  - Delete all MDX files in `src/content/writing/` directory (10 files)
  - Delete all MDX files in `src/content/speaking/` directory (7 files)
  - Delete all MDX files in `src/content/uses/` directory (1 file)
  - Delete all MDX files in `src/content/testimonials/` directory (2 files)

  **Must NOT do**:
  - Do NOT delete any directories themselves
  - Do NOT delete any configuration files (\*.config.ts, etc.)
  - Do NOT delete index.ts or similar import files
  - Do NOT create ANY new content files to replace deleted ones

  **Recommended Agent Profile**:

  > Select category + skills based on task domain. Justify each choice.
  - **Category**: `quick`
    - Reason: Bulk file deletion across multiple directories. Straightforward filesystem operations.
  - **Skills**: `[]`
    - No specialized skills needed - find, rm, and wc sufficient.

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 2, 3, 4)
  - **Blocks**: None
  - **Blocked By**: None (can start immediately)

  **References** (CRITICAL - Be Exhaustive):

  **Pattern References** (existing code to follow):
  - `src/content/` directory structure - 7 subdirectories with sample MDX files

  **WHY Each Reference Matters** (explain the relevance):
  - `src/content/`: These 7 directories contain the sample files to delete. Delete only \*.mdx files, preserve directories.

  **Acceptance Criteria**:

  > **CRITICAL: AGENT-EXECUTABLE VERIFICATION ONLY**

  **Automated Verification (file counts):**

  ```bash
  # Count remaining MDX files in src/content/ (should be 0)
  find src/content -name "*.mdx" -type f 2>/dev/null | wc -l
  # Assert: Returns 0 (all sample MDX files deleted)

  # Verify directories still exist
  ls -d src/content/{projects,decisions,journey,writing,speaking,uses,testimonials} 2>/dev/null | wc -l
  # Assert: Returns 7 (all directories preserved)

  # Verify no Erland references remain in content files (except LICENSE)
  grep -r "Erland" src/content/ 2>/dev/null | grep -v LICENSE
  # Assert: Returns 0 results
  ```

  **Evidence to Capture**:
  - [ ] Find output showing 0 MDX files remaining
  - [ ] Ls output showing all 7 directories preserved
  - [ ] Grep output confirming no Erland references in content

  **Commit**: NO (group with other tasks)
  - Message: (will be grouped with all cleanup tasks)
  - Files: 42 MDX files (deleted)
  - Pre-commit: none

- [ ] 6. Delete 3 binary image files

  **What to do**:
  - Delete `public/og-image.png` (1200x630 Open Graph image)
  - Delete `screenshots/dark-mode.webp` (dark mode screenshot)
  - Delete `screenshots/light-mode.webp` (light mode screenshot)

  **Must NOT do**:
  - Do NOT create placeholder images
  - Do NOT attempt to modify these files programmatically
  - Do NOT delete any other files in public/ or screenshots/

  **Recommended Agent Profile**:

  > Select category + skills based on task domain. Justify each choice.
  - **Category**: `quick`
    - Reason: 3 specific file deletions. Simple filesystem operations.
  - **Skills**: `[]`
    - No specialized skills needed - rm and ls sufficient.

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Task 7)
  - **Blocks**: None
  - **Blocked By**: None (can start immediately)

  **References** (CRITICAL - Be Exhaustive):

  **Pattern References** (existing code to follow):
  - `public/og-image.png` - Open Graph social sharing image
  - `screenshots/dark-mode.webp` - Dark mode portfolio screenshot
  - `screenshots/light-mode.webp` - Light mode portfolio screenshot

  **WHY Each Reference Matters** (explain the relevance):
  - These 3 specific files contain Erland's branding and need to be deleted.

  **Acceptance Criteria**:

  > **CRITICAL: AGENT-EXECUTABLE VERIFICATION ONLY**

  **Automated Verification (file existence checks):**

  ```bash
  # Verify og-image.png deleted
  ls public/og-image.png 2>&1
  # Assert: Returns "No such file or directory"

  # Verify dark-mode.webp deleted
  ls screenshots/dark-mode.webp 2>&1
  # Assert: Returns "No such file or directory"

  # Verify light-mode.webp deleted
  ls screenshots/light-mode.webp 2>&1
  # Assert: Returns "No such file or directory"
  ```

  **Evidence to Capture**:
  - [ ] Ls output confirming og-image.png deleted
  - [ ] Ls output confirming dark-mode.webp deleted
  - [ ] Ls output confirming light-mode.webp deleted

  **Commit**: NO (group with other tasks)
  - Message: (will be grouped with all cleanup tasks)
  - Files: public/og-image.png, screenshots/dark-mode.webp, screenshots/light-mode.webp (deleted)
  - Pre-commit: none

- [ ] 7. Update LICENSE with dual copyright

  **What to do**:
  - Read current LICENSE file content
  - Add new line after existing copyright: `Copyright (c) 2026 Antony Garand`
  - Preserve original copyright line: `Copyright (c) 2025 Erland`
  - Maintain MIT license text below

  **Must NOT do**:
  - Do NOT remove or modify the original Erland copyright line
  - Do NOT change the MIT license text
  - Do NOT modify any other content in LICENSE

  **Recommended Agent Profile**:

  > Select category + skills based on task domain. Justify each choice.
  - **Category**: `quick`
    - Reason: Single file with single line addition. Read and append operation.
  - **Skills**: `[]`
    - No specialized skills needed - read, ed/sed, and head sufficient.

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Task 6)
  - **Blocks**: None
  - **Blocked By**: None (can start immediately)

  **References** (CRITICAL - Be Exhaustive):

  **Pattern References** (existing code to follow):
  - `LICENSE` line 3 - Original copyright line with Erland
  - MIT License format - Standard dual copyright attribution pattern

  **WHY Each Reference Matters** (explain the relevance):
  - `LICENSE` line 3: This is where to add the new copyright line. Preserve original, add new line after.

  **Acceptance Criteria**:

  > **CRITICAL: AGENT-EXECUTABLE VERIFICATION ONLY**

  **Automated Verification (file content checks):**

  ```bash
  # Verify original Erland copyright still present
  head -5 LICENSE | grep "Copyright (c) 2025 Erland"
  # Assert: Returns 1 result (line 3)

  # Verify new Antony Garand copyright present
  head -10 LICENSE | grep "Copyright (c) 2026 Antony Garand"
  # Assert: Returns 1 result (new line added)

  # Verify both copyrights present in first 10 lines
  head -10 LICENSE | grep -c "Copyright"
  # Assert: Returns 2 (both copyright lines present)
  ```

  **Evidence to Capture**:
  - [ ] Grep output confirming Erland copyright preserved
  - [ ] Grep output confirming Antony Garand copyright added
  - [ ] Grep output confirming 2 copyright lines present

  **Commit**: NO (group with other tasks)
  - Message: (will be grouped with all cleanup tasks)
  - Files: LICENSE
  - Pre-commit: none

---

## Commit Strategy

| After Task | Message                                                            | Files                                                                                                           | Verification               |
| ---------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- | -------------------------- |
| All        | `chore: personalize portfolio template - remove Erland references` | package.json, README.md, docs/01-getting-started/installation.md, docs/06-reference/troubleshooting.md, LICENSE | grep verification commands |

**Note**: All tasks should be committed together as a single "chore" commit since they represent one cohesive cleanup effort.

---

## Success Criteria

### Verification Commands

```bash
# Verify no Erland references (except original LICENSE line)
grep -r "Erland" --exclude-dir=node_modules --exclude-dir=.git --binary-files=without-match | grep -v LICENSE

# Verify Antony Garand references present
grep -r "Antony Garand" --exclude-dir=node_modules --exclude-dir=.git | wc -l

# Verify garand.dev present
grep -r "garand.dev" --exclude-dir=node_modules --exclude-dir=.git | wc -l

# Verify AntonyGarand GitHub present
grep -r "AntonyGarand" --exclude-dir=node_modules --exclude-dir=.git | wc -l

# Verify no sample content files remain
find src/content -name "*.mdx" -type f 2>/dev/null | wc -l

# Verify binary files deleted
ls public/og-image.png screenshots/*.webp 2>&1

# Verify dual copyright in LICENSE
head -10 LICENSE | grep "Copyright"
```

### Final Checklist

- [ ] All "Must Have" present
- [ ] All "Must NOT Have" absent
- [ ] All 42 sample content files deleted
- [ ] All 3 binary image files deleted
- [ ] All Erland text references removed (except original LICENSE line)
- [ ] LICENSE contains dual copyright
- [ ] package.json updated with Antony's info
- [ ] All documentation URLs updated to garand.dev
