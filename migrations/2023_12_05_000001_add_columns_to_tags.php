<?php

use Flarum\Database\Migration;

return Migration::addColumns('tags', [
    'walsgit_dc_settings' => ['text', 'nullable' => true]
]);