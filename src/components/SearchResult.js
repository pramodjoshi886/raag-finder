import React from 'react';

function SearchResult({ result }) {
    return (
        <div className="result">
            {result ? (
                <p>Found Raaga:
                    <h1>{result}</h1> </p>
            ) : (
                <h1>No Raaga Found!</h1>
            )}
        </div>
    );
}

export default SearchResult;
