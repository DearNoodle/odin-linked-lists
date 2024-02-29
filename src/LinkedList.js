import LinkedListNode from "./LinkedListNode";

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = newNode;
    }
  }

  prepend(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  size() {
    if (!this.head) {
      return 0;
    }
    let cur = this.head;
    let nodeNum = 1;
    while (cur.next) {
      nodeNum += 1;
      cur = cur.next;
    }
    return nodeNum;
  }

  getHead() {
    if (!this.head) {
      throw new Error("No head for empty list.");
    }
    return this.head;
  }

  getTail() {
    if (!this.head) {
      throw new Error("No tail for empty list.");
    }
    let cur = this.head;
    while (cur.next) {
      cur = cur.next;
    }
    return cur;
  }

  at(index) {
    if (!Number.isInteger(index)) {
      throw new Error("Invalid parameter type. Integer required.");
    }
    if (index < 0) {
      throw new Error("List index out of range");
    }
    if (!this.head) {
      throw new Error("Cannot access index of empty list");
    }
    let cur = this.head;
    for (let i = 0; i < index; i++) {
      if (!cur.next) {
        throw new Error("List index out of range");
      }
      cur = cur.next;
    }
    return cur;
  }

  pop() {
    if (!this.head) {
      throw new Error("Cannot pop an empty list");
    }
    let cur = this.head;
    while (cur.next.next) {
      cur = cur.next;
    }
    cur.next = null;
  }
}

export default LinkedList;
