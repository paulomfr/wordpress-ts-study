import { FC } from 'react';
import { useSelect } from '@wordpress/data';
import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar } from '@wordpress/edit-post';
import { store as editorStore } from '@wordpress/editor';

import {ifCondition} from '@wordpress/compose'

const ExamplePlugin: FC = () => (
	<PluginSidebar name="collaborar-example-plugin" title="Example Plugin" icon="smiley">
		Current: post
	</PluginSidebar>
);

export const ConditionalExamplePlugin = ifCondition(() => {
	const { postType } = useSelect((select) => ({
		postType: select(editorStore)
	}), []);

  return postType === 'post';
})(ExamplePlugin);

registerPlugin('collaborar-example-plugin', {
  render: ConditionalExamplePlugin,
	icon: 'smiley'
});
