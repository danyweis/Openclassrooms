# -*-coding:Utf-8 -*

print("La boule \"while\"")
# boucle while

nb = 7 #On garde la variable contenant le nmbre dont on veut la table de multiplication
i = 0 # C'est notre variable compteur que nous allons incrémenter dans la boucle

while i < 10: # Tant que i est strictement inférieur à 10
    print(i + 1, "*", nb, "=", (i + 1) * nb)
    i += 1 # On incrémente i de 1 à chaque tour de boucle


print("La boule \"for\"")
# boucle for

# for ELEMENT in SEQUENCE
chaine = "Bonjour les ZEROS"
for lettre in chaine: # lettre peut aussi etre i
    print(lettre)

autreChaine = "Salut les LOULOUS"
for autreLettre in autreChaine:
    if autreLettre in "AEIOUYaeiouy": # autreLettre est une voyelle
        print(autreLettre)
    else:
        print("*")

print("Le mot clé \"break\"")
# mot clé break

#LA BOUCLE TEMPS QU'ON TAPE PAS Q JUSTE POUR EXEMPLE
while 1: # 1 est toujours vrai => boucle infinie
    lettre = input("Tapez 'Q' pour quitter : ")
    if lettre == "Q":
        print("Fin de la boucle")
        break

print("Le mot clé \"continue\"")
# mot clé continue

i = 1
while i < 20: # Tant que i est inferieur à 20
    if i % 3 == 0:
        i += 4 # On ajoute 4 à i
        print("On incrémente i de 4. i est maintenant égale à", i)
        continue # On retourne au while sans exécuter les autres lignes
    print("La variable i =", i)
    i += 1 # Dans le cas classique on ajoute juste 1 à i
