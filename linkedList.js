import Node from './node.js';

const LinkedList = () => {
  let listHead = null;
  let listSize = 0;

  const head = () => listHead;

  const tail = () => {
    let current = listHead;
    let prev = null;

    while (current !== null) {
      prev = current;
      current = current.nextNode;
    }

    return prev;
  };

  const size = () => listSize;

  const append = (value) => {
    const newNode = Node();
    newNode.value = value;

    if (listHead === null) {
      listHead = newNode;
    } else {
      const listTail = tail();
      listTail.nextNode = newNode;
    }

    listSize += 1;
  };

  const prepend = (value) => {
    const newNode = Node();
    newNode.value = value;

    newNode.nextNode = listHead;
    listHead = newNode;

    listSize += 1;
  };

  const at = (index) => {
    if (index < 0 || index >= listSize) {
      return null;
    }

    let i = 0;
    let current = head();
    while (i !== index) {
      current = current.nextNode;
      i += 1;
    }

    return current;
  };

  const pop = () => {
    if (listSize === 0) {
      return null;
    }

    const lastNode = tail();

    if (listSize === 1) {
      listHead = null;
    } else if (listSize > 1) {
      const newTail = at(listSize - 2);
      newTail.nextNode = null;
    }

    listSize -= 1;
    return lastNode;
  };

  const contains = (value) => {
    let current = listHead;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  };

  const find = (value) => {
    let current = listHead;
    let i = 0;

    while (current !== null) {
      if (current.value === value) {
        return i;
      }
      i += 1;
      current = current.nextNode;
    }

    return null;
  };

  const insertAt = (value, index) => {
    if (index < 0 || index > listSize) {
      return;
    }

    if (index === 0) {
      // insert at index 0
      prepend(value);
    } else if (index === listSize) {
      // insert right after last node
      append(value);
    } else {
      // insert between two nodes
      const newNode = Node();
      newNode.value = value;

      const beforeCurrent = at(index - 1);
      const current = beforeCurrent.nextNode;

      beforeCurrent.nextNode = newNode;
      newNode.nextNode = current;

      listSize += 1;
    }
  };

  const removeAt = (index) => {
    if (index < 0 || index >= listSize) {
      return null;
    }

    let toRemove;

    if (index === 0) {
      toRemove = listHead;
      listHead = listHead.nextNode;
    } else {
      const beforeToRemove = at(index - 1);
      toRemove = beforeToRemove.nextNode;
      beforeToRemove.nextNode = toRemove.nextNode;
    }

    toRemove.nextNode = null;
    listSize -= 1;
    return toRemove;
  };

  const toString = () => {
    let current = listHead;
    let string = '';

    while (current !== null) {
      string = `${string}( ${current.value} ) => `;
      current = current.nextNode;
    }

    string = `${string}null`;

    return string;
  };

  return {
    head,
    tail,
    append,
    prepend,
    size,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

export default LinkedList;
