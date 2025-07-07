class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  _hash(key) {
    let code = 0;
    for (let char of key) {
      code += char.charCodeAt(0);
    }

    return code % this.size;
  }
  set(key, value) {
    let index = this._hash(key);
    let i = 0;

    while (
      this.table[(index + i * i) % this.size] !== undefined &&
      this.table[(index + i * i) % this.size].key !== key
    ) {
      i++;
      if (this.size <= i) {
        console.log("Hash table full");
        return;
      }
    }

    const newIndex = (index + i * i) % this.size

    if (this.table[newIndex] && this.table[newIndex].key === key) {
      this.table[newIndex].value = value;
    } else {
      this.table[newIndex] = { key, value };
    }
  }

  get(key){
    let index= this._hash(key)
    let i = 0

    while(this.table[(index + i*i) % this.size]){
        if(this.table[(index +i*i) %this.size].key ===key){
            return this.table[(index +i*i) %this.size].value
        }
        i++
        if (this.size <= i) return -1
    }

    return -1
  }
}

const ht = new HashTable(10)
ht.set("name", "sanmay")
ht.set("nmae", "ashmin")
console.log(ht.get('name'))
