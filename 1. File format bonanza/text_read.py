a = {}
list = []
with open("text.txt") as f:
    while True:
        line = f.readline().strip("\n")
        if not line:
            break
        a["brand"] = line
        line = f.readline().strip("\n")
        a["model"] = line
        line = f.readline().strip("\n")
        a["year"] = line
        line = f.readline().strip("\n")
        a["os"] = line
        list.append(a.copy())
f.close()

print(list)