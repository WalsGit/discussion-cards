import sortTags from 'flarum/tags/utils/sortTags';
import Link from 'flarum/components/Link';


export default function craftTags(tags) {
  if (tags) {
    return [sortTags(tags).map(function (tag) {
      return [<Link className="cardTag" style={{backgroundColor: tag.color()}}
                    href={app.route('tag', {tags: tag.slug()})}>{tag.name()}</Link>];
    })];
  }
};
