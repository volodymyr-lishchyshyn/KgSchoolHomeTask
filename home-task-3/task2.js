function ellipsis(text, length, replacement = "...") {
    if (typeof text !== "string") return text;
    if (text.length <= length) return text;

    return Array.from(text)
        .slice(0, length - replacement.length)
        .join("").trim() + replacement;
}

console.log(ellipsis("Today is rainy Sunday", 15));
console.log(ellipsis("Full text.", 15));