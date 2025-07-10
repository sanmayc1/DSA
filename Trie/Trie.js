class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    word = word.toLowerCase();
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }

    if (!node.isEnd) {
      node.isEnd = true;
    }
  }

  search(word) {
    word = word.toLowerCase();
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }

    return node.isEnd;
  }

  autoComplete(prefix) {
    prefix = prefix.toLowerCase();
    let node = this.root;

    for (let char of prefix) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }

    let result = [];
    this.autoCompleteHelper(prefix, result, node);
    return result;
  }

  autoCompleteHelper(path, result, node) {
    if (node.isEnd) {
      result.push(path);
    }

    for (let char in node.children) {
      this.autoCompleteHelper(path + char, result, node.children[char]);
    }
  }

  longestPrefix() {
    let node = this.root;
    let result = "";

    while (true) {
      let keys = Object.keys(node.children);
      if (keys.length === 1) {
        result += keys[0];
        node = node.children[keys[0]];
      } else {
        break;
      }
    }
    return result;
  }

  remove(word){
   function deleteWord(index,word,node){

      if(index === word.length){
        if(!node.isEnd)return false
        node.isEnd = false
        return Object.keys(node.children).length === 0
      }

      const char = word[index]
      const exist = node.children[char]
      if(!exist)return false

      const shouldDelete = deleteWord( index +1, word, node.children[char])

      if(shouldDelete){
        delete node.children[char]
        return !node.isEnd && Object.keys(node.children).length === 0
      }

      return false
    }
    deleteWord(0, word.toLowerCase(), this.root)
  }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("care");
console.log(trie.search("care"));

console.log(trie.longestPrefix());
trie.remove("care")

console.log(trie.autoComplete("ca"));