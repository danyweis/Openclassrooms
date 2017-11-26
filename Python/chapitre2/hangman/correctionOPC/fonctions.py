"""
Ce fidchier definit des fonctions utilis pour
le programme pendu.
On utilise les donnees du programme contenues
dans donnees.py
"""

import os
import pickle
from random import choice

from donnees import *

# GESTION DES SCORES

def recupScores():
    """Cette fonction recupere les srores enregistres
    si le fichier existe.
    Dans tous les cas, on renvoie un dictionnaire,
    soit l'objet depickle,
    soit un dictionnaire vide.
    On s'appuie sur nomFichierScores definit dans donnees.py"""

    if os.path.exists(nomFichierScores0):
        # LE FICHIER EXISTE ON LE RECUPERE
        fichierScores = open(nomFichierScores, "rb")
        monDepickler = pickle.Unpickler(fichierScores)
        scores = monDepickler.load()
        fichierScores.close()
    else: # LE FICHIER EXISTE PAS
        scores = {}
    return scores

def enregistrerScores(scores):
    """Cette fonction se charge d'enregistrer les scores dans
    le fichier nomFichierScores. Elle recoit en parametre le
    dictionnaire des scores a enregistrer"""

    fichierScores = open(nomFichierScores, "wb") # ON ECRASE LES ANCIENS SCORES
    monPickler = pickle.Pickler(fichierScores)
    monPickler.dump(scores)
    fichierScores.close()

# FONCTION GERANT LES ELEMENTS SAISIS PAR L'UTILISATEUR

def recupNomUtilisateur():
    """ Fonctiion chargee de recuperer le nom de l'utilisateur.
    Le nom de l'utilisateur doit etre compose de 4 caracteres minimum,
    chiffres et lettres exclusivemnt.
    Si ce nom n'est pas valide, on appelle recursivement la fonction
    pour en obtenir un nouveau """

    nomUtilisateur = input("Tapez votre nom: ")
    # ON MET LA PREMIERE LETTRE EN MAJUSCULE ET LES AUTRES MINUSCULES
    nomUtilisateur = nomUtilisateur.capitalize()
    if not nomUtilisateur.isalnum() or len(nomUtilisateur) < 4:
        print("Ce nom est invalide.")
        # ON APPELLE DE NOUVEAU LA FONCTION POUR AVOIR UN AUTRE NOM
        return recupNomUtilisateur()
    else:
        return nomUtilisateur

def recupLettre():
