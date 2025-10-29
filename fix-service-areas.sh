#!/bin/bash

# Fix unescaped entities in service area pages
SERVICE_AREA_FILES=(
  "src/app/(frontend)/service-areas/clinton-ut-tree-service/page.tsx"
  "src/app/(frontend)/service-areas/davis-county-ut-tree-service/page.tsx"
  "src/app/(frontend)/service-areas/eden-ut-tree-service/page.tsx"
  "src/app/(frontend)/service-areas/farr-west-ut-tree-service/page.tsx"
  "src/app/(frontend)/service-areas/hooper-ut-tree-service/page.tsx"
  "src/app/(frontend)/service-areas/plain-city-ut-tree-service/page.tsx"
  "src/app/(frontend)/service-areas/pleasant-view-ut-tree-service/page.tsx"
  "src/app/(frontend)/service-areas/salt-lake-county-ut-tree-service/page.tsx"
  "src/app/(frontend)/service-areas/service-areas-farr-west-ut-tree-service/page.tsx"
  "src/app/(frontend)/service-areas/st-george-ut-tree-service/page.tsx"
  "src/app/(frontend)/service-areas/sunset-ut-tree-service/page.tsx"
)

# Fix the common "Utah's" pattern
for file in "${SERVICE_AREA_FILES[@]}"; do
  if [[ -f "$file" ]]; then
    sed -i.backup 's/Utah'\''s/Utah\&apos;s/g' "$file"
    echo "Fixed Utah's in $file"
  fi
done

echo "Fixed common Utah's issues in service area files"