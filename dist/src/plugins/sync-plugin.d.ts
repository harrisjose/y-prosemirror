export function isVisible(item: Y.Item, snapshot?: Y.Snapshot): boolean;
export function ySyncPlugin(yXmlFragment: Y.XmlFragment, { colors, colorMapping, permanentUserData, onFirstRender, mapping }?: YSyncOpts): any;
export function getRelativeSelection(pmbinding: any, state: any): {
    anchor: any;
    head: any;
};
/**
 * Binding for prosemirror.
 *
 * @protected
 */
export class ProsemirrorBinding {
    /**
     * @param {Y.XmlFragment} yXmlFragment The bind source
     * @param {ProsemirrorMapping} mapping
     */
    constructor(yXmlFragment: Y.XmlFragment, mapping?: ProsemirrorMapping);
    type: Y.XmlFragment;
    /**
     * this will be set once the view is created
     * @type {any}
     */
    prosemirrorView: any;
    mux: import("lib0/mutex").mutex;
    mapping: ProsemirrorMapping;
    _observeFunction: any;
    /**
     * @type {Y.Doc}
     */
    doc: Y.Doc;
    /**
     * current selection as relative positions in the Yjs model
     */
    beforeTransactionSelection: {
        anchor: any;
        head: any;
    };
    beforeAllTransactions: () => void;
    afterAllTransactions: () => void;
    _domSelectionInView: boolean;
    /**
     * Create a transaction for changing the prosemirror state.
     *
     * @returns
     */
    get _tr(): any;
    _isLocalCursorInView(): boolean;
    _isDomSelectionInView(): boolean;
    /**
     * @param {Y.Snapshot} snapshot
     * @param {Y.Snapshot} prevSnapshot
     */
    renderSnapshot(snapshot: Y.Snapshot, prevSnapshot: Y.Snapshot): void;
    unrenderSnapshot(): void;
    _forceRerender(): void;
    /**
     * @param {Y.Snapshot|Uint8Array} snapshot
     * @param {Y.Snapshot|Uint8Array} prevSnapshot
     * @param {Object} pluginState
     */
    _renderSnapshot(snapshot: Y.Snapshot | Uint8Array, prevSnapshot: Y.Snapshot | Uint8Array, pluginState: any): void;
    /**
     * @param {Array<Y.YEvent<any>>} events
     * @param {Y.Transaction} transaction
     */
    _typeChanged(events: Array<Y.YEvent<any>>, transaction: Y.Transaction): void;
    _prosemirrorChanged(doc: any): void;
    /**
     * View is ready to listen to changes. Register observers.
     * @param {any} prosemirrorView
     */
    initView(prosemirrorView: any): void;
    destroy(): void;
}
export function createNodeFromYElement(el: Y.XmlElement, schema: any, mapping: ProsemirrorMapping, snapshot?: Y.Snapshot, prevSnapshot?: Y.Snapshot, computeYChange?: (arg0: 'removed' | 'added', arg1: Y.ID) => any): PModel.Node | null;
export function updateYFragment(y: {
    transact: Function;
}, yDomFragment: Y.XmlFragment, pNode: any, mapping: ProsemirrorMapping): void;
/**
 * Either a node if type is YXmlElement or an Array of text nodes if YXmlText
 */
export type ProsemirrorMapping = Map<Y.AbstractType<any>, PModel.Node | Array<PModel.Node>>;
export type ColorDef = {
    light: string;
    dark: string;
};
export type YSyncOpts = {
    colors?: Array<ColorDef>;
    colorMapping?: Map<string, ColorDef>;
    permanentUserData?: Y.PermanentUserData | null;
    mapping?: ProsemirrorMapping;
    /**
     * Fired when the content from Yjs is initially rendered to ProseMirror
     */
    onFirstRender?: Function;
};
export type NormalizedPNodeContent = Array<Array<PModel.Node> | PModel.Node>;
import * as Y from 'yjs';
import * as PModel from 'prosemirror-model';
