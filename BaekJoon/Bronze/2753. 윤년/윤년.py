a = int(input())

1 <= a <= 4000

x = (a % 4 == 0 and a % 100 != 0)
y = (a % 400 == 0)

if x:
    print("1")
elif y:
    print("1")
else:
    print("0")