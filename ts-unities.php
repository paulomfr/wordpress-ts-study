<?php
/**
 * Plugin Name:       Ts Unities
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ts-unities
 *
 * @package           create-block
 */

/**
 * Registers a sidebar plugin
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/plugin-sidebar-0/
 */
function sidebar_plugin_register() {
	// $asset = require __DIR__ . '/build/main.assets.php';

	var_dump(plugin_dir_path(__FILE__));
	die();

	// wp_register_script(
	// 		'collaborar.plugin.ts-unities.js',
	// 		plugins_url( 'build/main.js', __FILE__ ),
	// 		$asset['dependencies'],
	// 		$asset['version'],
	// );
}
add_action( 'init', 'sidebar_plugin_register' );

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
// function create_block_ts_unities_block_init() {
// 	register_block_type( __DIR__ . '/build' );
// }
// add_action( 'init', 'sidebar_plugin_register' );
