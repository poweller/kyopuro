#              A - World Cup              
# ----------------------------------------
# 問題
# https://atcoder.jp/contests/abc262/tasks/abc262_a
# ----------------------------------------

# 場合分け
# Y%4 == 0 = Y+2
# Y%4 == 1 = Y+1
# Y%4 == 2 = Y
# Y%4 == 3 = Y+3

Y = int(input())
print(Y + (2 - Y % 4) % 4)
