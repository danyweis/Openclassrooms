# -*-coding:utf-8 -*

# OUVRIR UN FICHIER AVEC open()
'''
open PREND EN PARAMETRE
-> LE CHEMIN
-> LE MODE D'OUVERTURE
    => 'r' OUVERTURE EN LECTURE (READ)
    => 'w' OUVERTURE EN ECRITURE (WRITE)!!!LE CONTENU DU FICHIER EST ECRASER!!!
    => 'a' OUVERTURE EN MODE AJOUT (APPEND) ON ECRIT A LA FIN DU FIHIER SANS
        L'ECRASER!  AVEC 'w' ET 'a' SI LE FICHIER N'EXISTE PAS IL EST CREE
    ON PEUT AJOUTER A TOUT LES MODES LE SIGNE 'b'POUR L'OUVRIR EN BINAIRE
'''
monFichier = open("8fichier.txt", "r")
print(monFichier) # RENVOIE <_io.TextIOWrapper name='8fichier.txt' mode='r' encoding='UTF-8'>

'''
LA FONCTION open CREE UN FICHIER ET RENVOIE UN OBJET DE CLASSE TextIOWrapper
PAR LA SUITE NOUS ALLONS UTILISER DES METHODES DE CETTE CLASSE,
POUR INTERAGIR AVEC LE FICHIER
'''

# FERMER UN FICHIER AVEC close()
'''
IL NE FAUT PAS OUBLIER DE FERMER UN FICHIER SINON UNE AUTRE PARTIE DU CODE NE PEUT
PAS Y ACCEDER CAR IL EST ENCORE OUVERT
'''
monFichier.close()

# LIRE L'INTEGRALITE DU FICHIER read()
monFichier = open("8fichier.txt", "r")
contenu = monFichier.read()
print(contenu)
monFichier.close()

# LA METHODE read() RENVOIE TOUT LE CONTENU DU FICHIER
# contenu EST MAINTENANT UNE CHAINE NORMAL

print(len(contenu))

# ECRITURE DANS UN FICHIER write()
monFichier = open("8fichier.txt", "w") # J'ECRASE LE CONTENU DU FICHIER
monFichier.write("Premier fois que j'ecrit quelque chose dans un \
fichier et tout ca avec Python")
monFichier.close()

# write() N'ACCEPTE EN PARAMETRES QUE DES CHAINES DE CARACTERES
# LE MODULE "os"  CONTIENT BEAUCOUP DE FOCTION INTERESSANTES POUR TRAVAILER AVEC DES FICHIERS


# LE MOT CLE WITH
'''
with open(monFichier.txt, modeOuverture) as variable:
    - operation sur le fichier

ON TROUE DANS L'ORDRE :
    =>LE MOT-CLE "with" PRELUDE AU BLOC DANS LEQUEL ON VA MANIPULER NOTRE FICHIER
    =>NOTRE OBJET, QU'ON APPLELLE AVEC open ET QUI RENVOIE TextIOWrapper
    =>LE MOT-CLE as QUI SIGNIFIE "EN TANT QUE"
'''

# EXEMPLE
with open("8fichier.txt", "r") as monFichier:
    texte = monFichier.read()

# CELA SIGNIFIE SI UNE EXEPTION EST LEVER LE FICHIER SERA TOUT DE MEME FERMERA LA FIN DU BLOC
# POUR VERIFIER JE PEUX APPELLER monFichier.closed SI LE FICHIER EST FREMER monFichier.closed VAUDRA True
# C'EST RECOMMANDER D'UTILISER CETTE SYNTEX CAR ELLE EST PLUS SURE

# ==> ENREGISTRER DES OBJETS DANS DES FICHIERS - MODULE pickle <==
# IL FAUT DEJA IMPORTER LE MODULE
import pickle
'''
with open("donnees", "wb") as fichier:
    monPickle = pickle.Pickler(fichier)
    #   enregistrement ...
'''
# AU FICHIER ON DONNE PAS EXTANTION ET ON AJOUTE LA LETTRE "b" POUR ECRIRE EN BINAIRE

score = {
    "joueur 1": 5,
    "joueur 2": 35,
    "joueur 3": 20,
    "joueur 4": 2,
}
with open("donnees", "wb") as fichier:
    monPickle = pickle.Pickler(fichier)
    monPickle.dump(score) #AVEC LA METHODE .dump() ON ENREGISTRE DANS LE FICHIER

# => RECUPERER NOS OBBJETS ENREGISTRES

'''
with open("donnees", "rb") as fichier:
    monDepickler = pickle.Unpickler(fichier)
    #   lecture des objets dans le fichier
'''
# POUR LIRE DANS UN FICHIER IL FAUT UTILISER LA METHODE .load()
# ELLE RENVOIE LE PREMIER OBJET QUI ETE LU (SI IL Y ON A PLUSIEUR IL FAUT L'APPELER PLUSIEUR FOIS)

with open("donnees", "rb") as fichier:
    monDepickler = pickle.Unpickler(fichier)
    scoreRecupere = monDepickler.load()

print(scoreRecupere)
