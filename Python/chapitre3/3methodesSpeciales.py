# => EDTITION DE L'OBJET ET ACCES AUX ATTRIBUTS <=
# CES METHODES VONT TRAVAILLER SUR L'OBJET 
# ELLES INTERVIENNENT AU MOMENT DE LE CREER OU DE SUPPRIMER

# __init__ =>   PREND UN NOMBRE DE VARIABLE D'ARGUMENTS ET PERMET DE CONTROLER 
#               LA CREATION DE NOS ATTRIBUTS

class Exemple:
    """ Un petit exemple de classe"""
    def __init__(self, le_nom): # LE_NOM => L'ARGUMENT ATTENDU A LA CREATION D'UN OBJET
        """ Exemple de constructeur"""
        self.nom = le_nom 
        self.autre_attribut = "une valeur"

# POUR CREER UN OBJET IL FAUT PASSER L'ARGUMENT QU'ATTEND LE CONSTRUCTEUR
mon_objet = Exemple("un premier exemple")

# A PARTIR DU MOMENT OU L'OBJET EST CREE, ON PEUT ACCEDER A SES ATTRIBUTS GRACE
# A mon_objet.nom_attribut ET EXECUTER SES METHODES GRACE A mon_objet.nom_methode()

# __del__ =>    EST APPELEE AU MOMENT DE LA DESTRUCTION DE L'OBJET, L'OBJET SERA
#               SUPPRIME A LA FIN DE L'EXECUTION 

def __del__(self):
    """Methode appelee quand l'objet est supprime"""
    print("Cest la fin! Pouff ... on me supprime") 

# __repr__ =>   ELLE AFFECTE LA FACON DONT EST AFFICHE L'OBJET QUAND ON TAPE 
#               DIRCTEMENT SON NOM. ON LA DEFINIT QUAND ON SOUHAITE FACILITER
#               LE "DEBUG" SUR CERTAINS OBJETS

class Personne:
    """ Classe representant une personne"""
    def __init__ (self, nom, prenom):
        """Constructeur de notre classe"""
        self.nom = nom
        self.prenom = prenom
        self.age = 33

    def __repr__(self):
        """ Quand on entre l'objet dans l'interpreteur"""
        return "Personne: nom({}), prenom({}), age({})".format( \
                self.nom, self.prenom, self.age)

# RESULTAT 
personne1 = Personne("Micado", "Jean")
personne1 # RETOURNE 'Personne: nom(Micado), prenom(Jean), age(33)'
# ON PEUT AUSSI APPELEE repr(personne1) SUR L'OBJET

# __str__ =>    EST SPECIALEMENT UTILISEE POUR AFFICHER L'OBJET AVEC print()
#               CETTE METHODE EST EGALEMENT APPELEE POUR CONVERTIR L'OBJET EN 
#               CHAINE AVEC LE CONSTRUCTEUR str

class Personne:
    """ Classe representant une personne """
    def __init__(self, l_name, f_name):
        """Constructeur de notre classe"""
        self.nom = l_name
        self.prenom = f_name
        self.age = 33
    def __str__(self):
        """Methode permettant d'afficher plus joliment notre objet"""
        return "{} {}, age de {} ans".format( \
                self.nom, self.prenom, self.age)

# RESULT
personne2 = Personne("Super", "Man")
print(personne2) # RETOURNE Super Man, age de 33 ans
chaine = str(personne2)
chaine # RETOURNE 'Super Man, age de 33 ans'

# ACCES AUX ATTRIBUTS DE L'OBJET
#
# __getattr__ =>    PERMET DE DEFINIR UNE METHODE D'ACCES A NOS ATTRIBUTS
#                   CETTE METHODE EST APPELEE QUAND ON TAPE objet.attribut
#
# EXEMPLE

class Protege:
    """ Classe possedant une methode particuliere d'acces a ses attributs:
    si l'attribut n'est pas trouve, on affiche une alerte et renvoie None"""

    def __init__(self):
        """ On cree quelques attributs par default"""
        self.a = 1
        self.b = 2
        self.c = 3
    def __getattr__(self, nom):
        """ Si Python ne trouve pas l'attribut nomme nom, il appelle cette 
        methode. On affiche une alerte"""
        
        print("Alert ! Il n'y a pas d'attribut {} ici !".format(nom))
        # print("Dans ce cas on peut le rediriger vers 'self.b' par exemple")
        # print(self.b)

pro = Protege()
pro.a # RETOURNE 1
pro.c # RETOURNE 3
pro.e # PRINT 'Alert ! Il n'y a pas d'attribut e ici !'

