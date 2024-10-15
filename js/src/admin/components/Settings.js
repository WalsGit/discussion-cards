import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import app from 'flarum/app';
import Button from 'flarum/common/components/Button';
import saveSettings from 'flarum/admin/utils/saveSettings';
import Switch from 'flarum/common/components/Switch';
import icon from 'flarum/common/helpers/icon';
import UploadImageButton from 'flarum/admin/components/UploadImageButton';
import SwitchTagList from './switchTagList';
import LoadingModal from 'flarum/admin/components/LoadingModal';



export default class Settings extends ExtensionPage {

  oninit(vnode) {
    super.oninit(vnode);
    this.settings = JSON.parse(app.data.settings.walsgit_discussion_cards || null);
  }

  content() {

    if (!this.settings) {
      return m('.ExtensionPage-settings', [
        m('.container', {
            style: {color: 'red', fontWeight: 'bold'}
          },
          icon('fas fa-exclamation-triangle', {style: {fontSize: '24px', marginRight: '10px'}}),
          app.translator.trans('walsgit.admin.settings.settings_error'))
      ]);
    }

    const settings = this.settings;
    app.forum.data.attributes.walsgit_discussion_cards_default_imageUrl =
      app.forum.attribute("baseUrl") + "/assets/" +
      app.data.settings.walsgit_discussion_cards_default_image_path;

    return [
      m('.ExtensionPage-settings', [
        m('.container', [
          m('Form', {
            onsubmit: this.onsubmit.bind(this),
          }, [
            m('.Form-group', [
              m('label', app.translator.trans('walsgit.admin.settings.default_img')),
              m(UploadImageButton, {name: "walsgit_discussion_cards_default_image"}),
            ]),
            m('.Form-group', [
              m(Switch, {
                  state: settings.previewText || false,
                  onchange: () => {
                    settings.previewText ^= true
                  },
                }, app.translator.trans('walsgit.admin.settings.preview_text')
              ),
            ]),
            m('.Form-group', [
              m(Switch, {
                  state: settings.cardBadges || false,
                  onchange: () => {
                    settings.cardBadges ^= true
                  },
                },
                app.translator.trans('walsgit.admin.settings.badges')
              ),
            ]),
            m('.Form-group', [
              m(Switch, {
                  state: settings.cardFooter,
                  onchange: () => {
                    settings.cardFooter ^= true
                  },
                }, app.translator.trans('walsgit.admin.settings.actor_info')
              ),
            ]),
            m('.Form-group', [
              m(Switch, {
                  state: settings.Replies,
                  onchange: () => {
                    settings.Replies ^= true
                  },
                }, app.translator.trans('walsgit.admin.settings.show_replies')
              ),
            ]),
            m('.Form-group', [
              m(Switch, {
                  state: settings.onIndexPage,
                  onchange: () => {
                    settings.onIndexPage ^= true
                  },
                }, app.translator.trans('walsgit.admin.settings.output_on_index_page')
              ),
            ]),
            m('.Form-group', [
              m(Switch, {
                  state: settings.Views,
                  onchange: () => {
                    settings.Views ^= true
                  },
                }, app.translator.trans('walsgit.admin.settings.show_views')
              ),
            ]),
            m('.Form-group', [
              m(Switch, {
                  state: settings.markCards,
                  onchange: () => {
                    settings.markCards ^= true
                  },
                }, app.translator.trans('walsgit.admin.settings.mark_cards')
              ),
            ]),
            m('.Form-group', [
              m('label', app.translator.trans('walsgit.admin.settings.desktop_card_width', {percent: settings.desktopCardWidth || 49})),
              m('input', {
                type: 'range',
                min: 1,
                max: 100,
                step: 0.1,
                value: settings.desktopCardWidth || 49,
                oninput: e => {
                  settings.desktopCardWidth = e.target.value;
                },
                style: {width: '100%'}
              }),
            ]),
            m('.Form-group', [
              m('label', app.translator.trans('walsgit.admin.settings.tablet_card_width', {percent: settings.tabletCardWidth || 49})),
              m('input', {
                type: 'range',
                min: 1,
                max: 100,
                step: 0.1,
                value: settings.tabletCardWidth || 49,
                oninput: e => {
                  settings.tabletCardWidth = e.target.value;
                },
                style: {width: '100%'}
              }),
            ]),
            m('.Form-group', [
              m('label', app.translator.trans('walsgit.admin.settings.small_cards')),
              m('input.FormControl', {
                type: 'number',
                min: 0,
                value: settings.smallCards,
                oninput: e => {
                  settings.smallCards = e.target.value;
                }
              }),
            ]),
            m('.Form-group', [
              m('label', app.translator.trans('walsgit.admin.settings.choose_tags')),
              m(SwitchTagList, {tags: settings.allowedTags}),
              m(Button, {
                  type: 'submit',
                  className: 'Button Button--primary',
                  loading: this.loading
                }, app.translator.trans('core.admin.settings.submit_button')
              ),
            ]),
          ]),
        ])
      ])
    ]


  }

  onsubmit(e) {
    e.preventDefault();
    if (this.loading) return;
    this.loading = true;
    saveSettings({
      walsgit_discussion_cards: JSON.stringify(this.settings),
    });

    app.modal.show(LoadingModal);
    app.request({
        method: 'DELETE',
        url: app.forum.attribute('apiUrl') + '/cache',
      })
      .then(() => window.location.reload());
  }

}
