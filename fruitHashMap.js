class hashMap {
	constructor(size){
		this.data = new Array(size);
	}
	_hash(key) {
		let hash = 0;
		for(let i = 0; i < key.length; i++){
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}
	setMap(key, value){
		let address = this._hash(key)
		if(!this.data[address]){
			this.data[address] = [];
		}
		this.data[address].push([key, value])
	}
	getMap(key){
		let address = this._hash(key)
		const currentBasket = this.data[address]
		if(currentBasket){
			for(let i = 0; i < currentBasket.length; i++){
				if(currentBasket[i][0] === key)
					return currentBasket[i][1]
			}
		} 
		return undefined
	}

	keys(){
		const keyArray = []
		for(let i = 0; i < this.data.length; i++){
			if(this.data[i]){
				for(let j = 0; j < this.data[i].length; j++){
					keyArray.push(this.data[i][j][0])
				}
			}
		}
		return keyArray.sort((a, b) => a.localeCompare(b))
	}
}
const myHashMap = new hashMap(50);
// console.log(myHashMap._hash('apple'))
myHashMap.setMap('banana', 120)
myHashMap.setMap('apple', 100)
myHashMap.setMap('grapes', 950)
myHashMap.setMap('pomegranate', 12)
myHashMap.setMap('strawberries', 78)
myHashMap.setMap('coconut', 15)
console.log(myHashMap.data)
console.log(myHashMap.getMap('pomegranate'))
console.log(myHashMap.keys())
