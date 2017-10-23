# -*-coding:utf-8 -*

# EN PYTHON TOUT EST OBJET AUSSI LES CHAINES DE CARACTERES

# DANS L'INTERPRETEUR type(chaine) DONNE COMME RESULTAT <class 'str'>

chaine = "NE CRIE PAS SI FORT !"
chaine.lower() # METTRE LA CHAINE EN MINUSCULE
# RESULTAT : ne crie pas si fort !

"""
    => class = model pour construir un objet => 'str' ici un string

    => chaine = objet
    => lower  = methode
    POUR APPELER UNE METHODE SUR UN OBJET
    => objet.methode()
"""


# METTRE EN FORME UNE CHAINE 

chaine = str() # CREE UNE CHAINE VIDE AUTRE POSSIBILITE chaine = ""
while chaine.lower() != "q": # TANT QUE CHAINE N'EST PAS 'Q' OU 'q'
    print("Tapez 'Q' pour quitter...")
    chaine = input()
print("Merci !")


# D'AUTRE FACON 
minuscules = "une chaine en minuscules"
print(minuscules.upper()) # UNE CHAINE EN MAJUSCULES
print(minuscules.capitalize()) #LA PREMIERE LETTRE EN MAJUSCULE

espaces = "     une chaine avec des espaces     "
print(espaces.strip()) # ON RETIRE LES ESPACES AU DEBUT ET A LA FIN

titre = "introduction"
print(titre.upper().center(20))
# center(20) VEUT DIRE ON VEUT QUE INTRODUCTION SOIT AU CENTRE DE 20 
# CARACTERE ICI INTRODUCTION A 12 DONC ON AJOUTE 4 AU DEBUT ET LA FIN

# POUR VOIR D'AUTRE POSSIBILITE ON UTILISE  help(str) DANS L'INTERPRETEUR



#  => FORMATER ET AFFICHER UNE CHAINE <=
# METHODE format

prenom = "Paul"
nom = "Dupont"
age = 21
print("Je m'appelle {0} {1} et j'ai {2} ans.".format(prenom, nom, age))
# Je mappelle Paul Dupont et j'ai 21 ans.

print("Je m'appelle {0} {1} ({3} {0} pour l'administration) et "\
"j'ai {2} ans.".format(prenom, nom, age, nom.upper()))
# Je m'appelle Paul Dupont(DUPONT Paul pour l'administration) et j'ai 21 ans.

date = "Lundi 23 octobre 2017"
heure = "10:20 p.m."
print("Cela s'est produit le {}, à {}".format(date, heure))
# Cela s'est produit le Lundi 23 octobre 2017, à 10:20 p.m.


# SECONDE SYNTAXE DE LA METHODE format

adresse = """
{noRue}, {nomRue} 
{codePostal} {nomVille} ({pays})
""".format(noRue = 5, nomRue = "rue des Postes", codePostal = 75003, nomVille = "Paris", pays = "France")
print(adresse)

"""
RESULTAT
5, rue des Postes
75003 Paris (France)
"""

# CONCATENATION DE CHAINE

prenom = "Jean"
message = "Bonjour"
chaineComplete = message + prenom # ON UTILISE LE '+' POUR CONCATENER DEUX CHAINES
print(chaineComplete) # RESULTA : BonjourJean 
# POUR AJOUTER UN ESPACE ON FAIS COMME EN JAVASCRIPT
chaineComplete = message + " " + prenom
print(chaineComplete) # RESULTAT : Bonjour Jean

# CE QUI N'EST PAS POSSIBLE 
age = 30
# message = "J'ai " + age + " ans" ==> TypeError : Can't convert 'int' object to str implicitly
message = "J'ai " + str(age) + " ans"
print(message) # RESULTAT : J'ai 30 ans



# ==> PARCOURS ET SELECTION DE CHAINES <==

# ACCEDER AUX CARACTERES D'UNE CHAINE

chaine = "Salut les Zeros !"
chaine[0] # retourne => S
chaine[2] # retourne => l
chaine[-1] # retourne => !


# POUR AVOIR LA LONGUEUR DE LA CHAINE => fonction -> len

chaine = "Salut"
len(chaine) # retourne => 5


# PARCOURIR AVEC while

test = "Salut"
i = 0
while i < len(test):
    print(test[i]) # ON AFFICHE LE CARACTERE A CHAQUE TOUR DE BOUCLE
    i += 1


# SELECTION DE CHAINE

presentation = "Salut"
presentation[0:2] # ON SELECTIONNE LES DEUX PREMIERES LETTRES 'Sa'
presentation[2:len(presentation)] # ON SELECTIONNE LA CHAINE SAUF LES DEUX PREMIERES LETTRES 'lut'
presentation[:2] # DU DEBUT JUSQU'A LE TROISIEME LETTRE NON COMPRISE 'Sa'
presentation[2:] # DE LA TROISIEME LETTRE (COMPRISE) A LA FIN 'lut'

# REMPLACER  UNE LETTRE 

mot = "lac"
# mot[0] = "b" ==> TypeError 
mot = "b" + mot[1:] # CA C'EST POSSIBLE
print(mot) # retourne => bac

""" 
C'EST POSSIBLE MAIS POUR REMPLACER DES LETTRES DANS DES CHAINE
C'EST MIEUX D'UTILISER "count", "find" ET "replace"
"""

