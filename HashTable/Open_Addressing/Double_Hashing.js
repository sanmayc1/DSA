class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  _charCode(key) {
    let code = 0;
    for (let char of key) {
      code += char.charCodeAt(0);
    }
    return code;
  }
  _hash1(key) {
    let hash = this._charCode(key);
    return hash % this.size;
  }

  _hash2(key) {
    let hash = this._charCode(key);
    return (hash % (this.size - 1)) + 1;
  }

  set(key, value) {
    let index1 = this._hash1(key);
    let index2 = this._hash2(key);
    let index = index1;
    let i = 0;

    while (this.table[index] && this.table[index].key !== key) {
      i++;
      index = (index1 + i * index2) % this.size;

      if (i >= this.size) {
        console.log("Hashtable is full");
        return;
      }
    }

    if (this.table[index] && this.table[index].key === key) {
      this.table[index].value = value;
    } else {
      this.table[index] = { key, value };
    }
  }

  get(key) {
    let index1 = this._hash1(key);
    let index2 = this._hash2(key);
    let index = index1;
    let i = 0;
    while (this.table[index]) {
      if (this.table[index].key === key) return this.table[index].value;
      i++;
      index = (index1 + i * index2) % this.size;

      if (i >= this.size) return -1;
    }
    return -1;
  }

  delete(key) {
    let index1 = this._hash1(key);
    let index2 = this._hash2(key);
    let index = index1;
    let i = 0;
    while (this.table[index]) {
      if (this.table[index].key === key) {
        this.table[index]= null;
        return true
      }
      i++;
      index = (index1 + i * index2) % this.size;

      if (i >= this.size) return -1;
    }
    return -1;
  }
}

const ht = new HashTable(10);
ht.set("name", "sanmay");
ht.set("amen", "ashmin");
console.log(ht.get("name"));
console.log(ht.get("amen"));
ht.delete("amen")
console.log(ht.get("amen"));