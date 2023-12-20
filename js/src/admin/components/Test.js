import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import app from 'flarum/app';



export default class Test extends ExtensionPage {

  oninit(vnode) {
    super.oninit(vnode);
    this.settings = JSON.parse(app.data.settings.walsgit_discussion_cards || null);
  }

  content() {
    return m('.ExtensionPage-settings', [
      m('.container', [
        m('h1', 'Hello World!')
      ])
    ]);
  }
}