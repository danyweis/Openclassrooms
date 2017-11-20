# -*-coding:utf-8 -*
import donnees
import fonctions
import pickle


# TRY IF THE FILE SCORE EXIST ALLREADY
try:
    with open("score", "rb") as f:
        scoreDepickle = pickle.Unpickler(f)
        getScore = scoreDepickle.load()
# IF THE FILE DOES NOT EXISTE AND THE PROGRAM RAISES AN ERROR CREATE THE FILE
except FileNotFoundError:
    with open("score", "wb") as f:
        scorePickle = pickle.Pickler(f)
        scorePickle.dump(donnees.score)


# WELCOME TEXT
#print(donnees.bienvenu)
print(donnees.joueurConnu)


# OPEN  THE FILE SCORE AND STORE THE SCORE IN getScore
with open("score", "rb") as f:
    scoreDepickle = pickle.Unpickler(f)
    getScore = scoreDepickle.load()
# ASK THE PLAYER TO TYPE IN HIS NAME
playerName = str(input("Pseudo : "))
# LOOK IF THE NAME ALREADY IN THE FILE IF YES SAY HI AND SHOW THE SCORE
if playerName in getScore.keys():
    #tester = getScore[playerName]
    print("Hi " + playerName + " you current score is " + str(getScore[playerName]))
# IF NAME NOT JET IN THE FILE CREATE PLAYER WITH SCORE OF 0
else:
    getScore[playerName] = 0
    print("Hi " + playerName + " you current score is " + str(getScore[playerName]))
# START THE GAME OR SET SCORE TO 0
choix = input(donnees.startGame)
if choix == "D" or choix == "d":
    sure = input("Sure? Your score is " + str(getScore[playerName]) + " there is no return your score will be 0 type => Yes <= to delet or anything else to not delet : ")
    if sure == "Y" or sure == "y":
        getScore[playerName] = 0
    else:
        pass
#print(getScore)

print("OK lets start the game")
















#    fonctions.test()
'''
    if playerName in score is True:
        pass
    else:
        score[playerName] = 0
'''
    #print("Bonjour " + playerName + " ton score actuel est de : " +  "pts")
#elif test == "B" or test == "b":
#    with open("scores", "r") as sBoard:
#        scoreBoard = sBoard.read()
#    print(scoreBoard)
#else:
#    pass
#elif test == "E" or test == "e":
    # EXIT THE PROGRAM


# GET RANDOM WORD FROM  = >"fonctions.py line 5"
#print(fonctions.word)
