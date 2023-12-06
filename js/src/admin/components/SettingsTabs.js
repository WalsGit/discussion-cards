import Component from 'flarum/common/Component';
import Button from 'flarum/components/Button';
import Dropdown from 'flarum/components/Dropdown';

export default class SettingsTabs extends Component {
    view() {
        return (
            <div className="wdc-settings-tabs container">
                <div className="pull-right">
                    {Dropdown.component({
                        label: 'Tools',
                        icon: 'fas fa-cog',
                        buttonClassName: 'Button',
                        menuClassName: "Dropdown-menu--right",
                    }, [
                        Button.component({
                            className: 'Button',
                            onclick: () => m.route.set(app.route('Settings')),
                            icon: 'fas fa-cog',
                        }, 'General settings'),
                        Button.component({
                            className: 'Button',
                            onclick: () => m.route.set(app.route('TagsSettings')),
                            icon: 'fas fa-tags',
                        }, 'Tags custom settings')
                    ])}
                </div>

                <h2>Discussion Cards Settings Pages</h2>

                <div className="clear"/>
            </div>
        )
    }
}