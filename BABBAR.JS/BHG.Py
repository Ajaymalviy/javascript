n = int(input('enter any number : '))
if n%2!=0:
    print("weird")
else:
    if 5>=n>=2:
        print("not weird")
    elif 5<=n<=20:
        print("weird")
    elif n>20:
        print("not weird")         
