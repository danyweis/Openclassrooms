# -*-coding:utf-8 -*

# [] LES CROCHETS DELIMITES LES LISTES
# () LES PARENTAISES DELIMITES LES TULPES
# {} LES ACCOLADES DELIMITES LES DICTIONNAIRS

monDictionnaire = {}
monDictionnaire["pseudo"] = "Supattra"
monDictionnaire["mot de passe"] = "*"
print(monDictionnaire)

# POUR CHANGER UNE VALEUR
deuxiemeDict = {}
deuxiemeDict["pseudo"] = "Ploy"
deuxiemeDict["mot de passe"] = "*"
deuxiemeDict["pseudo"] = "JJ"
print(deuxiemeDict)

# POUR ACCEDER LA VALEUR D'UNE CLE PRECISE
print(monDictionnaire["pseudo"]) # SI LA CLE N'EXISTE PAS UNE EXEPTION DE TYPE KeyError SERA LEVEE

autreDictionnaire = {}
autreDictionnaire[0] = "a"
autreDictionnaire[1] = "e"
autreDictionnaire[2] = "i"
autreDictionnaire[3] = "o"
autreDictionnaire[4] = "u"
autreDictionnaire[5] = "y"
print(autreDictionnaire)

# ON PEUT DEJA REMPLIR UN DICTIONNARE DES LA CREATION
placard = {"chemise" : 3, "pantalon" : 6, "tee-shirt" : 7}

# ==> SUPPRIMER DES CLE D'UN DICTIONNAIRE
# AVEC LE MOT-CLE "del" OU LA METHODE DE DICTIONNAIRE "pop"
print(placard)
del placard["chemise"] # AVEC "del" => chemise EST SUPPRIMER
print(placard)
placard["pull"] = 4
print(placard)
print(placard.pop("pull")) # AVEC "pop" => pull EST SUPPRIMER ET IL RENVOIE LA VALEUR

# ==> INSERER UNE FONCTION DANS UN DICTIONNAIRE
"""
#PAS VRAIMENT UTILE
print2 = print # L'OBJET print2 POINTERA SUR LA FONCTION print
print2("Affichons un message")
"""

# CECI EST PLUS UTILE
def fete():
    print("C'est la fête.")

def oiseau():
    print("Fais comme l'oiseau ...")

fonctions = {}
fonctions["fete"] = fete # ON NE MET PAS LES PARENTAISES
fonctions["oiseau"] = oiseau # ON NE MET PAS LES PARENTAISES
print(fonctions) # DONNE CECI : {'oiseau': <function oiseau at 0x1013330c8>, 'fete': <function fete at 0x101331c08>}
print(fonctions["oiseau"]) # DONNE CECI :  <function oiseau at 0x00BA5198>
fonctions["oiseau"]() # UNE FONCTOIN ON L'APPELE COMME CECI
