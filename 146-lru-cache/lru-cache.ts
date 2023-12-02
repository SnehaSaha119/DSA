class LRUCache {
    lruCache: Map<number,number>
    size: number
    constructor(capacity: number) {
        this.lruCache = new Map()
        this.size = capacity
        console.log("**0**",this.size)
    }

    get(key: number): number {

        if(this.lruCache.has(key)){
            let value = this.lruCache.get(key)
            this.lruCache.delete(key)
            this.lruCache.set(key,value)
            return value
        } 
        else return -1
        
    }

    put(key: number, value: number): void {

        if(this.lruCache.has(key)) this.lruCache.delete(key)
        this.lruCache.set(key,value)
        if(this.lruCache.size>this.size){
            //let lruKey = Array.from(this.lruCache)[0][0]
            let lruKey = this.lruCache.keys().next().value
            this.lruCache.delete(lruKey)
        }
        
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */