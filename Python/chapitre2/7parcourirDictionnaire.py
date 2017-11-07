# -*-coding:utf-8 -*

#PARCOURS DES CLES
fruits = {"pommes" : 21, "melons" : 3, "poires" : 31}
for cle in fruits:
    print(cle)

# MIEUX
legumes = {"pomme de terre" : 51, "carottes" : 24, "radis" : 73}
for cle in legumes.keys(): # AVEC keys() ON EST SUR DE RECEVOIRE LES CLES
    print(cle)

# PARCOURS DES VALEURS
boisson = {"The" : 12, "Eau" : 32, "Soda" : 4}
for valeur in boisson.values():
    print(valeur)

# AUSSI POSSIBLE D'UTILISER DES CONDITIONS
if 32 in boisson.values():
    print("Une des boissons se trouve dans la quantité 32.")

# PARCOURIR DES CLES ET DES VALEURS SIMULTANEMENT => fonction -> enumerate ET methode -> items (CA RENVOIE UNE TUPLE)
vin = {"Bordeux" : 6, "Bandol" : 4, "Risling" : 11}
for cle, valeur in vin.items():
    print("La clé {} contient la valeur {}.".format(cle, valeur))

# LES DICTIONNAIRES ET PARAMETRES DE FONCTION

#RECUPERER LES PARAMETRES NOMMES DANS UN DICTIONNARE

def fonctionInconnue(**parametresNommes):
    """FONCTION PERMETTANT DE VOIR COMMENT RECUPERER
    LES PARAMETRES NOMMES DANS UN DICTIONNAIRE"""

    print("J'ai reçu en parametres nommes : {}.".format(parametresNommes))
fonctionInconnue() # AUCUN PARAMETRE
fonctionInconnue(p = 4, j = 8)

"""POUR CAPTURER TOUS LES PARAMETRES NOMMES NON PRECISES DANS UN
DICTIONNAIRE IL FAUT METTRE DEUX ETOILES ** AVANT LE NOM DU PARAMETRE"""

# POUR AVOIR UNE FONCTION QUI ACCEPTE N'IMPORTE QUEL TYPE DE PARAMETRES, NOMMES OU NON,
# DANS N'IMPORTE QUEL ORDRE, DANS N'IMPORTE QUEL QUANTITE, IL FAUT LA DECLARER:

# => def fonctionQuiPrendTout(*enListe, **enDictionnaire):

#TRANSFORMER UN DICTIONNAIRE EN PARAMETRES NOMMES D'UNE FONCTION

"""
parametres = {"sep" : " >> ", "end" : " -\n"}
print("Voici", "un", "exemple", "d'appel", **parametres)

print("Voici", "un", "exemple", "d'appel", sep=" >> ", end=" -\n")
"""
