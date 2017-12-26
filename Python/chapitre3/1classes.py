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