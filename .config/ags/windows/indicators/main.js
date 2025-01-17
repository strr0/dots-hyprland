import { Widget } from '../../imports.js';
import Osd from "./onscreendisplay.js";

export default (monitor) => Widget.Window({
    name: `indicator${monitor}`,
    monitor,
    className: 'indicator',
    layer: 'overlay',
    visible: true,
    anchor: ['top'],
    child: Osd(),
});
