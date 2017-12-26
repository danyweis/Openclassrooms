class Personne: # EN GENERALE UNE CLASSE EST DEFINIT AVEC UN PMAJUSCULE AU DEBUT
    """Classe definissant une personne caracterisee par :
    - son nom
    - son prenom
    - son age
    - son lieu de residence"""

    def __init__(self): # LA METHODE CONSTRUCTEUR
        """Pour l'instant, on ne va qu'un seul attribut"""
        self.nom = "Dupont"
        self.prenom = "Jean"
        self.age = 33
        self.lieu_residence = "Paris"
    
# VOYONS LES DETAIL
""" -   la definition de la classe, elle est constituee du mot-cle "class", du nom
        de la classe et des " : "
    -   Une "docstring" commentant la classe. Cela est important de prendre l'habitude
        de commenter les classes
    -   La definition de notre constructeur est presque une fonction "classique" sauf
        elle a pour nom "__init__" c'est invariable, en Python tous les constructeurs
        s'appellent ainsi et dans la definition de methode on passe un premier 
        parametre nomme "self" 
    -   Une nouvelle "docstring" 
    -   Dans le constructeur on cree une variable "self.nom" et je lui donne comme
        valeur "Dupont"
"""

# POUR VOIR LE RESULTAT

bernard = Personne()
print(bernard)  # RENVOIT <__main__.Personne instance at 0x105e90098>
print(bernard.nom) # RENVOIT 'Dupont'

jean = Personne()
print(jean.nom) # RETOURNE 'Dupont'
print(jean.prenom) # RETOURNE 'Jean'
print(jean.age) # RETOURNE 33
print(jean.lieu_residence) # RETOURNE 'Paris'
# SI JEAN DEMENAGE A BERLIN
jean.lieu_residence = "Berlin"
print(jean.lieu_residence) # RETOURNE 'Berlin'

class AutrePersonne:
    """Classe definissant une personne caracterisee par :
    - son nom
    - son prenom
    - son age
    - son lieu de residence"""

    def __init__(self, nom, prenom):
        """constructeur de la classe"""
        self.nom = nom
        self.prenom = prenom
        self.age = 33
        self.lieu_residence = "Paris"

ben = AutrePersonne("Micado", "Ben")
print(ben.nom) # RETOURNE 'Micado'
print(ben.prenom) # RETOURNE 'Ben'
print(ben.age) # RETOURNE 33

# ATTRIBUTS DE CLASSE

class Compteur:
    """Cette classe possede un attribut de classe qui s'incremente a
    chaque fois que l'on cree un objet de ce type"""

    objets_crees = 0 # LE COMPTEUR VAUT 0 AU DEPART 
    def __init__(self):
        """A chaque fois qu'on cree un objet, on incremente le compteur"""
        Compteur.objets_crees += 1

print(Compteur.objets_crees) # RETOURNE 0
a = Compteur()
print(Compteur.objets_crees) # RETOURNE 1
b = Compteur()
print(Compteur.objets_crees) # RETOURNE 2

# A CHAQUE FOIS QUE JE CREE UN OBJET DE TYPE Compteur, LATTRIBUT DE LA 
# CLASSE objets_crees S'INCREMENTE DE 1

class TableauNoir:
    """Classe definissant une surface sur laquelle on peut ecrire, que l'on
    peut lire et effacer, par jeu de methodes. l'attribut modifie est "surface" """

    def __init__(self):
        """Par default, la surface est vide"""
        self.surface = ""

    def ecrire(self, message_a_ecrire):
        """Methode permettant d'ecrire sur la surface du tableau. Si la surface
        n'est pas vide, on saute une ligne avant de rajouter le message a ecrire"""

        if self.surface != "":
            self.surface += "\n"
        self.surface += message_a_ecrire

    def lire(self):
        """Cette methode se charge d'afficher la surface du tableau"""
        print(self.surface)

    def effacer(self):
        """Cette methode se charge d'effacer la surface du tableau"""
        self.surface = ""

