# -*-coding:utf-8 -*
import random
import math

moneyPlayer = 20
moneyPlayerInfo = "You now have", moneyPlayer, "$"
print(moneyPlayerInfo)
while moneyPlayer != 0:
  print("you have", moneyPlayer, "$")
  fieldPlayer = input("Entrée un nombre entre 0 et 49: ")
  fieldPlayer = int(fieldPlayer)
  while fieldPlayer < 0 or fieldPlayer > 49:
    print("That is not between 0 and 49")
    fieldPlayer = input("Lets try again: ")
    fieldPlayer = int(fieldPlayer)

  tapisPlayer = input("How much $ you want to put on it? ")
  tapisPlayer = int(tapisPlayer)
  while tapisPlayer > moneyPlayer or tapisPlayer <= 0:
    print("You can not put", tapisPlayer, "because it is more then you have or less then 1")
    tapisPlayer = input("How much $ you want to put? ")
    tapisPlayer = int(tapisPlayer)
  moneyPlayer -= tapisPlayer
  print("3,2,1...")
  print("Rien ne va plus!")
  result = random.randrange(50)
  print(result)


# DOES THE BANK HAVE TO PAY?

# PLAYER WINS
  if fieldPlayer == result: 
    print("Congratulation you got", result)
    print("The bank owes you", tapisPlayer * 3, "$")
    bankToPlayer = tapisPlayer * 3
    moneyPlayer += bankToPlayer
    moneyPlayerInfo

# PLAYER DOES HAVE THE SAME COLOR
  elif fieldPlayer % 2 == 0 and result % 2 == 0 or fieldPlayer % 2 != 0 and result % 2 !=0:
    print("Congratulation you got", fieldPlayer)
    if result % 2 == 0:
      print(fieldPlayer, "and", result, "are both BLACK")
    else:
      print(fieldPlayer, "and", result, "are both RED")
    print("The bank gives you back your", tapisPlayer, "and owes you", 0.5 * tapisPlayer)
    bankToPlayer = tapisPlayer * 0.5 + tapisPlayer
  # bankToPlayer = math.ceil(bankToPlayer)
    moneyPlayer += math.ceil(bankToPlayer)
  # moneyPlayer += bankToPlayer
    moneyPlayerInfo
  
# PLAYER DID LOSE
  else:
    print("Sorry you lost your", tapisPlayer)
    print("you didn't get the", result, "and not the right color")
    moneyPlayerInfo
print("Sorry you have no more money left")