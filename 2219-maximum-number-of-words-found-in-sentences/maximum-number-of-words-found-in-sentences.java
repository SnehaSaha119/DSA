class Solution {
    public int mostWordsFound(String[] sentences) {
        int maxLen = Integer.MIN_VALUE;
        for(String sentence : sentences){
            int len = sentence.split(" ").length;
            maxLen = Math.max(maxLen,len);
        }

        return maxLen;
    }
}