# TEST DE LA CLASSE
tab = TableauNoir()
tab.lire()
tab.ecrire("Cool c'est les vacances!")
tab.ecrire("Joyeux Noel!")
tab.lire()
tab.effacer()
tab.lire()

help(TableauNoir) # CELA AFFICHE LA DOCUMENTATION SUR NOTRE CLASSES

# METHODES DE CLASSE ET METHODES STATIQUES
class UnCompteur:
    """Cette classe possede un attribut de classe qui s'incremente a chaque
    fois que l'on cree un objet de ce type"""

    objects_crees = 0 
    def __init__(self):
        """A chaque fois qu'un objet est creer, le compteur est incrementer"""
        UnCompteur.objects_crees += 1
    def combien(cls):
        """Methode de classe affichant combien d'objets on ete crees"""
        print("Jusqu'a present, {} objets ont ete crees".format(cls.objects_crees))
    combien = classmethod(combien)
    # POUR QUE PYTHON RECONNAISSE UNE METHODE DE CLASSE IL FAUT APPELER LA 
    # FONCTION "classmethod" QUI PREND EN PARAMETRE LA METHODE QUE L'ON VEUT
    # CONVERTIR ET RENVOIE LA METHODE CONVERTIE

# LE RESULTAT

UnCompteur.combien()
a = UnCompteur()
UnCompteur.combien()
b = UnCompteur()
UnCompteur.combien()

# LES METHODES STATIQUE

class Test:
    """une calsse de test pour les methodes statique qui ne prennent pas de 
    premier parametre ni 'self' ni 'cls' """
    def afficher():
        """Fonction chargee d'afficher quelque chose"""
        print("On affiche la meme chose")
        print("peu importe les donnees de l'objet ou de la classe")
    afficher = staticmethod(afficher)


# ==> ICI C'EST EN BONUS PAS IMPORTANT A 100% PEUT ETRE PLUS TARD <==   

# ABOUT THE dir FUNCTION
class DirTest:
    """Une classe de test tout simplement"""
    def __init__(self):
        """On definit dans le constructeur un unique attribut"""
        self.mon_attribut = "ok"
    def afficher_attribut(self):
        """Methode affichant l'attribut 'mon_attribut' """
        print("Mon attribut est {0}".format(self.mon_attribut))

# CREONS UN OBJET DE LA CLASSE DirTest
un_test = DirTest()
un_test.afficher_attribut() # RENVOIE => Mon attribut est ok
dir(un_test)
# LA FONCTION dir RENVOIE UNE LISTE COMPRENANT LE NOM DES ATTRIBUTE
# ET DES METHODES DE L'OBJET
# LA FONCTION dir SE CONTENTE DE RENVOYER TOUT CE QU'IL Y A DANS L'OBJET

# L'ATTRIBUT SPECIAL __dict__
un_test = DirTest()
un_test.__dict__ # RENVOIE {'mon_attribut': 'ok'}

# ON PEUT AUSSI CHANGER L'ATTRIBUT MAIS C'EST DECONSEILLER
un_test.__dict__["mon_attribut"] = "plus ok"
un_test.afficher_attribut() # RENVOIE => Mon attribut est plus ok

# RESUME

# => ON DEFINIT UNE CLASSE AVEC LA SYNTAXE => class NomClasse:
# => LES METHODES SE DEFINISSENT COMME LES FONCTIONS SAUF QU'ELLES SE TROUVENT
#   DANS LE CORP DE LA CLASSE
# => LES METHODES 'INSTANCE PRENNENT EN PREMIER PARAMETRE => self , L'INSTANCE
#   DE L'OBJET MANIPULE
# => ON CONSTRUIT UNE INSTANCE DE CLASSE EN APPELANT SON CONSTRUCTEUR, UNE METHODE
#   D'INSTANCE APPELEE __init__
# => ON DEFINIT LES ATTRIBUTS D'UNE INSTANCE DANS LE CONSTRUCTEUR DE SA CLASSE, EN 
#   SUIVANT CETTE SYNTAXE: self.nom_attribut = valeur
