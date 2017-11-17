# -*-coding:utf-8 -*
import donnees
import fonctions


# WELCOME TEXT
print(donnees.bienvenu)
test = input(donnees.joueurConnu)

if test == "S" or test == "s":
    playerName = input("Pseudo : ")
elif test == "N" or test == "n":
    playerName = input("Tu veux jouer sous quel pseudo : ")
elif test == "B" or test == "b":
    with open("scores", "r") as sBoard:
        scoreBoard = sBoard.read()
    print(scoreBoard)
#elif test == "E" or test == "e":
    # EXIT THE PROGRAM



print(fonctions.word)
