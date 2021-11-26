'''
    Projeto final Co-Design de Aplicativos: STUDYING

    Script auxiliar que preenche as 12 agendas automaticamente

    2021-2 Grupo 08

    - Breno Brolacci Schiavon
    - Jerônimo de Abreu Afrange
    - João Manoel Pasqua Filho
    - Luana de Matos Sorpreso
'''

import os
import random
import pathlib

# determina o local do arquivo atual e garante estar rodando no local certo
local_arquivo = pathlib.Path(__file__).parent.absolute()
os.chdir(local_arquivo)

# caractére que indica comentário
COMENTARIO = '#'

# dicionário que armazena as informações que serão utilizadas
DADOS = {
    'meses': list(),
    'eventos': list(),
    'template': list()
}

# loop de coleta de dados
for tipo_dados in DADOS.keys():

    dados_limpos = list()   # lista à qual os dados processados serão adicionados

    # abre o arquivo dos dados em questão
    with open('recursos/%s.txt' % tipo_dados) as arquivo:

        linhas = list(arquivo)  # converte o arquivo para uma lista de strings brutas

        # de linha em linha
        for linha in linhas:
            if linha[0] != COMENTARIO and linha.strip() != '':  # caso não seja comentário nem linha vazia
                dados_limpos.append(linha.replace('\n', ''))    # remover newline a adioncar à lista de dados processados

    DADOS[tipo_dados] = dados_limpos    # adiciona a lista de dados processados ao dicionário de dados

# separa os meses apresentáveis dos não-apresentáveis (sem e com acento)
DADOS['meses-limpos'] = DADOS['meses'][12:]
DADOS['meses'] = DADOS['meses'][:12]

# junta as strings do template em uma string só
DADOS['template'] = '\n'.join(DADOS['template'])

''' A seguir, os dados são introduzidos na template para cada mês do ano '''

# para cada mês
for i in range(12):

    # gera dias aletórios para os eventos
    dias = [random.randint(1, 29), random.randint(1, 29)]
    dias.sort()     # deixa em ordem crescente, para organização

    # organiza as informações que serão inseridas na template
    conteudo = (
        DADOS['meses-limpos'][i],           # primeira informação
        DADOS['meses-limpos'][i].title(),   # segunda
        DADOS['meses-limpos'][i].title(),   # terceia
        dias[0],                            # etc.
        random.choice(DADOS['eventos']),
        dias[1],
        random.choice(DADOS['eventos'])
    )

    html = DADOS['template'] % conteudo     # insere as informações na template

    # gera o novo HTML do mês
    with open('html/agenda/%s.html' % DADOS['meses'][i], 'w') as file: file.write(html)




