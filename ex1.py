#Escreva um algoritmo que recebe um valor e imprima a sua tabuada
numero = float(input('digite um número: ')) #declarou a variavel número como float (para números reais)

auxiliar = 0 #variavel que vai ser multiplicada

print('*' * 20) #printado 20 caracteres
print('Tabuada de {}' .format (numero)) #printado 20 caracteres
print('*' * 20) #printado 20 caracteres


while(auxiliar <=10): #loop para imprimir 10 resultados
    print('{0} X {1} = {2}'.format(auxiliar, numero, (auxiliar * numero)))  

    #('{0} X {1} = {2}' -> é o comando feito
    #(auxiliar x numero = (auxiliar * numero))
    #O .format é usado para formatar strings. Ele permite a inserção de valores em uma string formatada de maneira fácil e flexível.
    #É o que vai sair dentro das '{}'

    auxiliar = auxiliar + 1 #????