/*
  Se não sabe o que é isto, volte para os vídeos de JavaScript.
*/
document.addEventListener('DOMContentLoaded', function() {
  /*
    Se não sabe o que é isto, volte ao ingrediente 2.
  */
  let db = connect('https://p-co-desig.firebaseio.com/')

  /*
    Uma query string é uma maneira de colocar um dicionário
    no próprio endereço da página. O início dela é marcado
    por um "?" e ela consiste em um número indeterminado de
    pares "chave=valor" separados por "&".

    A função extract lê a query string da página atual e
    transforma ela em um dicionário JavaScript usual.
  */
  let params = extract()

  /*
    Se não sabe o que é isto, volte ao ingrediente 3.
  */

  let path = "/area/" + params["projeto"]

  db.download(path, function(data) {
    /*
      Se não sabe o que é isto, volte ao ingrediente 3.
    */
    replace('body', {
        'bla': data['descricao'],
        'ble': data['goal'],
        'bli': data['titulo'],
        'blo': data['semestre'],
        'blu': data['materia'],
        'blao': data['image'],
    })
  })
})