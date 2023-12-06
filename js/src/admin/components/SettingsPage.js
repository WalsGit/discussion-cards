import ExtensionPage from 'flarum/components/ExtensionPage';
import TagsSettings from './TagsSettings';
import Button from 'flarum/components/Button';

export default class SettingsPage extends ExtensionPage {
  content() {
    const page = m.route.param().page || 'health'; // remplacer Health par settings
    
    return (
      <div className="ExtensionPage-settings walsgit-discussion-cards">
        <div className={"wdc-menu"}>
          <div className={"container"}>
            {this.menuButtons(page)}
          </div>
        </div>

        <div className="container wdc-container">
          {this.pageContent(page)}
        </div>
      </div>
    );
  }

  // Return button menus
  menuButtons(page) {
    return [
      Button.component({
        className: `Button ${page === 'settings' ? 'item-selected' : ''}`,
        onclick: () => m.route.set(
          app.route('extension', {
            id: 'wdc-btn',
            page: 'settings'
          })
        ),
        icon: 'fas fa-cog',
      }, 'General settings'),
      Button.component({
        className: `Button ${page === 'tagssettings' ? 'item-selected' : ''}`,
        onclick: () => m.route.set(
          app.route('extension', {
            id: 'wdc-btn',
            page: 'tagssettings'
          })
        ),
        icon: 'fas fa-tags',
      }, 'Tags custom settings')
    ];
  }


  pageContent(page) {
    if(page === "tagssettings") {
      return <TagsSettings />
    }

    // Default Settings
    return <Settings />
  }
}