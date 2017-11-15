# -*-coding:utf-8 -*
import donnees
import fonctions
import random

# WELCOME TEXT
print(donnees.bienvenu)
test = input(donnees.joueurConnu)

if test == "S" or test == "s":
    playerName = input("Pseudo : ")
elif test == "N" or test == "n":
    playerName = input("Tu veux jouer sous quel pseudo : ")

print(playerName)
