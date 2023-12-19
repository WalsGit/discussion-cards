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
    'allowedTags' => [],
    'default_image_path' => null
];

return Migration::addColumns('tags', [
    'walsgit_dc_settings' => ['text', 'nullable' => true, 'default' => json_encode($settings)]
]);