import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar } from '@wordpress/edit-post';
import { FC } from 'react';

export const ExamplePlugin: FC = () => {
  return (
    <PluginSidebar name="collaborar-example-plugin" title="Example Plugin">
      Content of Sidebar
    </PluginSidebar>
  );
};

registerPlugin('collaborar/example-plugin', {
  render: ExamplePlugin,
	icon: 'smiley'
});
