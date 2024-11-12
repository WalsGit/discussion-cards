import app from "flarum/admin/app";
import ExtensionPage from "flarum/admin/components/ExtensionPage";
import UploadImageButton from 'flarum/admin/components/UploadImageButton';

export default class Settings extends ExtensionPage {
	content() {
		return (
			<div className="DiscussionCardsSettings">
				<div className="container">
					<div className="DiscussionCardsSettings--content">
						<h3>{app.translator.trans("walsgit_discussion_cards.admin.settings.general.where_title")}</h3>
						<p className="helpText">
							{app.translator.trans("walsgit_discussion_cards.admin.settings.general.where_info")}
						</p>
						<div className="Section">
							{this.buildSettingComponent({
								type: "flarum-tags.select-tags",
								setting: "walsgit_discussion_cards_allowedTags",
								label: app.translator.trans("walsgit_discussion_cards.admin.settings.general.allowedTags_label"),
								help: app.translator.trans("walsgit_discussion_cards.admin.settings.general.allowedTags_help"),
								options: {
									requireParentTag: false,
								},
							})}
							{this.buildSettingComponent({
								type: "switch",
								setting: "walsgit_discussion_cards_onIndexPage",
								label: app.translator.trans("walsgit_discussion_cards.admin.settings.general.onIndexPage_label"),
								help: app.translator.trans("walsgit_discussion_cards.admin.settings.general.onIndexPage_help"),
							})}
						</div>
						<h3>{app.translator.trans("walsgit_discussion_cards.admin.settings.general.primaryCardOptions_title")}</h3>
						<p className="helpText">
							{app.translator.trans("walsgit_discussion_cards.admin.settings.general.primaryCardOptions_info")}
						</p>
						<div className="Section">
							{this.buildSettingComponent({
								type: "number",
								setting: "walsgit_discussion_cards_primaryCards",
								label: app.translator.trans("walsgit_discussion_cards.admin.settings.general.primaryCards_label"),
								help: app.translator.trans("walsgit_discussion_cards.admin.settings.general.primaryCards_help"),
								min: 0,
								step: 1,
								placeholder: 4,
							})}
							{this.buildSettingComponent({
								type: "number",
								setting: "walsgit_discussion_cards_desktopCardWidth",
								label: app.translator.trans("walsgit_discussion_cards.admin.settings.general.desktopCardWidth_label"),
								help: app.translator.trans("walsgit_discussion_cards.admin.settings.general.desktopCardWidth_help"),
								min: 10,
								max: 100,
								step: 1,
								placeholder: 49,
							})}
							{this.buildSettingComponent({
								type: "number",
								setting: "walsgit_discussion_cards_tabletCardWidth",
								label: app.translator.trans("walsgit_discussion_cards.admin.settings.general.tabletCardWidth_label"),
								help: app.translator.trans("walsgit_discussion_cards.admin.settings.general.tabletCardWidth_help"),
								min: 10,
								max: 100,
								step: 1,
								placeholder: 49,
							})}
						</div>
						<h3>{app.translator.trans("walsgit_discussion_cards.admin.settings.general.cardOptions_title")}</h3>
						<p className="helpText">
							{app.translator.trans("walsgit_discussion_cards.admin.settings.general.cardOptions_info")}
						</p>
						<div className="Section">
							<div className="DC-DefaultImageSettings">
								<h4>{app.translator.trans("walsgit_discussion_cards.admin.settings.general.defaultImage_title")}</h4>
								<p className="helpText">
									{app.translator.trans("walsgit_discussion_cards.admin.settings.general.defaultImage_info")}
								</p>
								{app.forum.attribute("walsgitDiscussionCardsDefaultImage") === null 
									? <div className="imgStub"></div> 
									: <img className="DC-UserUploadedImage" src={app.forum.attribute("baseUrl") + "/assets/" + app.forum.attribute("walsgitDiscussionCardsDefaultImage")}/>
								}
								{m(UploadImageButton, {name: "walsgit_discussion_cards_default_image", class: "DC-UploadImageBtn"})}
							</div>
							{this.buildSettingComponent({
								type: "switch",
								setting: "walsgit_discussion_cards_previewText",
								label: app.translator.trans("walsgit_discussion_cards.admin.settings.general.previewText_label"),
								help: app.translator.trans("walsgit_discussion_cards.admin.settings.general.previewText_help"),
							})}
							{this.buildSettingComponent({
								type: "switch",
								setting: "walsgit_discussion_cards_showAuthor",
								label: app.translator.trans("walsgit_discussion_cards.admin.settings.general.showAuthor_label"),
								help: app.translator.trans("walsgit_discussion_cards.admin.settings.general.showAuthor_help"),
							})}
							{this.buildSettingComponent({
								type: "switch",
								setting: "walsgit_discussion_cards_showReplies",
								label: app.translator.trans("walsgit_discussion_cards.admin.settings.general.showReplies_label"),
								help: app.translator.trans("walsgit_discussion_cards.admin.settings.general.showReplies_help"),
							})}
							{this.buildSettingComponent({
								type: "switch",
								setting: "walsgit_discussion_cards_showBadges",
								label: app.translator.trans("walsgit_discussion_cards.admin.settings.general.showBadges_label"),
								help: app.translator.trans("walsgit_discussion_cards.admin.settings.general.showBadges_help"),
							})}
							{this.buildSettingComponent({
								type: "switch",
								setting: "walsgit_discussion_cards_markReadCards",
								label: app.translator.trans("walsgit_discussion_cards.admin.settings.general.markReadCards_label"),
								help: app.translator.trans("walsgit_discussion_cards.admin.settings.general.markReadCards_help"),
							})}							
						</div>
						<h3>{app.translator.trans("walsgit_discussion_cards.admin.settings.general.otherOptions_title")}</h3>
						<p className="helpText">
							{app.translator.trans("walsgit_discussion_cards.admin.settings.general.otherOptions_info")}
						</p>
						<div className="Section">
							<h4>If <a href="https://flarum.org/extension/flarumite/simple-discussion-views" target="_blank" rel="noopener noreferrer">Flarumite Simple Discussion Views</a> is installed & activated</h4>
							{this.buildSettingComponent({
								type: "switch",
								setting: "walsgit_discussion_cards_showViews",
								label: app.translator.trans("walsgit_discussion_cards.admin.settings.general.showViews_label"),
								help: app.translator.trans("walsgit_discussion_cards.admin.settings.general.showViews_help"),
							})}
						</div>
						{this.submitButton()}
					</div>
				</div>
			</div>
		);
	}
}
