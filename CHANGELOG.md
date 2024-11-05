# Changelog

## [1.0.0] - 2024-11-05
### Fixed
- UploadImageButton now showing the uploaded image.
- gap between image preview and remove button in settings page due to UploadImageButton's empty <p><img></p>


### Added
- NEW FEATURE : Setting a default image per tag
- New migrations
TODO: handle the default tag setting on load of the tag edit modal (if null, get the general settings from app)
TODO: add the fields and button in the WdcTagSettingsModal & handle the upload with new class

### Changed
- Migration for the new tag default image (column name)

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