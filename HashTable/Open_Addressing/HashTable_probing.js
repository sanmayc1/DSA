class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  _hash(key) {
    let code = 0;
    for (let char of key) {
      code += char.charCodeAt(0)
    }
    return code % this.size;
  }

  set(key, value) {
    let index = this._hash(key);
    let start = index;

    while (
      this.table[index] &&
      this.table[index].key !== key &&
      this.table[index].key !== "DELETED"
    ) {
      index = (index + 1) % this.size;

      if (index === start) {
        console.log("Hash table is full");
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
    let index = this._hash(key);
    let start = index;

    while (this.table[index]) {
      if (this.table[index].key === key) {
        return this.table[index].value;
      }

      index = (index + 1) % this.size;

      if (index === start) {
        return -1;
      }
    }
    return -1;
  }
}

const ht = new HashTable(10);

ht.set("name", "sanmay");
ht.set("nmae", "ashmin");
console.log(ht.get("nmae"));
