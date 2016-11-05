
let React = require('react');
let IconBase = require('react-icon-base');

export default class GoGear extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 40 40" {...this.props}>
                <g><path d="m20 13.7c-3.5 0-6.3 2.8-6.3 6.3 0 3.5 2.8 6.3 6.3 6.3 3.5 0 6.3-2.8 6.3-6.3 0-3.5-2.8-6.3-6.3-6.3z m12.7 9.9l-1.2 2.8 2.3 4.5-2.8 2.8-4.6-2.2-2.7 1.2-1.4 4.2-0.2 0.6h-4l-1.7-4.8-2.8-1.2-4.5 2.3-2.8-2.8 2.2-4.6-1.2-2.7-4.8-1.6v-4l4.8-1.7 1.2-2.8-2.1-4-0.2-0.5 2.8-2.8 4.6 2.2 2.7-1.2 1.4-4.2 0.2-0.6h4l1.7 4.8 2.8 1.2 4.5-2.3 2.8 2.8-2.2 4.6 1.2 2.7 4.8 1.6v4l-4.8 1.7z"/></g>
            </IconBase>
        );
    }
}