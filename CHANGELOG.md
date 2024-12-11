# Changelog

## [1.2.0] - 2024-12-11
### Added
- NEW option to show the number of replies on the right side of a card's title (like the default Flarum design) instead of on the image.
- NEW option to show the last post informations on the cards (like the default Flarum design): username & date of last post.
- New migration file for the aforementioned new options.

### Changed
- The way read cards are marked (removed B&W filter): now read cards' title and text have a lighter font weight (like the default Flarum discussion list behavior)

## [1.1.1] - 2024-11-25
### Fixed
- French translation bug

## [1.1.0] - 2024-11-22
### Added
- NEW FEATURE: Support for `v17development/flarum-blog` extension
- NEW Option to chose to use the blog's images (post featured image and blog default's image) for blog post cards
- NEW Option to chose to use blog posts' summary as preview text for blog post cards
- A donation link

### Changed
- Options for 3rd party extensions will only be enabled if said extensions are installed and activated.
- Text & description associated with 3rd party extensions options

### Fixed
- Views won't throw error when `show views` option is activated but the relevant extension isn't installed and activated.

## [1.0.4] - 2024-11-16
### Added
- Support & discuss URLs

## [1.0.3] - 2024-11-15
### Changed
- Removed old funding.yml

## [1.0.2] - 2024-11-15
### Changed
- Renaming the extension to Flarum Discussion Cards

## [1.0.1] - 2024-11-15
### Fixed
- French translation bug (removed extra quote)

## [1.0.0] - 2024-11-15
### Added
- NEW FEATURE : Setting a default image per tag
- NEW FEATURE : Setting custom number of primary cards and custom cards width per tag
- NEW on Index page (all discussions) shows default card images based on tags of discussion (based on tag priority)
- NEW migrations (tag settings)
- Client and server-side validation for the tags settings
- Some validation for the general extension settings
- French translation
- Changelog.md

### Changed
- Admin Settings page form & text
- Image stub (changed it for a more neutral one with the Flarum logo)
- Migrations (with new settings keys and added new tag settings)
- Switched read/unread discussions' filter (now read are grayscaled and unread are in full colors)
- Reamde.md, License.md, namespace...
- Removed Russian translation

### Fixed
- Replaced deprecated $.tooltip
- UploadImageButton now showing the uploaded image (created a new custom component).
