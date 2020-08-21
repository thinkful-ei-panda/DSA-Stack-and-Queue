// Creates a node containing the data and a reference to the next item
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    /* If the stack is empty, then the node will be the
           top of the stack */
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function peek(item) {
  console.log(item.top);
}

function isEmpty(item) {
  if (item.top === null) {
    console.log(`No data here bro`);
  } else {
    console.log(`Yeah my dude, there is some data here`);
  }
}

function display(item) {
  console.log(item.top.next);
}

let starTrek = new Stack();
let blankTrek = new Stack();

starTrek.push("Kirk");
starTrek.push("Spock");
starTrek.push("McCoy");
starTrek.push("Scotty");

console.log(`-----------startTrek Stack tests-----------------`);
console.log(starTrek.top.data);
console.log(starTrek.top.next);
console.log(starTrek.top.next.data);
console.log(starTrek.top.next.next);
console.log(starTrek.top.next.next.data);
console.log(starTrek.top.next.next.next);
console.log(starTrek.top.next.next.next.data);
console.log(starTrek.top.next.next.next.next);

console.log(`-----------helper function tests-----------------`);
peek(starTrek);
isEmpty(starTrek);

peek(blankTrek);
isEmpty(blankTrek);

display(starTrek);

console.log(`-----------McCoy Pop-----------------`);
starTrek.pop("McCoy");

display(starTrek);

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  if (s === s.split("").reverse().join("")) {
    console.log(`yes ${s} this is a mf palindrone`);
  } else {
    console.log(`Naw Bruh, ${s} ain't no palindrone`);
  }
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));
console.log(is_palindrome("allow"));
console.log(is_palindrome("lol"));
