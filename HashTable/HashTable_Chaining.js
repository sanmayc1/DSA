class HashTable {
  constructor(size) {
    this.table = [];
    this.size = size;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.table[index]) {
      this.table[index] = [[key, value]];
      return;
    }

    for (let bucket of this.table[index]) {
      if (bucket[0] === key) {
        bucket[1] = value;
        return;
      }
    }

    this.table[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (!this.table[index]) return -1;
    let bucket = this.table[index].find((data) => data[0] === key);
    if (!bucket) return -1;
    return bucket[1];
  }

  _hash(key) {
    let code = 0;
    for (let char of key) {
      code += char.charCodeAt(0);
    }

    return code % this.size;
  }

  delete(key) {
    let index = this._hash(key);
    if (!this.table[index] || this.table.length <=0) return -1;

    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        if (i === this.table[index].length - 1) {
          this.table[index].pop();
          return;
        }
        [
          this.table[index][i],
          this.table[index][this.table[index].length - 1],
        ] = [
          this.table[index][this.table[index].length - 1],
          this.table[index][i],
        ];
        this.table[index].pop();
        return;
      }
    }
  }
}

const hash = new HashTable(10);
hash.set("name", "hell");
hash.set("nmae", "hi");
console.log(hash.get("name"));
hash.delete("nmae");
console.log(hash.get("nmae"));
