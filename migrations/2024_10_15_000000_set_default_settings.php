<?php

use Flarum\Database\Migration;

$settings = [
    'previewText' => 0,
    'cardBadges' => 0,
    'cardFooter' => 0,
    'Views' => 0,
    'markCards' => 0,
    'Replies' => 0,
    'onIndexPage' => 0,
    'smallCards' => 10,
    'desktopCardWidth' => 49,
    'tabletCardWidth' => 49,
    'allowedTags' => []
];

return Migration::addSettings([
    'walsgit_discussion_cards' => json_encode($settings),
    'walsgit_discussion_cards_default_image_path' => null
]);
