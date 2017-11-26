"""
Ce fichier contien le jeu du pendu.
Il s'appuie sur les fichiers:
- donnees.py
- fonctions.py
"""

from donnees import *
from fonctions import *

# ON RECUPERE LES SCORES DE LA PARTIE
scores = recupScores()

# ON RECUPERE UN NOM D'UTILISATEUR
utilisateur = recupNomUtilisateur()

# SI LUTILISATEUR N'A PAS ENCORE DE SCORE, ON L'AJOUTE
if utilisateur not in scores.keys():
    scores[utilisateur] = 0 # 0 POINT POUR COMMENCER

# NOTRE VARIABLE POUR SAVOIR QUAND ARRETER LA PARTIE
continuerPartie = 'o'

while continuerPartie != 'n':
    print("Joueur {0}: {1} point(s)".format(utilisateur, scores[utilisateur]))
    motATrouver = choisirMot()
    lettresTrouves = []
    motTrouver = recupMotMasque(motATrouver, lettresTrouves)
    nbChances = nbCoups
    while motATrouver != motTrouver and nbChances > 0:
        print("Mot a trouver {0} (encore {1} chances)".format(motTrouver, nbChances))
        lettre = recupLettre()
        if lettre in lettresTrouves: #LA LETTRE A DEJA ETE CHOISIE
            print("Vous avez deja choisi cette lettre")
        elif lettre in motATrouver: # LA LETTRE EST DANS LE MOT A TROUVER
            lettresTrouves.append(lettre)
            print("Bien joue.")
        else:
            nbChances -= 1
            print("... non, cette lettre ne se trouve pas dans le mot ...")
        motTrouver = recupMotMasque(motATrouver, lettresTrouves)

    # A-T-ON TROUVE LE MOT OU NOS CHANCES SONT-ELLES EPUISEES?
    if motATrouver == motTrouver:
        print("Felicitations ! Vous avez trouve le mot {0}.".format(motATrouver))
    else:
        print("PENDU !!! Vous avez perdu.")
    # ON MET A JOUR LE SCORES DE L'UTILISATEUR
    scores[utilisateur] += nbChances

    continuerPartie = input("Souhaitez-vous continuer la partie (O/N) ?")
    continuerPartie = continuerPartie.lower()

# LA PARTIE EST FINIE, ON ENREGISRE LES SCORES
enregistrerScores(scores)

# ON AFFICHE LES SCORES DE L'UTILISATEUR
print("Vous finissez la partie avec {0} points.".format(scores[utilisateur]))
