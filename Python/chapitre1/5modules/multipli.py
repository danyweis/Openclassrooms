# -*-coding:utf-8 -*

''' module multipli contien la fonction table'''

def table(nb, max = 10):
  i = 0
  while i < max:
    print(i + 1, "*", nb, "=", (i + 1) * nb)
    i += 1

# test de la fonction table

if __name__ == "__main__":
  table(4)