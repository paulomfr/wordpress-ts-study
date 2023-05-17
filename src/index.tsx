import { FC } from 'react';
import { useSelect } from '@wordpress/data';
import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar } from '@wordpress/edit-post';

import {ifCondition} from '@wordpress/compose'

interface EditorSelector {
  getCurrentPostType: () => string;
}

type Select = (selector: string) => EditorSelector;

const ExamplePlugin: FC = () => (
	<PluginSidebar name="collaborar-example-plugin" title="Example Plugin" icon="smiley">
		Current: post
	</PluginSidebar>
);

export const ConditionalExamplePlugin = ifCondition(() => {
	const { postType } = useSelect((select: Select) => ({
		postType: select('core/editor').getCurrentPostType(),
	}), []);

  return postType === 'post';
})(ExamplePlugin);

registerPlugin('collaborar-example-plugin', {
  render: ConditionalExamplePlugin,
	icon: 'smiley'
});
