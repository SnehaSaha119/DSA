class Trie {
    trie: string[]
    constructor() {
        this.trie = []
    }

    insert(word: string): void {
        this.trie.push(word)
    }

    search(word: string): boolean {

        return this.trie.includes(word)
        
    }

    startsWith(prefix: string): boolean {
        let l = prefix.length

        let result = this.trie.findIndex((value)=>value.substring(0,l)===prefix)

        if(result==-1) return false
        else return true
        
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */