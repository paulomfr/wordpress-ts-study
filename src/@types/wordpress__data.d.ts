declare module '@wordpress/data' {
	import { select } from "@wordpress/data";

	export function useSelect<T>(mapSelect: (selector: typeof select) => T, dependencies?: any[]): T;
}
