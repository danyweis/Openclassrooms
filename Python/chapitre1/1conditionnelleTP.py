# -*-coding:Utf-8 -*


#Exercice que j'ai fais moi même
annee = input("Entre une année pour voir si elle est bissextile...:")

lannee = annee
annee = int(annee)

if annee % 4 != 0:
    print("L'année ", lannee, " n'est pas bissextile")
else:
    if annee % 100 == 0:
        if annee % 400 == 0:
            print("L'année ", lannee, " est bissextile")
        else:
            print("L'année ", lannee, " n'est pas bissextile")
    else:
        print("L'année ", lannee, " est bissextile")

#Correction 1

annee = input("Saisissez une année : ")

annee = int(annee)
bissextile = False

if annee % 400 == 0:
    bissextile = True
elif annee % 100 == 0:
    bissextile = False
elif annee % 4 == 0:
    bissextile = True
else:
    bissextile = False

if bissextile: #Si l'annee est bissextile
    print("L'année saisie est bissextile")
else:
    print("L'année saisie n'est pas bissextile")

#Correction 2

annee = input("Saisissez une année : ")

annee = int(annee)

if annee % 400 == 0 or (annee % 4 == 0 and annee % 100 != 0):
    print("L'année saisie est bissextile")
else:
    print("L'année saisie n'est pas bissextile")