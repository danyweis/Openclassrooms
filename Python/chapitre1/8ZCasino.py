# -*-coding:utf-8 -*

# moneyPlayer = int .... $
moneyPlayerInfo = print("You now have", moneyPlayer, "$")
# while moneyPlayer != 0:
# print("you have", moneyPlayer, "$")
# fieldPlayer = input => entre 0 et 49
# tapisPlayer = input => combien de dollar
# moneyPlayer -= tapisPlayer

# print("Rien ne va plus!)
# result = random.randrange(50)
# print(result)


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
  print("The bank owes you", tapisPlayer * 0.5 + tapisPlayer)
  bankToPlayer = tapisPlayer * 0.5 + tapisPlayer
  moneyPlayer += bankToPlayer
  moneyPlayerInfo
  
# PLAYER DID LOSE
else:
  print("Sorry you lost your", tapisPlayer)
  print("you didn't get the", result, "and not the right color")
  moneyPlayerInfo
