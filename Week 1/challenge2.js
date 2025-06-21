class SearchSuggestionSystem {
    constructor(products) {
        
        this.products = [...products].sort();
    }
    
    getSuggestions(searchWord) {
        const result = [];
        
      
        for (let i = 1; i <= searchWord.length; i++) {
            const prefix = searchWord.slice(0, i);
            const suggestions = [];
            
            
            for (const product of this.products) {
                if (product.startsWith(prefix) && suggestions.length < 3) {
                    suggestions.push(product);
                }
            }
            
            result.push(suggestions);
        }
        
        return result;
    }
}