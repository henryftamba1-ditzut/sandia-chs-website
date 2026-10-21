# Sandia Community High School Website
## Maintenance and Release Checklist

Use this checklist whenever you maintain or update the website.

### 1. Before Development

- [ ] Open `SANDIA-WEBSITE-LIVE` in Visual Studio Code.
- [ ] Confirm the correct project folder is open.
- [ ] Check Git status with `git status`.
- [ ] If the working tree is clean, synchronize with GitHub using `git pull`.
- [ ] Review any existing changes before beginning new work.
- [ ] Confirm that a recent backup is available before significant changes.

### 2. During Development

- [ ] Make changes only in the designated working project.
- [ ] Work on one feature or issue at a time.
- [ ] Preserve existing branding, navigation, and working functionality.
- [ ] Keep mobile responsiveness and accessibility in mind.
- [ ] Avoid unnecessary changes to optimized assets.

### 3. Local Testing

- [ ] Launch the website using Live Server.
- [ ] Test the homepage and any affected pages.
- [ ] Test internal navigation links.
- [ ] Test the mobile menu at a narrow viewport.
- [ ] Test forms and other interactive features when affected.
- [ ] Check the browser console for relevant errors.
- [ ] Verify that images and styles load correctly.

### 4. Review and Commit

- [ ] Run `git status`.
- [ ] Review changes with `git diff`.
- [ ] Confirm that only intended files are modified.
- [ ] Stage only the intended files.
- [ ] Commit with a clear, descriptive message.

### 5. Publish

- [ ] Push the verified commit to the appropriate GitHub branch.
- [ ] Confirm that the push succeeds.
- [ ] Allow GitHub Pages to deploy the update.
- [ ] Open the live website and test the affected features.
- [ ] Check for broken links, missing images, or unexpected behavior.

### 6. Backup and Recovery

- [ ] Keep the working project separate from backup copies.
- [ ] Maintain a separate computer backup.
- [ ] Refresh the USB backup after significant successful milestones.
- [ ] Safely eject the USB drive after copying finishes.
- [ ] Keep at least one backup disconnected from the computer.
- [ ] Periodically verify that backup files can be opened.

### 7. Performance and Security

- [ ] Monitor mobile and desktop performance periodically.
- [ ] Review accessibility and SEO after substantial changes.
- [ ] Avoid exposing passwords, access tokens, or private configuration in the repository.
- [ ] Check external form services and email delivery when necessary.
- [ ] Keep school information accurate and current.

### Release Record

For each significant release, record:

- Date:
- Change summary:
- Commit ID:
- Local testing result:
- Live verification result:
- Backup completed: Yes / No

**Core principle:** Back up, review, test, commit, publish, and verify.