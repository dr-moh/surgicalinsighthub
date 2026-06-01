import os
import glob

# Get all JS files
base_dir = "/Users/dr.moh/Documents/SIH/sih_project/js/questions"
modules = []

for f in glob.glob(os.path.join(base_dir, "*.js")):
    name = os.path.basename(f)
    if name != "question-loader.js":
        modules.append(f'        "{name}",')

for f in glob.glob(os.path.join(base_dir, "review", "*.js")):
    name = os.path.basename(f)
    modules.append(f'        "review/{name}",')

# Update question-loader.js
loader_path = "/Users/dr.moh/Documents/SIH/sih_project/js/question-loader.js"
with open(loader_path, "r", encoding="utf-8") as f:
    content = f.read()

start_marker = "const modules = ["
end_marker = "];"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker, start_idx)

if start_idx != -1 and end_idx != -1:
    new_modules_str = start_marker + "\n" + "\n".join(modules) + "\n    "
    new_content = content[:start_idx] + new_modules_str + content[end_idx:]
    with open(loader_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print(f"Successfully updated question-loader.js with {len(modules)} modules!")
else:
    print("Could not find modules array bounds in question-loader.js")
