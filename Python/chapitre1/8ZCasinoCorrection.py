# -*-coding:utf-8 -*

from random import randrange
from math import ceil

# Declaration des variables de depart
argent = 1000 # On a 1000$ au debut du jeu
continuerPartie = True # Booleen qui est vrai tant qu'on doit continuer la partie

print("Vous vous installez à la table de roulette avec", argent, "$.")

""" 
    Tant qu'on doit continuer la partie on demande a 
    l'utilisateur de saisir le nombre sur lequel il veut miser
"""
while continuerPartie:
    nombreMise = -1
    while nombreMise < 0 or nombreMise > 49:
        nombreMise = input("Tapez le nombre sur lequel vous voulez miser (entre 0 et 49): ")
        # On convertit le nombre misé
        try:
            nombreMise = int(nombreMise)
        except ValueError:
            print("Vous n'avez pas saisi de nombre")
            nombreMise = -1
            continue
        if nombreMise < 0:
            print("Ce nombre est négatif")
        if nombreMise > 49:
            print("Ce nombre est supérieur à 49")

    # Maintenant on sélectionne la somme à miser sur le nombre
    mise = 0
    while mise <= 0 or mise > argent:
        mise = input("Tapez le montant de votre mise : ")
        # On convertit la mise
        try:
            mise = int(mise)
        except ValueError:
            print("Vous n'avez pas saisie un nombre")
            mise = -1
            continue
        if mise <= 0:
            print("La mise saisie est négatif ou nulle.")
        if mise > argent:
            print("Vous ne pouvez miser autant, vous n'avez que", argent, "$")

    """
    Le nombre misé et la mise ont été sélectionnés par l'utilisateur,
    on fait tourner la roulette
    """
    numeroGagnant = randrange(50)
    print("La roulette tourne... ... ... et s'arrête sur le numéro", numeroGagnant)

    # On établit le gain du joueur
    if numeroGagnant == nombreMise:
        print("Félicitation ! Vous obtenez", mise * 3, "$ !")
        argent += mise * 3
    elif numeroGagnant % 2 == nombreMise % 2: # ils sont la même couleur
        mise = ceil(mise * 0.5)
        print("Vous avez misé sur la bonne couleur. Vous obtenez", mise, "$")
        argent += mise
    else:
        print("Désolé l'ami, c'est pas pour cette fois. Vous perdez votre mise.")
        argent -= mise

    # On interrompt la partie si le joueur est ruiné
    if argent <= 0:
        print("Vous êtes ruiné! C'est la fin de la partie.")
        continuerPartie = False
    else:
        # On affiche l'argent du joueur
        print("Vous avez à présent", argent, "$")
        quitter = input("Souhaitez-vous quitter le casino (o/n) ? ")
        if quitter == "o" or quitter == "O":
            print("Vous quittez le casino avec vos gains.")
            continuerPartie = False
