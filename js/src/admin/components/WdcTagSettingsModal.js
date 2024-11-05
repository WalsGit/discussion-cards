import Button from "flarum/common/components/Button";
import Modal from "flarum/common/components/Modal";
import Stream from "flarum/common/utils/Stream";

export default class WdcTagSettingsModal extends Modal {
	oninit(vnode) {
		super.oninit(vnode);

		this.tagDefaultImage = Stream(this.attrs.model.data.attributes.walsgitDiscussionCardsTagDefaultImage);
        console.log(this);
	}
	className() {
		return "WdcTagSettingsModal Modal--large";
	}

	title() {
		return app.translator.trans(
			"walsgit_discussion_cards.admin.tag_modal.title"
		);
	}

	content() {
		return [
			<div className="Modal-body">
				<div className="Form">
					<p>
						{app.translator.trans("walsgit_discussion_cards.admin.tag_modal.intro_text")}
					</p>
                        
					<div className="Form-group">
						<textarea
							className="FormControl"
							rows="30"
							bidi={this.tagDefaultImage}
						/>
					</div>
					<Button
						type="submit"
						className="Button Button--primary"
						loading={this.loading}
						disabled={!this.changed()}
					>
						{app.translator.trans("walsgit_discussion_cards.admin.tag_modal.submit_button")}
					</Button>
				</div>
			</div>,
		];
	}

	changed() {
		return this.tagDefaultImage() !== this.attrs.model.walsgit_discussion_cards_tag_default_image;
	}

	onsubmit(e) {
		e.preventDefault();

		const tag = this.attrs.model;
		const tagDefaultImage = this.tagDefaultImage();

		this.loading = true;

		app.request({
			method: "PATCH",
			url:
				app.forum.attribute("apiUrl") +
				"/tags/" +
				tag.id() +
				"/tagDefaultImage",
			body: { data: { tagDefaultImage } },
		}).then(function () {
			tag.data.attributes.tagDefaultImage = tagDefaultImage;
			app.modal.close();
		});
	}
}
