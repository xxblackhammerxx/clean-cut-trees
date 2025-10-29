#!/bin/bash

# Fix unescaped entities in service-areas-ogden file
FILE="src/app/(frontend)/service-areas/service-areas-ogden-ut-tree-service/page.tsx"

if [[ -f "$FILE" ]]; then
    # Make backup
    cp "$FILE" "$FILE.backup"
    
    # Fix apostrophes
    sed -i '' "s/Ogden's/Ogden\&apos;s/g" "$FILE"
    sed -i '' "s/species'/species\&apos;/g" "$FILE" 
    sed -i '' "s/We're/We\&apos;re/g" "$FILE"
    sed -i '' "s/don't/don\&apos;t/g" "$FILE"
    sed -i '' "s/arborists'/arborists\&apos;/g" "$FILE"
    
    # Fix quotes - be more specific to avoid JSX attributes
    sed -i '' 's/"\([^"]*Trees[^"]*\)"/\&ldquo;\1\&rdquo;/g' "$FILE"
    sed -i '' 's/"\([^"]*professional[^"]*\)"/\&ldquo;\1\&rdquo;/g' "$FILE"
    sed -i '' 's/"\([^"]*service[^"]*\)"/\&ldquo;\1\&rdquo;/g' "$FILE"
    
    echo "Fixed entities in $FILE"
fi