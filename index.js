import LinkedList from './linkedList.js';

const list = LinkedList();

list.append('Bob');
list.append('Scott');
list.prepend('Ipswitch');
list.append('Dana');
list.append('Jerry');
list.append('Elaine');
list.prepend('Newman');
list.append('Kramer');

list.pop();
list.pop();
list.pop();
list.pop();

list.insertAt('Peterman', 4);
console.log(list.size());
console.log(list.toString());
console.log(list.contains('Bob'));
console.log(list.find('Ipswitch'));
