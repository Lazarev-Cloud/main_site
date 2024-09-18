#!/bin/bash

# Universal project file collector script

# Set the root directory and output file based on the argument provided
TARGET="${1:-full-code}"   # Default to "full-code" if no argument is passed
ROOT_DIR="${2:-./}"        # Default is current directory, can be passed as an argument
OUTPUT_FILE="${TARGET}.txt"

# Clear the output file if it exists
> "$OUTPUT_FILE"

# File extensions to include
extensions=("*.tsx" "*.ts" "*.js" "*.json" "*.css" "*.env" "*.html" "*.config.js" "*.py" "*.ini" "*.sh" "*.yaml" "*.md" "*.yml")

# Directories or patterns to exclude entirely
exclude_dirs=(".venv" "__pycache__" ".next" "node_modules" "supabase" "styles" "fonts" "css" "images")

# Build exclusion expressions for the find command
exclude_args=()
for dir in "${exclude_dirs[@]}"; do
    exclude_args+=("-path" "$ROOT_DIR/$dir" "-prune" "-o")
done

# Iterate over each file extension and find matching files, skipping excluded directories
for ext in "${extensions[@]}"; do
    find "$ROOT_DIR" "${exclude_args[@]}" -type f -name "$ext" -print | while IFS= read -r FILE; do
        echo "File: $FILE" >> "$OUTPUT_FILE"
        echo "----------------------------------------" >> "$OUTPUT_FILE"
        cat "$FILE" >> "$OUTPUT_FILE"
        echo -e "\n\n" >> "$OUTPUT_FILE"
    done
done

echo "All project files have been collected into $OUTPUT_FILE, excluding specified directories."
