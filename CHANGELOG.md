# Changelog

## [1.0.0] - 2024-11-12
### Added
- NEW FEATURE : Setting a default image per tag
- NEW FEATURE : Setting custom number of primary card and card width per tag
- New migrations (tag settings)
- Client and server-side validation for the tags settings
TODO: figure out some validation for the extention settings page
TODO: fix changes in extention settings don't update in tags setting without page refresh
TODO: locale cleanup and FR translation
TODO: code cleanup
TODO: fix the app.data.settings... double allowedTags keys

### Fixed
- UploadImageButton now showing the uploaded image.
- gap between image preview and remove button in settings page due to UploadImageButton's empty <p><img></p>

### Changed
- Migration for the new tag default image (column name)
- Switched read/unread discussions' filter (now read are grayscaled and unread in full colors)

## [0.4.1] - 2024-10-21
### Fixed
- Settings object (updated keys and source)
- Replaced deprecated $.tooltip
- Cards not working on selected tags (only index page)

### Changed
- Admin Settings page form & text
- Settings keys (new names)
- Migration (first, general default settings)

## [0.4.0] - 2024-10-15
### Added
- Migrations: default image column to tags table
- Changelog.md

### Fixed
- Forum css

### Changed
- image stub (changed for a more neutral one)
- Reamde.md, License.md, namespace...