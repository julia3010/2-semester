<?php
/*
Plugin Name: TextSizeChanging
Plugin URI: http://wpfolder.com
Description: Увеличение / уменьшение основного текста статьи в режиме реального времени
Version: 1.0
Author: Юлия Севостьянова
Author URI: http://wpfolder.com
License: GPL2
*/
add_filter('the_content', function($content) {
  wp_register_script('tsc_app', plugins_url('TextSizeChanging/tsc_app.js'));
  wp_enqueue_script('tsc_app', plugins_url('TextSizeChanging/tsc_app.js'));
  wp_enqueue_style('tsc_style', plugins_url('TextSizeChanging/tsc.css'));
  $script_path = plugins_url('TextSizeChanging/tsc_app.js');
  echo $content . '<br>';
  echo '<div class="tsc_wrapper">';
  echo '<div class="tsc_btn_wrp">';
  echo '<div class="tsc_button" onclick="decreaseTextSize()">12pt</div>';
  echo '<div class="tsc_button" onclick="increaseTextSize()">16pt</div>';
  echo '</div>';
  echo '</div>';
});
?>
