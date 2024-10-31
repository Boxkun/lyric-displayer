import json
import re

input_file = "lib/lyrics.json"
output_file = "lib/processed_lyrics.json"

with open(input_file, "r", encoding="utf-8") as file:
    lyrics_data = json.load(file)

def replace_black_blocks(text):
    return re.sub(r"(█+)", lambda m: f'<span class="block-{len(m.group(1)) * 10}"></span>', text)

for entry in lyrics_data:
    entry["text"] = replace_black_blocks(entry["text"])

with open(output_file, "w", encoding="utf-8") as file:
    json.dump(lyrics_data, file, ensure_ascii=False, indent=4)

print("已替换")
