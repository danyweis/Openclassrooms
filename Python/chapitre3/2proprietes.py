class Personne:
    """ Classe definissant une personne caracterisee par:
    - son nom ;
    - son prenom ;
    - son age ;
    - son lieu de residence"""

    def __init__(self, nom, prenom):
        """Constructeur de notre classe"""
        self.nom = nom
        self.prenom = prenom
        self.age = 33
        self._lieu_residence = "Paris" # ATTENTION LE SOULIGNE _ DEVANT LE NOM
    
    def _get_lieu_residence(self):
        """Methode qui sera appelee quand on souhaitera acceder en lecture 
        a l'attribut 'lieu_residence'"""

        print("On accede a l'attribut lieu_residence !")
        return self._lieu_residence

    def _set_lieu_residence(self, nouvelle_residence):
        """Methode appelee quand on souhaite modifier le lieu de residence"""
        print("Attention, il semble que {} demenage a {}".format(\
                self.prenom, nouvelle_residence))
        self._lieu_residence = nouvelle_residence
    
    # IL FAUT DIRE A PYTHON QUE NOTRE ATTRIBUT lieu_residence POINTE
    # VERS UNE PROPRIETE
    lieu_residence = property(_get_lieu_residence, _set_lieu_residence)

# => EXPLICATION <=

jean = Personne("Micado", "Jean")
print(jean.nom) # RETOURNE 'Micado'
print(jean.prenom) # RETOURNE 'Jean'
print(jean.age) # RETOURNE 33
print(jean.lieu_residence) # RETOURNE 'Paris'
jean.lieu_residence = "Berlin"
print(jean.lieu_residence) # RETOURNE 'Berlin'

# IL EST AUSSI POSSIBLE DE DEFINIR EN TROISIEME POSITION DE CONSTRUCTEUR property
# UNE METHODE QUI SERA APPELEE QUAND ON FERA "del objet.lieu_residence" ET EN 
# QUATRIEME POSITION UNE METHODE QUI SERA APPELEE EN FESSANT "help(objet.lieu_residence)"
# CES FONCTIONNALITES SONT MOINS UTILISEE MAIS ELLES EXISTENT