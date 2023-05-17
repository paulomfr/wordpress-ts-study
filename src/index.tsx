import React from 'react';
import { useSelect } from '@wordpress/data';
import { PluginSidebar } from "@wordpress/edit-post";
import { __ } from "@wordpress/i18n";
import { registerPlugin } from "@wordpress/plugins";

const Plugin = () => {
	const postType = useSelect(
		(select) => select('core/editor').getCurrentPostAttribute('type'),
		[]
	);

	console.log('postType', postType);

	return (
		<PluginSidebar
			name="collab-plugin-example"
			title={__('Plugin Example', 'collaborar-plugin')}
			icon="smiley"
		>
			Custom plugin sidebar
		</PluginSidebar>
	)
}

registerPlugin('collab-plugin-example', {
	render: Plugin,
	icon: 'smiley'
})
