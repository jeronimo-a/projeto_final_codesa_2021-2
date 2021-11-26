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
    'template_agenda': list(),
    'template_vestibular': list()
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
DADOS['meses_limpos'] = DADOS['meses'][12:]
DADOS['meses'] = DADOS['meses'][:12]

# junta as strings dos template em uma string para cada
DADOS['template_agenda'] = '\n'.join(DADOS['template_agenda'])
DADOS['template_vestibular'] = '\n'.join(DADOS['template_vestibular'])

''' A seguir, os dados são introduzidos no template da agenda para cada mês do ano '''

# para cada mês
for i in range(12):

    # gera dias aletórios para os eventos
    dias = [random.randint(1, 29), random.randint(1, 29)]
    dias.sort()     # deixa em ordem crescente, para organização

    # organiza as informações que serão inseridas no template da agenda
    conteudo = (
        DADOS['meses_limpos'][i],           # primeira informação
        DADOS['meses_limpos'][i].title(),   # segunda
        DADOS['meses_limpos'][i].upper(),   # terceia
        dias[0],                            # etc.
        random.choice(DADOS['eventos']),
        dias[1],
        random.choice(DADOS['eventos'])
    )

    html = DADOS['template_agenda'] % conteudo     # insere as informações no template da agenda

    # gera o novo HTML do mês
    with open('html/agenda/%s.html' % DADOS['meses'][i], 'w') as file: file.write(html)

''' A seguir, os dados são introduzidos no template do vestibular para quatro vestibulares '''

# para cada um dos quatro vestibulares
for i in range(1,5):

    # organiza as informações que serão inseridas no template do vestibular
    conteudo = (i, i, i)

    html = DADOS['template_vestibular'] % conteudo  # insere as informações no template do vestibular

    # gera o novo HTML do vestibular
    with open('html/vestibulares/vestibular_%d.html' % i, 'w') as file: file.write(html)






