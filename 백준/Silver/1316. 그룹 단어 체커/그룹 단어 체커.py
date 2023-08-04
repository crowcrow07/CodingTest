n = int(input())

group_word = 0
for i in range(n):
    word = input()
    error = 0
    for k in range(len(word)-1):
        if word[k] != word[k+1]:
            new_word = word[k+1:]
            if new_word.count(word[k]) > 0:
                error += 1
    if error == 0:
        group_word += 1
print(group_word)