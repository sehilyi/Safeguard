import { Query } from "../data/query";
import { isNull } from "util";
import { Constants } from '../constants';

export class Visual {
    top: number = 0;
    left: number = 0;
    width: number = 0;
    height: number = 0;
    depth: number = 0;
    childrenHeight: number = 0;

    bottom(withMargin: boolean = false) {
        if (withMargin) return this.top + this.height + Constants.rowSpace;
        return this.top + this.height;
    }

    right() {
        return this.left + this.width;
    }

    verticalCenter() {
        return this.top + this.height / 2;
    }
}

export class ExplorationNode {
    children: ExplorationNode[] = [];
    visual: Visual = new Visual();

    constructor(public parent: ExplorationNode, public query: Query | null) {

    }

    hasChildren() {
        return this.children.length > 0;
    }

    isLeaf() {
        return this.children.length === 0;
    }

    firstChild() {
        return this.children[0];
    }

    lastChild() {
        return this.children[this.children.length - 1];
    }

    addChild(child: ExplorationNode) {
        this.children.push(child);
    }

    isRoot() {
        return isNull(this.parent);
    }
}