function mostWordsFound(sentences: string[]): number {
    let maxLen = Number.MIN_SAFE_INTEGER
    sentences.forEach((sentence)=>{
        let len = sentence.split(" ").length
        maxLen = Math.max(maxLen,len)
    })

    return maxLen
    
};