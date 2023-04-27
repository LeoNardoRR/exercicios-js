#Escreva um algoritmo que armazene um valor X em uma variável A e um valor Y em uma variável B. 
#Troque os valores das duas variáveis sem criar uma terceira e usando apenas operações matemáticas.

valx = 10
valy = 20

print ('O valor 1 :', valx)
print ('O valor 2 :', valy)

valx, valy = valy, valx

print ('Aqui segue os valores invertidos: ')
print ('O valor 1: ', valx)
print ('O valor 2: ', valy)